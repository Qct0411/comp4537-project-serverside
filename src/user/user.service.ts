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

  async findUserById(id: number) {
    const users = await this.userRepository.find({
      where: { id },
    });
    return users[0];
  }

  async findUserByEmail(email: string) {
    const users = await this.userRepository.find({
      where: { email },
    });
    return users;
  }

  async createUser(userData: CreateUserDto) {
    // const user = await this.findUserByEmail(userData.email);
    // if (user.length > 0) {
    //   throw new HttpException('User already exists', HttpStatus.CONFLICT);
    // }
    const newUser = this.userRepository.create({
      ...userData,
      api_calls: 0,
      role: 'user',
    });
    await this.userRepository.save(newUser);
    return newUser;
  }

  async updateUserApiCalls(id: number, api_calls: number) {
    const user = await this.findUserById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user.api_calls = api_calls;
    await this.userRepository.save(user);
    return user;
  }
}
