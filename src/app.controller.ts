import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger('Main');
  constructor(private readonly appService: AppService) {}

  @MessagePattern('say-hi')
  getHello(): string {
    this.logger.log('Returning hello');
    return this.appService.getHello();
  }
}
