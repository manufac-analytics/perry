export interface MapDatum {
    metric: string;
    country: string;
    exchange: string;
    YTD: number;
    "1Y": number;
    "3Y": number;
    "5Y": number;
}
export type MapDatumPeriod = keyof Omit<MapDatum, "metric" | "country" | "exchange">;
export declare const TimePeriods: MapDatumPeriod[];
//# sourceMappingURL=utils.d.ts.map