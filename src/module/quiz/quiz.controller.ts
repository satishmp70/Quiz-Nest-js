import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './create-quiz.dto';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

  constructor(private quizService: QuizService) {}

  @Get('/:id')
  async getQuizById(@Param('id',ParseIntPipe) id:number):Promise<Quiz>{
    return await this.quizService.getQuizById(id);
  }


  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData:CreateQuizDto){
    return await this.quizService.createNewQuiz(quizData);
  }
}
