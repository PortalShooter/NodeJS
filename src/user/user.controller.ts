import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  signup(@Body(ValidationPipe) user: UserDto) {
    return this.userService.create(user);
  }
}
