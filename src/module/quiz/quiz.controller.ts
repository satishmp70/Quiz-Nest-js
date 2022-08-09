import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
   return this.quizService.getAllQuiz();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData:CreateQuizDto){
    return await this.quizService.createNewQuiz(quizData);
  }
}
