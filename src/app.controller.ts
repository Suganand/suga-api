import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/vehicle/:id')
  getVehicleDetailAndState(
    @Param('id') vehicleId: number,
    @Query('timestamp') timestamp: string,
  ): vehicleDetailAndState | String {
    return this.appService.getVehicleDetailAndState(vehicleId, timestamp);
  }
}
