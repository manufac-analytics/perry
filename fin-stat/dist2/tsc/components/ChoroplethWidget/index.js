import { jsx as _jsx } from "react/jsx-runtime";
import { Skeleton } from "@mantine/core";
import { format } from "date-fns";
import { useGetMapData } from "../../hooks/api";
import { WorldChoropleth } from "../WorldChoropleth";
import { Symbols } from "./utils";
export function ChoroplethWidget() {
    const { data, isLoading } = useGetMapData({
        fromDate: "1970-01-01",
        toDate: format(new Date(), "yyyy-MM-dd"),
        symbols: Symbols,
    });
    return (_jsx(Skeleton, { visible: isLoading, children: _jsx(WorldChoropleth, { data: data, style: { height: "35vh" } }) }));
}
//# sourceMappingURL=index.js.map