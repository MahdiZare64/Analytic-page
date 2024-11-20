export interface ExchangeVol {
  time: number;
  volume: number;
}

export interface ExchangeVolGet {
  ConversionType: string;
  Data: ExchangeVol[];
  FirstValueInArray: boolean;
  HasWarning: boolean;
  Message: string;
  TimeFrom: number;
  TimeTo: number;
  Type: number;
}
