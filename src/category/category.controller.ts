import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  
  @Get()
  public async findWithDevices(): Promise<Category[]> {
    return await this.categoryService.find();
  }

  @Get('/list')
  public async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Post()
  public async create(@Body(ValidationPipe) createCategoryDto: CreateCategoryDto): Promise<Category[]> {
    return await this.categoryService.create(createCategoryDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryService.update(+id, updateCategoryDto);
  // }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<Category[]> {
    return await this.categoryService.remove(+id);
  }
}
