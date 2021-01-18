import { Body, Controller, Delete, Get, Param, Patch, Post, Query,UseInterceptors,Res} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entities';
import {MovieService} from './movie.service';
import { SentryInterceptor } from '../../config/sentry.interceptor';
import { ApiOkResponse, ApiOperation, ApiNotFoundResponse, ApiResponse } from '@nestjs/swagger';

@UseInterceptors(SentryInterceptor)
@Controller('movie')
export class MovieController {
    constructor(
        private readonly movieService: MovieService
    ){}
    @Get()
    getAll(@Res() res):Movie[]{ 
        if(this.movieService.getAll().length===0) return res.status(300).send({code:300,isSuccess:false,message:"200"});
        return this.movieService.getAll();

    };

    @Get(`search`)
    // API 설명
    @ApiOperation({ summary: '영화 찾기 API' })
    // API response
    @ApiResponse({ status: 201, description:`success!` })
    // API 성공 response
    @ApiOkResponse({ description: 'movie was successfully located' })
    // API Not found response
    @ApiNotFoundResponse({ description: 'A movie of the requested ID could not be found' })
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie with a title : ${+searchingYear} `;
    }

    @Get('/:id')
    getOne(@Param(`id`)id:number):Movie{
        console.log(typeof id)
        return this.movieService.getOne(id);
    }

    @Post()
    create(@Body() movieData:CreateMovieDto){
        
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:number){
        return this.movieService.deleteOne(movieId);
    }

    @Patch('/:id')
    path(@Param('id') movieId:number,@Body() updateData:UpdateMovieDto){
        return this.movieService.update(movieId,updateData);
    }
};
