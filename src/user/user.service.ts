import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findUser() {
    const users = await this.userRepository.find({
      select: {
        email: true,
        role: true,
        api_calls: true,
      },
    });
    return await users;
  }

  async findUserByEmail(email: string) {
    const users = await this.userRepository.find({
      select: {
        email: true,
        role: true,
        api_calls: true,
      },
      where: { email },
    });
    return users;
  }

  async createUser(userData: CreateUserDto) {
    const user = await this.findUserByEmail(userData.email);
    if (user.length > 0) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const newUser = this.userRepository.create({
      ...userData,
      api_calls: 0,
      role: 'user',
    });
    await this.userRepository.save(newUser);
    return newUser;
  }
}
