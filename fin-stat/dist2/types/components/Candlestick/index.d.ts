import type { CSSProperties } from "react";
export interface Cluster {
    sell: number;
    buy: number;
    volume: number;
    price: number;
}
export interface CandlestickDatum {
    open: number;
    close: number;
    high: number;
    low: number;
    date: string;
    volume: number;
}
export interface CandlestickProps {
    title?: string;
    style?: CSSProperties;
    data: CandlestickDatum[];
    theme?: "light" | "dark";
}
export declare function Candlestick({ title, style, theme, data }: CandlestickProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map