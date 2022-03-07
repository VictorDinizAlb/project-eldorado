import { Injectable, Inject, NotFoundException  } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) { }

  public async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  public async find(id?: number): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: ["devices"]
    });
  }
  
  public async create(data: CreateCategoryDto): Promise<Category[]> {
    const { name } = data;
    const category = this.categoryRepository.create( {name});
    await this.categoryRepository.save(category);

    return this.find();  
  }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `Update feature is disabled`;
  // }

  public async remove(id: number): Promise<Category[]> {
    const category = await this.categoryRepository.findOne(id)

    if (!category) {

      throw new NotFoundException(`Parece que você está tentando deletar uma categoria inexistente!`);
    }

    await this.categoryRepository.remove(category);

    return this.find(); 
  }
}
