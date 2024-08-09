import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Member } from '../members/member.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  dueDate: Date;

  @Column()
  category: string;

  @Column({default: 'Pending' })
  status: string;

  @ManyToOne(() => Member, member => member.tasks, { eager: true })
  assignedMember: Member;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
