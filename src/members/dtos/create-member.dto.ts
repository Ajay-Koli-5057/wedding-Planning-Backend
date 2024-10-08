import { IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  name: string;

  @IsString()
  role: string;
}
