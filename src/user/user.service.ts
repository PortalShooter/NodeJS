import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.shema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  findOne(email: string) {
    return this.UserModel.find((user: User) => user.email === email);
  }

  async create(data) {
    // TODO шифровать пароль перед сохранением

    const user = await new this.UserModel(data);
    return user.save();
  }
}
