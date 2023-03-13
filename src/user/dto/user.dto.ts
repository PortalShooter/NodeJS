import { IsDefined, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsDefined()
  public email: string;

  @IsString()
  @IsDefined()
  public password: string;

  @IsString()
  @IsDefined()
  public firstName: string;

  @IsString()
  @IsDefined()
  public lastName: string;
}

// @IsOptional()
