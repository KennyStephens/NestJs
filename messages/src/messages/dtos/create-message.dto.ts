import { IsString } from 'class-validator';

// Data Transfer Object
// Carry data between two places
export class CreateMessageDto {
  @IsString()
  content: string;
}
