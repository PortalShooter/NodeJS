import { BookService } from './book.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IBook } from './interfaces/IBook';
import { BookDocument } from './schemas/book.schema';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.bookService.getAll();
  }

  @Post()
  create(data) {
    return this.bookService.create(data);
  }

  @Put(':id')
  public update(@Param() { id }, @Body() body) {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  public delete(@Param() { id }) {
    return this.bookService.delete(id);
  }
}
