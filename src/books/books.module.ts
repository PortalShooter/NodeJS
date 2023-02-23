import { BooksService } from './books.service';
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
