import { BondYieldsData } from "../Widget/dev-utils";
import { BondYieldsEURTableColumns } from "../WidgetTable/utils";
import { BondYieldsTable } from ".";
export default {
    title: "BondYieldsTable",
    component: BondYieldsTable,
    args: {
        title: "Bond Yields Table",
        data: BondYieldsData,
        options: {
            columns: BondYieldsEURTableColumns,
            rowKey: "duration",
            columnKey: "country",
            pivotHeading: "Bond Yields",
        },
    },
};
export const Template = {};
//# sourceMappingURL=index.stories.js.map