import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMethodOptionsDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: any;
}
