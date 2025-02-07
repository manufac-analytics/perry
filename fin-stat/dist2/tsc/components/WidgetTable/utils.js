import { groupBy } from "lodash-es";
export const EquitiesTableColumns = [
    { column: "Equities", format: "string" },
    { column: "1W", format: "percentage" },
    { column: "1M", format: "percentage" },
    { column: "YTD", format: "percentage" },
    { column: "1Y", format: "percentage" },
    { column: "5Y", format: "percentage" },
];
export const CurrencyTableColumns = [
    { column: "Currencies", format: "string" },
    { column: "Level", format: "number" },
    { column: "YTD", format: "percentage" },
    { column: "1Y", format: "percentage" },
    { column: "5Y", format: "percentage" },
];
export const BondYieldsEURTableColumns = [
    { column: "Bond Yields", format: "string" },
    { column: "DE", format: "percentage" },
    { column: "FR", format: "percentage" },
    { column: "IT", format: "percentage" },
    { column: "ES", format: "percentage" },
];
const BondYieldsUSDTableColumns = [
    { column: "Bond Yields", format: "string" },
    { column: "US", format: "percentage" },
    { column: "CA", format: "percentage" },
    { column: "DE", format: "percentage" },
    { column: "JP", format: "percentage" },
];
const BondYieldsGBPTableColumns = [
    { column: "Bond Yields", format: "string" },
    { column: "UK", format: "percentage" },
    { column: "US", format: "percentage" },
    { column: "DE", format: "percentage" },
    { column: "FR", format: "percentage" },
];
export const BondYieldsColumns = {
    EUR: BondYieldsEURTableColumns,
    USD: BondYieldsUSDTableColumns,
    GBP: BondYieldsGBPTableColumns,
};
export function transformData({ columnKey, data, pivotHeading, rowKey, }) {
    // Group the data by the specified row key
    const rowWiseData = groupBy(data, (ele) => ele[rowKey]);
    // Map each group to a structured object like { "france":{value:7, code : "FR3M", exchnage:"GBOND"}}
    const columns = Object.entries(rowWiseData).map(([key, items]) => {
        // Reduce the grouped data to a single object
        const reducedData = items.reduce((acc, curr) => {
            let output = acc;
            const currentColumnKey = curr[columnKey];
            if (typeof currentColumnKey === "string" || typeof currentColumnKey === "number") {
                output = Object.assign(Object.assign({}, acc), { [currentColumnKey]: curr });
            }
            return output;
        }, {
            [pivotHeading]: {
                value: key,
            },
        });
        return reducedData;
    });
    return columns;
}
//# sourceMappingURL=utils.js.map