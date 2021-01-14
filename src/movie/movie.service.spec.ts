import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { iif } from 'rxjs';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  // afterAll(async()=>{
  //   service = 
  // });

  // 유닛 테스트, 많은 옵션들, 함수들이 있으니 필요할때마다 검색해서 사용
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
  describe("getAll",()=>{
    it("should return an array",()=>{
      const result = service.getAll();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne',()=>{
    it("should return a movie",()=>{
      service.create({
        title:"Test Movie",
        genres: ['test'],
        yaer:2000
      });
      const movie= service.getOne(1);
      expect(movie.id).toEqual(1);
    });

    it("should throw 404 error",()=>{
      try{
        service.getOne(999);
      }catch(e){
        console.log(e.message);
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999');
      }
    })
  });

  describe("deleteOne",()=>{
    it("deletes a movie",()=>{
      service.create({
        title:"Test Movie",
        genres: ['test'],
        yaer:2000
      });
      console.log(service.getAll());
      const allMovies = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;

      expect(afterDelete).toBeLessThan(allMovies);
    });
    it("should return 404",()=>{
      try{
        service.deleteOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe("creaet",()=>{
    it("should create a movie",()=>{
      const beforeCreate = service.getAll().length;
      service.create({
        title:"Test Movie",
        genres: ['test'],
        yaer:2000
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe("update",()=>{
    it("should be a movie",()=>{
      service.create({
        title:"Test Movie",
        genres: ['test'],
        yaer:2000
      });
      service.update(1,{title:'Updated Test'});
      const movie = service.getOne(1);
      expect(movie.title).toEqual("Updated Test");
    });

    it("should throw a NotFoundException",()=>{
      try{
        service.update(999,{title:"sdjf"});
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  })
});