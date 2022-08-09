import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "./create-question.dto";
import { Question } from "./question.entity";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuestionService{
  constructor(
    @InjectRepository(Question)
    private  questionRepository:Repository<Question>,
  ) {}


  async createQuestion(question:CreateQuestionDto,quiz:Quiz):Promise<Question> {

    const newQuestions = await this.questionRepository.save({
      question:question.question
    });

    quiz.questions = [...quiz.questions,newQuestions]

    await quiz.save()

    return newQuestions;
  }

}