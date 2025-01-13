import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsDateString,
} from 'class-validator';
import { PostType, StatusType } from '../enums/postType.enums';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  title: string;

  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsEnum(StatusType)
  @IsNotEmpty()
  status: StatusType;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  schema?: string;

  @IsString()
  @IsOptional()
  featureImageUrl?: string;

  @IsDateString(
    {},
    { message: 'publishOn must be a valid ISO 8601 date string' },
  )
  @IsNotEmpty()
  publishOn: Date;

  @IsArray()
  @IsString({ each: true, message: 'Each tag must be a string' })
  @IsOptional()
  tags?: string[];

  @IsArray()
  @IsString({ each: true, message: 'Each metaOption must be a string' })
  @IsOptional()
  metaOptions?: string[];
}
