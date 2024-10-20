import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentTemplateService } from './document-template.service';
import { CreateDocumentTemplateDto } from './dto/create-document-template.dto';
import { UpdateDocumentTemplateDto } from './dto/update-document-template.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

@ApiTags('Document Templates')
@Controller('document-templates')
export class DocumentTemplateController {
  constructor(private readonly documentTemplateService: DocumentTemplateService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new Document Template',
    description: 'Creates a new document template with the provided data.'
  })
  @ApiBody({ type: CreateDocumentTemplateDto })
  @ApiCreatedResponse({ description: 'The document template has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createDocumentTemplateDto: CreateDocumentTemplateDto) {
    return this.documentTemplateService.create(createDocumentTemplateDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Fetch all Document Templates',
    description: 'Retrieves a list of all document templates.'
  })
  @ApiOkResponse({ description: 'Return all document templates.' })
  findAll() {
    return this.documentTemplateService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Fetch a Document Template by ID',
    description: 'Retrieves a specific document template by its ID.'
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the document template', type: 'number' })
  @ApiOkResponse({ description: 'Return the document template.' })
  @ApiResponse({ status: 404, description: 'Document template not found.' })
  findOne(@Param('id') id: string) {
    return this.documentTemplateService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a Document Template',
    description: 'Updates an existing document template with the provided data.'
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the document template to update', type: 'number' })
  @ApiBody({ type: UpdateDocumentTemplateDto })
  @ApiOkResponse({ description: 'The document template has been successfully updated.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Document template not found.' })
  update(@Param('id') id: string, @Body() updateDocumentTemplateDto: UpdateDocumentTemplateDto) {
    return this.documentTemplateService.update(+id, updateDocumentTemplateDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a Document Template',
    description: 'Deletes a document template by its ID.'
  })
  @ApiParam({ name: 'id', required: true, description: 'ID of the document template to delete', type: 'number' })
  @ApiOkResponse({ description: 'The document template has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Document template not found.' })
  remove(@Param('id') id: string) {
    return this.documentTemplateService.remove(+id);
  }
}
