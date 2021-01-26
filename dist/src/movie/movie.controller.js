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
const movie_service_1 = require("./movie.service");
const sentry_interceptor_1 = require("../../config/sentry.interceptor");
const swagger_1 = require("@nestjs/swagger");
const response_util_1 = require("../../config/response.util");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getAll() {
        try {
            const result = await this.movieService.getAll();
            console.log(result);
            let a = new response_util_1.ResponseMessage().success("영화 리스트 조회 성공").body(result).build();
            console.log(a);
            return a;
        }
        catch (err) {
            common_1.Logger.error(err);
        }
    }
    search(searchingYear) {
        return `We are searching for a movie with a title : ${+searchingYear} `;
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: require("../../config/response.util").Response }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
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
MovieController = __decorate([
    common_1.UseInterceptors(sentry_interceptor_1.SentryInterceptor),
    swagger_1.ApiTags('영화'),
    common_1.Controller('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
;
//# sourceMappingURL=movie.controller.js.map