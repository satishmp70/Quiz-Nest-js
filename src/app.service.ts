import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllQuiz(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'testing working';
  }
  
}
