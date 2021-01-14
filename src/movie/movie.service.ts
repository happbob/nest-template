import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import {Movie} from './entities/movie.entitiy'
@Injectable()
export class MovieService {
    //database 로직 짜는 곳
    
    private movies:Movie[]=[];

    getAll():Movie[]{
        return this.movies;
    }

    getOne(id:number):Movie{
        const movie = this.movies.find(movie => movie.id === +id);
        if(!movie){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
              }, HttpStatus.FORBIDDEN);
        }else return movie;
    }

    deleteOne(id:number){
        this.getOne(id);    
        this.movies = this.movies.filter(movie => movie.id !== +id);
    }

    create(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData,
        })
    }

    update(id:number, updateData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie,...updateData});
    }
}
