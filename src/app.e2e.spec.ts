import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

describe('Vehicle Detail and State app', () => {
  let app: INestApplication;
  const result: vehicleDetailAndState = {
    id: 3,
    make: 'VW',
    model: 'GOLF',
    state: 'selling',
    timestamp: '2022-09-11T23:21:38.000Z',
  };
  let appService = {
    getVehicleDetailAndState: (vehicleId: number, timeStamp: string) => result,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET vehicle/3`, () => {
    return request(app.getHttpServer())
      .get('/vehicle/3?timestamp=2022-09-12T10:00:00.000Z')
      .expect(200)
      .expect(
        appService.getVehicleDetailAndState(3, '2022-09-12T10:00:00.000Z'),
      );
  });

  afterAll(async () => {
    await app.close();
  });
});
