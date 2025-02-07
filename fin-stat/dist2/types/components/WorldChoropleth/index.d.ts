import type { MapDatum } from "./utils";
import type { CSSProperties } from "react";
export interface WorldChoroplethProps {
    data?: MapDatum[];
    theme?: "light" | "dark";
    title?: string;
    style?: CSSProperties;
}
export declare function WorldChoropleth({ data, theme, title, style }: WorldChoroplethProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map