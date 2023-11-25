import { Injectable } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AppRepository {
  pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  });

  getVehicleDetailAndState(id: number): QueryResult<vehicleDetailAndState> {
    let resultRows: vehicleDetailAndState[];
    try {
      const query = `
        SELECT  v.id, v.make, v.model, sl.state, sl.timestamp
        FROM  vehicles v, statelogs sl
        WHERE v.id = sl.vehicleId and v.id = $1
        ORDER BY sl.timestamp
      `;
      return this.pool.query<vehicleDetailAndState>(query, [id]);
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }
}
