import { Movie } from './entities/movie.entities';
export declare class MovieService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): void;
    create(movieData: any): void;
    update(id: number, updateData: any): void;
}
