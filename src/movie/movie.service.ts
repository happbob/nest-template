import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Movie} from './../entities/movie.entity'

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private readonly moviesRepository: Repository<Movie>
    ){};
    //database 로직 짜는 곳

    async getAll():Promise<Movie[]>{
        try{
            const result = await this.moviesRepository.find();
            return result;
        }catch(err){
            return err;
        }
    }


    // getOne(id:number):Movie{
    //     console.log(typeof id);
    //     const movie = this.movies.find(movie => movie.id === id);
    //     if(!movie){
    //         throw new HttpException({
    //             status: HttpStatus.FORBIDDEN,
    //             error: 'This is a custom message',
    //           }, HttpStatus.FORBIDDEN);
    //     }else return movie;
    // }

    // deleteOne(id:number){
    //     this.getOne(id);    
    //     this.movies = this.movies.filter(movie => movie.id !== +id);
    // }

    // create(movieData){
    //     this.movies.push({
    //         id:this.movies.length+1,
    //         ...movieData,
    //     })
    // }

    // update(id:number, updateData){
    //     const movie = this.getOne(id);
    //     this.deleteOne(id);
    //     this.movies.push({...movie,...updateData});
    // }
}
