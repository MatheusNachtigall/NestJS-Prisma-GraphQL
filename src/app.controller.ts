import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';


@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUrl(): string {
    return this.appService.getUrl();
  }

  @Get('/seed')
  reSeedDatabase() {
    return this.appService.reSeedDatabase();
  }

  @Get('examples')
  getExamples() {
    return this.appService.getExamples();
  }
}
