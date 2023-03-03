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
import { BookDocument } from './schemas/book.schema';
import { IBook } from './interfaces/IBook';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.bookService.getAll();
  }

  @Post()
  create(@Body() body) {
    return this.bookService.create(body);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() body: IBook) {
    console.log(body);
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  public delete(@Param() { id }) {
    return this.bookService.delete(id);
  }
}
