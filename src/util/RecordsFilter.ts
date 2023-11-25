export class RecordsFilter {
  static filter(
    records: vehicleDetailAndState[],
    timestamp: string,
  ): vehicleDetailAndState | String {
    let result: vehicleDetailAndState | String = 'No record found';
    const date = new Date(timestamp);
    for (let i = 0; i < records.length; i++) {
      let dateVal = new Date(records[i].timestamp);
      let diffMs = date.getTime() - dateVal.getTime();
      if (diffMs >= 0) {
        result = records[i];
      }
    }
    return result;
  }
}
