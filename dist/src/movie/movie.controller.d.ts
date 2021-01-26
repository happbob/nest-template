import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAll(): Promise<import("../../config/response.util").Response>;
    search(searchingYear: string): string;
}
