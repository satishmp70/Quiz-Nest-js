import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './create-quiz.dto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {

  constructor(
    @InjectRepository(Quiz)
    private  quizRepository:Repository<Quiz>,
  ) {}

  @Get('/')
  getAllQuiz() {
    return [1, 2, 3,4,5,6,7,8,9,10];
  }

  async createNewQuiz(quiz:CreateQuizDto){
    return await this.quizRepository.save(quiz);
  }

}
