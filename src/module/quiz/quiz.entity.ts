import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizes')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;
}
