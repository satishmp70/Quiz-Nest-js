import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { QuestionService } from './question.service';
import { QuizController }  from './quiz.controller'
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Module({
  imports:[TypeOrmModule.forFeature([Quiz,Question])],
  controllers:[QuizController,QuestionController],
  providers: [QuizService,QuestionService]
})
export class QuizModule {}
