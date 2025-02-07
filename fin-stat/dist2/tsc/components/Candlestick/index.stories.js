import { jsx as _jsx } from "react/jsx-runtime";
import { useDarkMode } from "storybook-dark-mode";
import { generateSampleCandleStickData } from "./dev-utils";
import { Candlestick } from ".";
export default {
    title: "Candlestick",
    component: Candlestick,
    args: {
        title: "Candlestick",
        data: generateSampleCandleStickData(100),
    },
};
export const Template = {
    render: function Wrapper(args) {
        const isDarkMode = useDarkMode();
        return (_jsx("div", { style: { height: "90vh", width: "100%" }, children: _jsx(Candlestick, Object.assign({}, args, { theme: isDarkMode === true ? "dark" : "light" })) }));
    },
};
//# sourceMappingURL=index.stories.js.map