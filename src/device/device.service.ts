import { Injectable, Inject, NotFoundException  } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Repository, getRepository } from 'typeorm';
import { Device } from './entities/device.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class DeviceService {
  constructor(
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<Device>,
  ) { }

  public async findAll(): Promise<Device[]> {
      return await this.deviceRepository.find({
        relations: ["category"]
    });
  }

  public async findOne(id: number): Promise<Device> {
    return await this.deviceRepository.findOne(id);
  }
    
  public async findByCategory(categoryId: number): Promise<Device[]> {
      const devices = await this.deviceRepository.find({
          where: {
              categoryId
        }, 
        relations: ["category"]
      });
      return devices;
  }
  public async create(data: CreateDeviceDto): Promise<Device[] | boolean> {
    const { categoryId, color, partNumber } = data;

    const categoryRepo = getRepository(Category);
    const categoria = await categoryRepo.findOne(categoryId);

    if (!categoria) {

      throw new NotFoundException(`Categoria inexistente`);
    }

    const device = this.deviceRepository.create( { categoryId, color, partNumber});
    await this.deviceRepository.save(device)

    return this.findAll();  
  }

  // update(id: number, updateDeviceDto: UpdateDeviceDto) {
  //   return `Update feature is disabled`;
  // }

  public async remove(id: number): Promise<Device[]> {
    const device = await this.deviceRepository.findOne(id);

    if (!device) {

      throw new NotFoundException(`Parece que você está tentando deletar um dispositivo inexistente!`);
    };

    await this.deviceRepository.remove(device);

    return this.findAll(); 
  }
}
