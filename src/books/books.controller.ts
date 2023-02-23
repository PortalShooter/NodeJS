import { BooksService } from './books.service';
import { Controller, Get } from '@nestjs/common';
import { IBook } from './interface/IBook';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/books')
  getAllBooks(): IBook[] {
    return this.booksService.getAllBooks();
  }
}
