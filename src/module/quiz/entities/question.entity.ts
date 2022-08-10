import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { Option } from './option.entity';
import { Quiz } from './quiz.entity';

@Entity('questions')
export class Question extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  question: string;

  @ManyToOne(()=>Quiz,(quiz)=>quiz.questions)
  quiz:Quiz


  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
  
}
