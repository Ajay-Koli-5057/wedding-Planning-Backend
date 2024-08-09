import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './common/config/typeorm.config';
import { MembersModule } from './members/members.module';
import { TasksModule } from './tasks/tasks.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
   
    MembersModule,
    TasksModule,
    ChatgptModule,
  ],
})
export class AppModule {}
