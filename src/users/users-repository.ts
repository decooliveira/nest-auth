import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async findByEmail(email: string) {
    const user: User = new User();
    user.email = email;

    return user;
  }

  async create(user: User) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }
}
