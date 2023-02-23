import { Injectable } from '@nestjs/common';
import { IBook } from './interface/IBook';

const data = [
  {
    id: '1',
    title: 'Мартин Иден',
    description: 'Прекрасная книга',
    authors: 'Джек Лондон',
  },
];

@Injectable()
export class BooksService {
  getAllBooks(): IBook[] {
    return data;
  }
}
