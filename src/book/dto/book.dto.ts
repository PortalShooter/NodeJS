import { IsDefined, IsOptional, IsString } from 'class-validator';

export class BookDto {
  @IsString()
  @IsDefined()
  public title: string;

  @IsString()
  @IsOptional()
  public description: string;

  @IsString()
  @IsDefined()
  public authors: string;

  @IsString()
  @IsOptional()
  public favorite: string;

  @IsString()
  @IsOptional()
  public fileCover: string;

  @IsString()
  @IsOptional()
  public fileName: string;
}
