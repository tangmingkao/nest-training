import { Injectable, Logger } from '@nestjs/common';
import { GetformService } from './getform.service'
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(
    private readonly getformService: GetformService,
  ) { }
  
  getHello() {
    this.logger.log('=======');
    return 'Hello World!';
  }
  async main() {
    this.logger.log('=======');
    await this.getformService.getform();
    return;
  }

}
