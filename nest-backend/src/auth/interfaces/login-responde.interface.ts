import { UserDto } from '../dto/user.dto';

export interface LogingResponse {
  user: UserDto;
  token: string;
}
