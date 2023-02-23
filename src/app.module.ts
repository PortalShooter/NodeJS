import { BooksModule } from './books/books.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [BooksModule],
})
export class AppModule {}
