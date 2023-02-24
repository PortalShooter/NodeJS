import { BookModule } from './book/book.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/book?directConnection=true',
    ),
    BookModule,
  ],
})
export class AppModule {}
