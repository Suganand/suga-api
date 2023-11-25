import { Injectable } from '@nestjs/common';
import { RecordsFilter } from './util/RecordsFilter';
import * as dotenv from 'dotenv';
import { AppRepository } from './app.repository';
dotenv.config();

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  getVehicleDetailAndState(
    id: number,
    timestamp: string,
  ): vehicleDetailAndState | String {
    return this.appRepository
      .getVehicleDetailAndState(id)
      .then((queryResult) => {
        return RecordsFilter.filter(queryResult.rows, timestamp);
      })
      .catch((error) => {
        console.error('Error while retrieving rows from query results:', error);
      });
  }
}
