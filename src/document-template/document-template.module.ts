import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentTemplate } from './entities/document-template.entity';
import { DocumentTemplateController } from './document-template.controller';
import { DocumentTemplateService } from './document-template.service';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentTemplate])],
  controllers: [DocumentTemplateController],
  providers: [DocumentTemplateService],
})
export class DocumentTemplateModule {}
