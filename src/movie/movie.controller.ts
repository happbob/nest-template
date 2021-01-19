import { Body, Controller, Delete, Get, Param, Patch, Post, Query,UseInterceptors,Res} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entities';
import {MovieService} from './movie.service';
import { SentryInterceptor } from '../../config/sentry.interceptor';
import { ApiOkResponse,ApiOAuth2, ApiOperation,ApiExtraModels, ApiNotFoundResponse,ApiExtension, ApiResponse, ApiCreatedResponse, ApiTags, ApiBasicAuth, ApiSecurity, ApiBody, ApiProperty, ApiHideProperty } from '@nestjs/swagger';

@UseInterceptors(SentryInterceptor)
// api 카테고리
@ApiTags('영화')
@Controller('movie')
export class MovieController {
    constructor(
        private readonly movieService: MovieService
    ){}
    @Get()
    // @ApiOAuth2(['www.naver.com'],'reaaly')
    // @ApiBasicAuth()
    // @ApiSecurity('name')
    getAll(@Res() res):Movie[]{ 
        if(this.movieService.getAll().length===0) return res.status(400).send({code:400,isSuccess:false,message:"no.."});
        return this.movieService.getAll();

    };

    @Get(`search`)
    // API 설명
    @ApiOperation({ summary: '영화 찾기 API' ,description:'comment'})
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
    @ApiCreatedResponse({
        description: 'The record has been successfully created.'
      })
    @ApiBody({type:CreateMovieDto,required:true})
    @ApiResponse({ status: 201, description:`success!` })
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
