import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  powerService: PowerService;

  constructor(powerService: PowerService) {
    this.powerService = powerService;
  }

  getData() {
    console.log('Drawing 20 watts of power from Power Service.');
    this.powerService.supplyPower(20);
    return 'Data!';
  }
}
