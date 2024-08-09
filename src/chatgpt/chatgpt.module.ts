import { Module } from '@nestjs/common';
import { ChatGPTService   } from './chatgpt.service';
import { ChatGPTController } from './chatgpt.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule,],
  providers: [ChatGPTService ],
  controllers: [ChatGPTController],
})
export class ChatgptModule {}
