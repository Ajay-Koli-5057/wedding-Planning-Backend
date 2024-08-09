import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { MembersModule } from '../members/members.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    MembersModule,  // Import MembersModule here
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
