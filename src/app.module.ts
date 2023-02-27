import { BookModule } from './book/book.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/book'),
    BookModule,
  ],
})
export class AppModule {}
