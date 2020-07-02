import { Controller, Get, Query, Logger } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getData() {
    return this.appService.getData();
  }
  @Get('echo')
  echo(@Query() params) {
    console.log(new Date(), 'request query string:', params);
    return params;
  }
}
