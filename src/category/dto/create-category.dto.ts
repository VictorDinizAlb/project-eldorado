import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    name: string;
}
