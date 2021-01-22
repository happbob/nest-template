import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Movie } from './entities/movie.entity';
import { Genres } from './entities/genres.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'limms2000',
      password: 'sky01015**',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),MovieModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
