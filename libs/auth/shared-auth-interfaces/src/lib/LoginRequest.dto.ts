import { IsString, IsNotEmpty } from 'class-validator';
export class LoginRequestDTO {
  @IsNotEmpty()
  @IsString()
  idToken: string;
}
