import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entitiy';
import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAll(): Movie[];
    search(searchingYear: string): string;
    getOne(id: number): Movie;
    create(movieData: CreateMovieDto): void;
    remove(movieId: number): void;
    path(movieId: number, updateData: UpdateMovieDto): void;
}
