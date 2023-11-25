import { RecordsFilter } from './RecordsFilter';
import { sampleRecords } from '../consts';

describe('RecordsFilter', () => {
  describe('RecordsFilter filtering between two timestamps', () => {
    it('should return a previous record inbetween records', async () => {
      const inputTimeStamp: string = '2022-09-12T10:00:00.000Z';
      const result: vehicleDetailAndState = {
        id: 3,
        make: 'VW',
        model: 'GOLF',
        state: 'selling',
        timestamp: '2022-09-11T23:21:38.000Z',
      };

      expect(
        await RecordsFilter.filter(sampleRecords, inputTimeStamp),
      ).toStrictEqual(result);
    });
  });

  describe('RecordsFilter filtering the latest', () => {
    it('should return a latest record', async () => {
      const inputTimeStamp: string = '2022-09-13T00:00:00.000Z';
      const result: vehicleDetailAndState = {
        id: 3,
        make: 'VW',
        model: 'GOLF',
        state: 'sold',
        timestamp: '2022-09-12T12:41:41.000Z',
      };

      expect(
        await RecordsFilter.filter(sampleRecords, inputTimeStamp),
      ).toStrictEqual(result);
    });
  });

  describe('RecordsFilter filtering the exact time match', () => {
    it('should return a record with exact time match', async () => {
      const inputTimeStamp: string = '2022-09-11T09:11:45.000Z';
      const result: vehicleDetailAndState = {
        id: 3,
        make: 'VW',
        model: 'GOLF',
        state: 'quoted',
        timestamp: '2022-09-11T09:11:45.000Z',
      };

      expect(
        await RecordsFilter.filter(sampleRecords, inputTimeStamp),
      ).toStrictEqual(result);
    });
  });

  describe('RecordsFilter filtering the exact time match', () => {
    it('should return a record with exact time match', async () => {
      const inputTimeStamp: string = '2022-09-11T09:11:45.000Z';
      const result: vehicleDetailAndState = {
        id: 3,
        make: 'VW',
        model: 'GOLF',
        state: 'quoted',
        timestamp: '2022-09-11T09:11:45.000Z',
      };

      expect(
        await RecordsFilter.filter(sampleRecords, inputTimeStamp),
      ).toStrictEqual(result);
    });
  });

  describe('RecordsFilter filters to no records', () => {
    it('should return no record', async () => {
      const inputTimeStamp: string = '2020-01-01T00:00:00.000Z';
      const result: string = 'No record found';

      expect(
        await RecordsFilter.filter(sampleRecords, inputTimeStamp),
      ).toStrictEqual(result);
    });
  });
});
