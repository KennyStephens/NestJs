import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/asdf')
  getRootRoute() {
    return 'hi there idiot!';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there!';
  }
}
