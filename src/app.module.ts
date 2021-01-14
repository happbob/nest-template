import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MovieModule],
  controllers: [AppController],
  providers: [
  ],
})
export class AppModule {}
