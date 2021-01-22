import { Repository } from 'typeorm';
import { Movie } from './../entities/movie.entity';
export declare class MovieService {
    private readonly moviesRepository;
    constructor(moviesRepository: Repository<Movie>);
    getAll(): Promise<Movie[]>;
}
