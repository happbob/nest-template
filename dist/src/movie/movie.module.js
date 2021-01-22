"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("./../entities/movie.entity");
const movie_controller_1 = require("./movie.controller");
const movie_service_1 = require("./movie.service");
let MovieModule = class MovieModule {
};
MovieModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([movie_entity_1.Movie])],
        controllers: [movie_controller_1.MovieController],
        providers: [movie_service_1.MovieService]
    })
], MovieModule);
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map