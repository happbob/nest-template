"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const update_movie_dto_1 = require("./dto/update-movie.dto");
const movie_entities_1 = require("./entities/movie.entities");
const movie_service_1 = require("./movie.service");
const sentry_interceptor_1 = require("../../config/sentry.interceptor");
const swagger_1 = require("@nestjs/swagger");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    getAll(res) {
        if (this.movieService.getAll().length === 0)
            return res.status(400).send({ code: 400, isSuccess: false, message: "no.." });
        return this.movieService.getAll();
    }
    ;
    search(searchingYear) {
        return `We are searching for a movie with a title : ${+searchingYear} `;
    }
    getOne(id) {
        console.log(typeof id);
        return this.movieService.getOne(id);
    }
    create(movieData) {
        return this.movieService.create(movieData);
    }
    remove(movieId) {
        return this.movieService.deleteOne(movieId);
    }
    path(movieId, updateData) {
        return this.movieService.update(movieId, updateData);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/movie.entities").Movie] }),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], MovieController.prototype, "getAll", null);
__decorate([
    common_1.Get(`search`),
    swagger_1.ApiOperation({ summary: '영화 찾기 API', description: 'comment' }),
    swagger_1.ApiResponse({ status: 201, description: `success!` }),
    swagger_1.ApiOkResponse({ description: 'movie was successfully located' }),
    swagger_1.ApiNotFoundResponse({ description: 'A movie of the requested ID could not be found' }),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, common_1.Query("year")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "search", null);
__decorate([
    common_1.Get('/:id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/movie.entities").Movie }),
    __param(0, common_1.Param(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", movie_entities_1.Movie)
], MovieController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({
        description: 'The record has been successfully created.'
    }),
    swagger_1.ApiBody({ type: create_movie_dto_1.CreateMovieDto, required: true }),
    swagger_1.ApiResponse({ status: 201, description: `success!` }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.CreateMovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "create", null);
__decorate([
    common_1.Delete('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "remove", null);
__decorate([
    common_1.Patch('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_movie_dto_1.UpdateMovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "path", null);
MovieController = __decorate([
    common_1.UseInterceptors(sentry_interceptor_1.SentryInterceptor),
    swagger_1.ApiTags('영화'),
    common_1.Controller('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
;
//# sourceMappingURL=movie.controller.js.map