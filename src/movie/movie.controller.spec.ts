import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { Movie } from './../entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('MovieController', () => {
  let controller: MovieController;
  let service:MovieService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[TypeOrmModule.forFeature([Movie])],
      controllers: [MovieController],
      providers: [MovieService]
    }).compile();

    service = module.get<MovieService>(MovieService);
    controller = module.get<MovieController>(MovieController);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
});
