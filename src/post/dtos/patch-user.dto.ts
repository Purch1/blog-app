import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './create-user.dto';

export class PatchUsersDto extends PartialType(CreateUsersDto) {}
