import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateOptionDto } from "../dto/create-option.dto";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";

@Controller('question/option')

export class OptionController {

  constructor(private optionService: OptionService,private questionService: QuestionService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption:CreateOptionDto){
    const question = await this.questionService.findQuestionById(createOption.questionId);
    const option = await this.optionService.createOption(createOption,question)
    return {question,createOption,option}
  }
}