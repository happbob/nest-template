"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
const Error = __importStar(require("./../../config/Error.json"));
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getAll(res) {
        const result = await this.movieService.getAll();
        console.log(result);
        return res.status(200).send(Object.assign(Object.assign({}, Error["success"]), { result: result }));
    }
    search(searchingYear) {
        return `We are searching for a movie with a title : ${+searchingYear} `;
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
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