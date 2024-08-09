import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { MembersService } from '../members/members.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    private membersService: MembersService,
  ) {}

  findAllTask(): Promise<Task[]> {
   
      return this.tasksRepository.find({ relations: ['assignedMember'] });
   
  }

  async findOneTask(id: number): Promise<Task> {

  const task = await this.tasksRepository.findOne({
      where: { id },
      relations: ['assignedMember'],
    });
  if (!task) {
    throw new NotFoundException(`Task with ID ${id} not found`);
  }
  return task;
  
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
   
      
      const { assignedMemberId, ...rest } = createTaskDto;
      const assignedMember = await this.membersService.findOneMember(assignedMemberId);
  
      const task = this.tasksRepository.create({
        ...rest,
        assignedMember,
      });
      return this.tasksRepository.save(task);
    
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    
      const { assignedMemberId, ...rest } = updateTaskDto;
      const task = await this.tasksRepository.preload({
        id: +id,
        ...rest,
      });
  
      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
  
      if (assignedMemberId) {
        task.assignedMember = await this.membersService.findOneMember(assignedMemberId);
      }
  
      return this.tasksRepository.save(task);
      
   
  }

  async removeTask(id: number): Promise<void> {
    
      const result = await this.tasksRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      
   
  }
}
