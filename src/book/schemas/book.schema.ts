import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  public title: string;

  @Prop({ default: '' })
  public description: string;

  @Prop({ required: true })
  public authors: string;

  @Prop({ default: '' })
  public favorite: string;

  @Prop({ default: '' })
  public fileCover: string;

  @Prop({ default: '' })
  public fileName: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
