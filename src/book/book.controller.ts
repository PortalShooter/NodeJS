import { BookService } from './book.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { BookDocument } from './schemas/book.schema';
import { IBook } from './interfaces/IBook';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.bookService.getAll();
  }

  @Post()
  create(@Body(ValidationPipe) body: BookDto) {
    return this.bookService.create(body);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() body: IBook) {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  public delete(@Param('id', ValidationPipe) id: string) {
    return this.bookService.delete(id);
  }
}
