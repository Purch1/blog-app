import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostMethodOptionsDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
