import { Injectable } from '@nestjs/common';
import { IBook } from './interfaces/IBook';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public getAll(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }
  public create(data) {
    const book = new this.BookModel(data);
    return book.save();
  }

  public update(id: string, body) {
    return this.BookModel.findOneAndUpdate({ _id: id }, body);
  }

  public delete(id: string) {
    return this.BookModel.findOneAndRemove({ _id: id });
  }
}
