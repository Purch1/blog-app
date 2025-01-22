import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsDateString,
  Matches,
  IsJSON,
  IsUrl,
  IsISO8601,
  ValidateNested,
} from 'class-validator';
import { PostType, StatusType } from '../enums/postType.enums';
import { CreatePostMethodOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'This is a title',
    description: 'This is the title for our blog post',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  title: string;

  @ApiProperty({
    enum: PostType,
    description: "Possible values, 'post', 'page', 'story', 'series'",
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    example: 'my-blog-post',
    description: "Possible values, 'post', 'page', 'story', 'series'",
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9-]+(?:-[a-z0-9]+)$/, {
    message:
      'ThA Slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @ApiProperty({
    example: 'postStatus',
    description: "Possible values, 'draft', 'scheduled', 'review', 'published'",
  })
  @IsEnum(StatusType)
  @IsNotEmpty()
  status: StatusType;

  @ApiPropertyOptional({
    example: 'This is the content of post',
    description: 'post content ',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will be thrown',
    example:
      '{\"total\":27.5,\"reference\":\"25a8a80e9c1099a0e92c2ebe412bb7ad\"}',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/images/nodejs.jpg',
    description: '2025-01-15T10:00:00Z',
  })
  @IsUrl()
  @IsOptional()
  featureImageUrl?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/images/nodejs.jpg',
    description: 'The date on which the blog post is published',
  })
  @IsDateString(
    {},
    { message: 'publishOn must be a valid ISO 8601 date string' },
  )
  @IsOptional()
  @IsISO8601()
  publishOn: Date;

  @ApiPropertyOptional({
    description: 'Arrays of tags passed as a string value',
    example: '["Node.js", "JavaScript", "Backend"]',
  })
  @IsArray()
  @IsString({ each: true })
  @MinLength(4, { each: true })
  @IsOptional()
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The key can any string identifier for your meta options',
          example: 'SidebarEnabler',
        },
        value: {
          type: 'any',
          description: 'Any value you want to change to true',
          example: true,
        },
      },
    },
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMethodOptionsDto)
  metaOptions?: CreatePostMethodOptionsDto[];
}
