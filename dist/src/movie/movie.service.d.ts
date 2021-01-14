import { Movie } from './entities/movie.entitiy';
export declare class MovieService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): void;
    create(movieData: any): void;
    update(id: number, updateData: any): void;
}
