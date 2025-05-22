import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  
  create(createUserDto: User) {
    this.userRepository.createUser(createUserDto);
  }

  findAll() {
    return this.userRepository.getAllUser();
  }

  findOne(ci: number) {
    return this.userRepository.getUserByCI(ci);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.deleteUserByCI(id);
  }
}
