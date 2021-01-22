import { MovieService } from './movie.service';
import { Movie } from './../entities/movie.entity';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAll(res: any): Promise<Movie[]>;
    search(searchingYear: string): string;
}
