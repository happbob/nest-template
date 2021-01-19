import { ApiProperty } from "@nestjs/swagger";

export class Movie{
    id:number;
    title:string;
    year:number;
    genres:string[];
}