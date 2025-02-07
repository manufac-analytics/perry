import { jsx as _jsx } from "react/jsx-runtime";
import { useDarkMode } from "storybook-dark-mode";
import { AdjustedCloseData } from "./data";
import { LineChart } from ".";
export default {
    title: "LineChart",
    component: LineChart,
    args: {
        title: "Line chart",
        data: AdjustedCloseData,
    },
};
export const Template = {
    render: function Wrapper(args) {
        const isDarkMode = useDarkMode();
        return (_jsx("div", { style: { height: "90vh", width: "100%" }, children: _jsx(LineChart, Object.assign({}, args, { theme: isDarkMode === true ? "dark" : "light" })) }));
    },
};
//# sourceMappingURL=index.stories.js.map