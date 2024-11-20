export interface OHLCV {
  close: number;
  conversionSymbol: string;
  conversionType: string;
  high: number;
  low: number;
  open: number;
  time: number;
  volumefrom: number;
  volumeto: number;
}

export interface OHLCVData {
  Aggregated: boolean;
  TimeFrom: number;
  TimeTo: number;
  Data: OHLCV[];
}

export interface OHLCVGet {
  Data: OHLCVData;
  HasWarning: boolean;
  Message: string;
  Response: string;
}
