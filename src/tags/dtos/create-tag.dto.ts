import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    example: 'This is a tag name',
    description: 'This is the name of a tag',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(256)
  name: string;

  @ApiProperty({
    example: 'my-blog-post',
    description: "Possible values, 'post', 'page', 'story', 'series'",
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9-]+(?:-[a-z0-9]+)$/, {
    message:
      'ThA Slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional()
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  @MaxLength(1024)
  featuredImageUrl?: string;
}
