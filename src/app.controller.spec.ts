import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, AppRepository],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
    appController = moduleRef.get<AppController>(AppController);
  });

  describe('getVehicleDetailAndState', () => {
    it('should return object of vehicleDetailAndState', async () => {
      const result: vehicleDetailAndState = {
        id: 3,
        make: 'VW',
        model: 'GOLF',
        state: 'sold',
        timestamp: '2022-09-12T12:41:41.000Z',
      };
      jest
        .spyOn(appService, 'getVehicleDetailAndState')
        .mockImplementation(() => result);

      expect(
        await appController.getVehicleDetailAndState(
          1,
          '2022-09-12T12:41:41.000Z',
        ),
      ).toBe(result);

      expect(appService.getVehicleDetailAndState).toHaveBeenCalledWith(
        1,
        '2022-09-12T12:41:41.000Z',
      );

      expect(appService.getVehicleDetailAndState).toHaveBeenCalledTimes(1);
    });
  });
});
