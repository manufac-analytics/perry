import { CurrencyData, EquityData } from "../Widget/dev-utils";
import { CurrencyTableColumns, EquitiesTableColumns } from "./utils";
import { WidgetTable } from ".";
export default {
    title: "WidgetTable",
    component: WidgetTable,
    args: {
        title: "Equity Table",
        data: EquityData,
        options: {
            columns: EquitiesTableColumns,
            rowKey: "metricAlias",
            columnKey: "time",
            pivotHeading: "Equities",
        },
    },
};
export const Template = {};
export const Currency = {
    args: {
        data: CurrencyData,
        options: {
            columns: CurrencyTableColumns,
            rowKey: "metric",
            columnKey: "period",
            pivotHeading: "Currencies",
        },
    },
};
//# sourceMappingURL=index.stories.js.map