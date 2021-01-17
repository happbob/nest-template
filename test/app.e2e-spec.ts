import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ValidationPipe } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist:true,
      // 이상한거 방지
      forbidNonWhitelisted:true,
      // controller에서 우리가 원하는 실제 데이터 타입으로 변환
      transform:true
    }));
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome!!');
  });
  describe('/movie',()=>{
    it("GET",()=>{
      return request(app.getHttpServer())
      .get("/movie")
      .expect(200)
      .expect([]);
    });

    it("POST 201",()=>{
      return request(app.getHttpServer())
      .post('/movie')
      .send({
        title:"Test",
        year:2000,
        genres:["test"]
      })
      .expect(201);
    });

    it("POST 400",()=>{
      return request(app.getHttpServer())
      .post('/movie')
      .send({
        title:"Test",
        year:2000,
        genres:["test"],
        other:'things'
      })
      .expect(400);
    });

    it("DELETE",()=>{
      return request(app.getHttpServer())
      .delete("/movie").expect(404);
    });
  });

  describe('/movie/:id',()=>{
    it('GET 200', ()=>{
      return request(app.getHttpServer())
      .get("/movie/1")
      .expect(200);
    });
    it('GET 403',()=>{
      return request(app.getHttpServer())
      .get("/movie/999")
      .expect(403);
    });
    it('PATCH 200', ()=>{
      return request(app.getHttpServer())
      .patch('/movie/1')
      .send({
        title:"Updated Test"
      })
      .expect(200);
    });
    it('DELETE ',()=>{
      return request(app.getHttpServer())
      .delete('/movie/1')
      .expect(200);
    })
    
  });
});
