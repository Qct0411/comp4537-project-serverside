import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async findUser() {
    return await this.userService.findUser();
  }

  @Post('create')
  async createUser(@Body() userData: CreateUserDto) {
    const user = await this.userService.createUser(userData);
    if (!user) {
      throw new HttpException('User not created', HttpStatus.BAD_REQUEST);
    } else {
      return {
        message: 'User created successfully',
      };
    }
  }
}
