import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuhtGuard } from './guards/auht.guard';
import { LogingResponse } from './interfaces/login-responde.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUser: LoginUserDto) {
    return this.authService.login(loginUser);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @UseGuards(AuhtGuard)
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @UseGuards(AuhtGuard)
  @Get('check-token')
  async checkTOken(@Request() req: Request): Promise<LogingResponse> {
    const user = req['user'];
    return {
      user: user,
      token: await this.authService.getJWT({ id: user._id }),
    };
  }

  //@Get(':id')
  //findOne(@Param('id') id: string) {
  //return this.authService.findOne(+id);
  //}

  //@Patch(':id')
  //update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //return this.authService.update(+id, updateAuthDto);
  //}

  //@Delete(':id')
  //remove(@Param('id') id: string) {
  //return this.authService.remove(+id);
  //}
}
