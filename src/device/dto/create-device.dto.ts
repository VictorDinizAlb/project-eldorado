import { IsNotEmpty, IsPositive, IsString, Max, MaxLength } from 'class-validator';

export class CreateDeviceDto {
    @IsNotEmpty()
    categoryId: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(16)
    color: string;

    @IsNotEmpty()
    @IsPositive()
    partNumber: number;
}
