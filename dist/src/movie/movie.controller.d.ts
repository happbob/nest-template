import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAll(res: any): Promise<any>;
    search(searchingYear: string): string;
}
