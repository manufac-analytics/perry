import type { TableQueryParams } from "./utils";
import type { LineChartDatum } from "../components/LineChart";
import type { ExchangeData } from "../components/Widget";
import type { TableData } from "../components/WidgetTable";
import type { MapDatum } from "../components/WorldChoropleth/utils";
import type { UseQueryResult } from "@tanstack/react-query";
export declare const useGetStockData: (data: ExchangeData) => UseQueryResult<LineChartDatum[]>;
export declare const useGetTableData: (currencyOption: string, tabOption: string) => UseQueryResult<TableData[], Error>;
export declare const useGetMapData: (data: TableQueryParams) => UseQueryResult<MapDatum[]>;
//# sourceMappingURL=api.d.ts.map