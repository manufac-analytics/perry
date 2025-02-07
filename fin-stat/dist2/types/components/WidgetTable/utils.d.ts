import type { TableData } from ".";
interface TransformDataParams {
    data: TableData[];
    rowKey: string;
    columnKey: string;
    pivotHeading: string;
}
export interface ColumnsType {
    column: string;
    format?: string;
}
export declare const EquitiesTableColumns: ColumnsType[];
export declare const CurrencyTableColumns: ColumnsType[];
export declare const BondYieldsEURTableColumns: ColumnsType[];
export declare const BondYieldsColumns: Record<string, ColumnsType[]>;
export declare function transformData({ columnKey, data, pivotHeading, rowKey, }: TransformDataParams): Record<string, TableData | undefined>[];
export {};
//# sourceMappingURL=utils.d.ts.map