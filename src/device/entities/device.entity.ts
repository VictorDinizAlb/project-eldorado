import { Category } from 'src/category/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Device {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({type: 'int', nullable: false})
  categoryId: number;

  @Column({type: 'varchar', length: 16, nullable: false})
  color: string;

  @Column({type: 'int', nullable: false})
  partNumber: number;

  @ManyToOne(() => Category, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({name: "categoryId"})
  category: Category;
}