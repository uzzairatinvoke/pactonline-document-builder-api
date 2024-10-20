import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDocumentTemplateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  content: any;
}
