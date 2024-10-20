import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentTemplateDto } from './create-document-template.dto';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDocumentTemplateDto extends PartialType(CreateDocumentTemplateDto) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  content?: any;
}
