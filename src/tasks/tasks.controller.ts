import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAllTask() {
    
    return this.tasksService.findAllTask();
  }

  @Get(':id')
  async findOneTask(@Param('id') id: string) {
    return this.tasksService.findOneTask(+id);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(+id, updateTaskDto);
  }

  @Delete(':id')
  async removeTask(@Param('id') id: string) {
    await this.tasksService.removeTask(+id);
    return {
        message: 'Task deleted successfully',
      };
  }
}
