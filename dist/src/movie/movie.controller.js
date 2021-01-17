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
const common_1 = require("@nestjs/common");
const create_movie_dto_1 = require("./dto/create-movie.dto");
const update_movie_dto_1 = require("./dto/update-movie.dto");
const movie_entitiy_1 = require("./entities/movie.entitiy");
const movie_service_1 = require("./movie.service");
const sentry_interceptor_1 = require("../../config/sentry.interceptor");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    getAll(res) {
        if (this.movieService.getAll().length === 0)
            return res.status(300).send({ code: 300, isSuccess: false, message: "200" });
        return this.movieService.getAll();
    }
    ;
    search(searchingYear) {
        return `We are searching for a movie with a title : `;
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
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], MovieController.prototype, "getAll", null);
__decorate([
    common_1.Get(`search`),
    __param(0, common_1.Query("year")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "search", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", movie_entitiy_1.Movie)
], MovieController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.CreateMovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "create", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "remove", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_movie_dto_1.UpdateMovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "path", null);
MovieController = __decorate([
    common_1.UseInterceptors(sentry_interceptor_1.SentryInterceptor),
    common_1.Controller('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
;
//# sourceMappingURL=movie.controller.js.map