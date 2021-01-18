import { ApiProperty } from '@nestjs/swagger';
import {IsString,IsNumber, IsOptional} from 'class-validator';
export class CreateMovieDto{
    @IsString()
    @ApiProperty()
    readonly title:string;
    @IsNumber()
    @ApiProperty()
    readonly year:number;

    @IsOptional()
    @IsString({each:true})
    @ApiProperty()
    readonly genres:string[];
}