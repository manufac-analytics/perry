import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Group } from "@mantine/core";
import { EU, GB, US } from "country-flag-icons/react/3x2";
import { subWeeks, subMonths, subYears } from "date-fns";
export const CurrencyOptions = [
    {
        value: "EUR",
        label: (_jsxs(Group, { wrap: "nowrap", gap: "xs", children: [_jsx(EU, { title: "European Union", width: 25 }), "EUR"] })),
    },
    {
        value: "USD",
        label: (_jsxs(Group, { wrap: "nowrap", gap: "xs", children: [_jsx(US, { title: "United States", width: 25 }), "USD"] })),
    },
    {
        value: "GBP",
        label: (_jsxs(Group, { wrap: "nowrap", gap: "xs", children: [_jsx(GB, { title: "United Kingdom", width: 25 }), "GBP"] })),
    },
];
export const MetricClassOptions = ["Equities", "Currencies", "Bond Yields"];
export const TimelineOptions = ["1W", "1M", "6M", "1Y", "5Y", "MAX"];
export function filterDataByPeriod(period, adjustedCloseData) {
    const today = new Date();
    let thresholdDate;
    switch (period) {
        case "1W":
            thresholdDate = subWeeks(today, 1);
            break;
        case "1M":
            thresholdDate = subMonths(today, 1);
            break;
        case "6M":
            thresholdDate = subMonths(today, 6);
            break;
        case "1Y":
            thresholdDate = subYears(today, 1);
            break;
        case "5Y":
            thresholdDate = subYears(today, 5);
            break;
        case "MAX":
        default:
            break;
    }
    const filteredData = adjustedCloseData === null || adjustedCloseData === void 0 ? void 0 : adjustedCloseData.filter((item) => {
        const itemDate = new Date(item.date);
        return thresholdDate instanceof Date ? itemDate >= thresholdDate : true;
    });
    return filteredData !== null && filteredData !== void 0 ? filteredData : [];
}
//# sourceMappingURL=utils.js.map