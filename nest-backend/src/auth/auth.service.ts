import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LogingResponse } from './interfaces/login-responde.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    try {
      const { password, ...userData } = createUserDto;

      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...userData,
      });

      await newUser.save();
      const user = newUser.toJSON();

      return {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        isActive: user.isActive,
        roles: user.roles,
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `${createUserDto.email} ya existe en la base de datos`,
        );
      }
      throw new BadRequestException(`Somethig was wrong :c`);
    }
  }

  async login(loginUser: LoginUserDto): Promise<LogingResponse> {
    const user = await this.userModel.findOne({ email: loginUser.email });
    if (!user) {
      throw new UnauthorizedException('Email or password wrong');
    }
    if (!bcryptjs.compareSync(loginUser.password, user.password)) {
      throw new UnauthorizedException('Email or password wrong');
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isActive: user.isActive,
        roles: user.roles,
      },
      token: await this.getJWT({ id: user.id }),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<LogingResponse> {
    const user = await this.create(createUserDto);

    return {
      user: user,
      token: await this.getJWT({ id: user.id }),
    };
  }

  findAll() {
    return this.userModel.find({});
  }

  async findUserByID(id: string) {
    const user = await this.userModel.findById(id);
    const { password: _, ...userLoged } = user.toJSON();
    return userLoged;
  }

  //findOne(id: number) {
  //return `This action returns a #${id} auth`;
  //}

  //update(id: number, updateAuthDto: UpdateAuthDto) {
  //return `This action updates a #${id} auth`;
  //}

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async getJWT(payload: JwtPayload) {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}
