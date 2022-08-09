import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './config/database.providers';
import { QuizModule } from './module/quiz/quiz.module';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot(databaseProviders),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
