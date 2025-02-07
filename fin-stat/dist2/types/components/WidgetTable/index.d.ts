/// <reference types="react" />
import type { ColumnsType } from "./utils";
export type TableData = Record<string, string | number | null | undefined>;
export interface TableOptions {
    columns: ColumnsType[];
    rowKey: string;
    columnKey: string;
    pivotHeading: string;
}
export interface TableProps {
    title?: string;
    data: TableData[];
    options: TableOptions;
    onCellClick?: (rowData: TableData) => void;
    hideColumnColor?: string[];
}
export declare function WidgetTable({ data, title, onCellClick, options, hideColumnColor, }: TableProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map