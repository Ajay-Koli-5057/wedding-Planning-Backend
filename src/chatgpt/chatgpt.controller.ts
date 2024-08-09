
import { ChatGPTService } from './chatgpt.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('chatgpt')
export class ChatGPTController  {
  constructor(
    
    private readonly chatGPTService: ChatGPTService,
  ) {}

  @Post('chat')
  async getChatCompletion(@Body('prompt') prompt: string) {
    return this.chatGPTService.createChatCompletion(prompt);
  }
}
