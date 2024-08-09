import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChatGPTService {
  private readonly openai: OpenAI;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    this.openai = new OpenAI({
      apiKey: apiKey,
    });
  }

  async createChatCompletion(prompt: string): Promise<any> {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const response = await this.openai.chat.completions.create({
          model: "gpt-4o-mini", 
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 150,
        });
       
        return response.choices[0]?.message?.content || 'No response from OpenAI';
      } catch (error) {
       
        if (error) {
          if (error.status === 402) {
            throw new HttpException(
              {
                status: HttpStatus.PAYMENT_REQUIRED,
                error: 'Billing error: Please check your payment method or subscription status.',
              },
              HttpStatus.PAYMENT_REQUIRED,
            );
          }
          throw new HttpException(
            {
              status: error.status,
              error: error.message,
            },
            error.status,
          );
        }
    
      }
    }
  }

 

  
}
