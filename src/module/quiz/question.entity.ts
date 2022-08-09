import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  question: string;

  @ManyToOne(()=>Quiz,(quiz)=>quiz.questions)
  quiz:Quiz
}
