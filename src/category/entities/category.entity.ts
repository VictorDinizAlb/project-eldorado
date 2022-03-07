import { Device } from 'src/device/entities/device.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({type: 'varchar' ,length: 128, nullable: false})
  name: string;

  @OneToMany(() => Device, device => device.category)
  devices: Device[];
}