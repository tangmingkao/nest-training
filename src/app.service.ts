import { Injectable, Logger } from '@nestjs/common';
import { GetformService } from './getform.service'
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(
    private readonly getformService: GetformService,
  ) { }
  async main() {
    this.logger.log('=======');
    await this.getformService.getform();
    return;
  }
  // getHello() {
  //   this.logger.log('=======');
  //   this.main()
  //   return 'Hello World!';
  // }
}
