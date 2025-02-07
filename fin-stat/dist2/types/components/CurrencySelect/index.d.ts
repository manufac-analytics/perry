import type { CSSProperties } from "react";
export interface CurrencySelectProps {
    onChange: (value: string) => void;
    value: string;
    options: {
        label: JSX.Element;
        value: string;
    }[];
    style?: CSSProperties;
}
export declare function CurrencySelect({ onChange, value, options, style }: CurrencySelectProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map