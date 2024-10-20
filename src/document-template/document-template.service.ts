import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentTemplate } from './entities/document-template.entity';
import { CreateDocumentTemplateDto } from './dto/create-document-template.dto';
import { UpdateDocumentTemplateDto } from './dto/update-document-template.dto';

@Injectable()
export class DocumentTemplateService {
  constructor(
    @InjectRepository(DocumentTemplate)
    private documentTemplateRepository: Repository<DocumentTemplate>,
  ) {}

  create(createDocumentTemplateDto: CreateDocumentTemplateDto): Promise<DocumentTemplate> {
    const documentTemplate = this.documentTemplateRepository.create(createDocumentTemplateDto);
    return this.documentTemplateRepository.save(documentTemplate);
  }

  findAll(): Promise<DocumentTemplate[]> {
    return this.documentTemplateRepository.find();
  }

  findOne(id: number): Promise<DocumentTemplate> {
    return this.documentTemplateRepository.findOneBy({ id });
  }

  async update(id: number, updateDocumentTemplateDto: UpdateDocumentTemplateDto): Promise<DocumentTemplate> {
    await this.documentTemplateRepository.update(id, updateDocumentTemplateDto);
    return this.documentTemplateRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.documentTemplateRepository.delete(id);
  }
}
