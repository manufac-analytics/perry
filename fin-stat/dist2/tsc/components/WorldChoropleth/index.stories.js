import { jsx as _jsx } from "react/jsx-runtime";
import { Data } from "./dev-utils";
import { WorldChoropleth } from ".";
export default {
    title: "WorldChoropleth",
    component: WorldChoropleth,
    args: {
        data: Data,
    },
};
export const Template = {
    render: function Wrapper(args) {
        return (_jsx("div", { style: { height: "80vh", width: "100%" }, children: _jsx(WorldChoropleth, Object.assign({}, args)) }));
    },
};
//# sourceMappingURL=index.stories.js.map