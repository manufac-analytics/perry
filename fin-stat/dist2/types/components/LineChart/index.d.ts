import type { CSSProperties } from "react";
export interface LineChartDatum {
    ticker: string;
    date: string;
    adjustedClose: number;
}
export interface LineChartProps {
    title?: string;
    style?: CSSProperties;
    data: LineChartDatum[];
    theme?: "light" | "dark";
}
export declare function LineChart({ title, style, data, theme }: LineChartProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map