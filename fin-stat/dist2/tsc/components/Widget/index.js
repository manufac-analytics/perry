import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SegmentedControl, ScrollArea, Skeleton, Center, Stack, Group } from "@mantine/core";
import { format } from "date-fns";
import { useEffect, useState, useMemo } from "react";
import { useGetStockData, useGetTableData } from "../../hooks/api";
import { BondYieldsTable } from "../BondYieldsTable";
import { CurrencySelect } from "../CurrencySelect";
import { LineChart } from "../LineChart";
import { WidgetTable } from "../WidgetTable";
import { CurrencyTableColumns, EquitiesTableColumns, BondYieldsColumns, } from "../WidgetTable/utils";
import { CurrencyOptions, MetricClassOptions, TimelineOptions, filterDataByPeriod } from "./utils";
import * as classes from "./Widget.module.css";
export function Widget() {
    const [currency, setCurrency] = useState(CurrencyOptions[1].value);
    const [metricClass, setMetricClass] = useState(MetricClassOptions[0]);
    const [period, setPeriod] = useState(TimelineOptions.at(3));
    const [exchangeData, setExchangeData] = useState();
    const [selectedData, setSelectedData] = useState([]);
    const [tableOptions, setTableOptions] = useState({
        columns: EquitiesTableColumns,
        rowKey: "metricAlias",
        columnKey: "time",
        pivotHeading: "Equities",
    });
    const [hideColumnColor, setHideColumnColor] = useState();
    const [selectedHeader, setSelectedHeader] = useState();
    const { data: tableData, isLoading: isTableLoading } = useGetTableData(currency, metricClass);
    const defaultExchangeData = useMemo(() => {
        const metric = typeof (tableData === null || tableData === void 0 ? void 0 : tableData[0].metric) === "string" ? tableData[0].metric : undefined;
        const exchange = typeof (tableData === null || tableData === void 0 ? void 0 : tableData[0].exchange) === "string" ? tableData[0].exchange : undefined;
        const output = {
            metric,
            exchange,
            fromDate: "1970-01-01",
            toDate: format(new Date(), "yyyy-MM-dd"),
        };
        return output;
    }, [tableData]);
    const { data: adjustedCloseData, isLoading } = useGetStockData(exchangeData !== null && exchangeData !== void 0 ? exchangeData : defaultExchangeData);
    const title = useMemo(() => {
        let header = "";
        const defaultHeader = metricClass === MetricClassOptions[2]
            ? tableData === null || tableData === void 0 ? void 0 : tableData[0][tableOptions.columnKey]
            : tableData === null || tableData === void 0 ? void 0 : tableData[0][tableOptions.rowKey];
        if (typeof selectedHeader === "string") {
            header = selectedHeader;
        }
        else if (typeof defaultHeader === "string") {
            header = defaultHeader;
        }
        return `${header} (${period})`;
    }, [metricClass, period, tableOptions.columnKey, tableOptions.rowKey, selectedHeader, tableData]);
    useEffect(() => {
        if (isLoading === false && isTableLoading === false) {
            setSelectedData(adjustedCloseData !== null && adjustedCloseData !== void 0 ? adjustedCloseData : []);
        }
    }, [isLoading, metricClass, adjustedCloseData, isTableLoading]);
    useEffect(() => {
        if (typeof period === "string") {
            const filteredData = filterDataByPeriod(period, adjustedCloseData);
            setSelectedData(filteredData);
        }
    }, [period, adjustedCloseData]);
    const handleCellClick = (rowData) => {
        const { metric, exchange } = rowData;
        if (typeof metric === "string" && typeof exchange === "string") {
            setExchangeData(Object.assign(Object.assign({}, defaultExchangeData), { metric, exchange })); // On selecting new row showing only max data.
        }
        const rowHeader = rowData[tableOptions.rowKey];
        const columnHeader = rowData[tableOptions.columnKey];
        setSelectedHeader(rowHeader);
        if (typeof columnHeader === "string" && TimelineOptions.includes(columnHeader) === true) {
            setPeriod(columnHeader);
        }
    };
    const handleBondYieldCellClick = (rowData) => {
        const { metric, exchange } = rowData;
        if (typeof metric === "string" && typeof exchange === "string") {
            setExchangeData(Object.assign(Object.assign({}, defaultExchangeData), { metric, exchange })); // On selecting new row showing only max data.
        }
        const columnHeader = rowData[tableOptions.columnKey];
        setSelectedHeader(columnHeader);
    };
    const handleMetricClassChange = (value) => {
        if (typeof value === "string") {
            setMetricClass(value);
            switch (value) {
                case MetricClassOptions[0]:
                    setTableOptions({
                        columns: EquitiesTableColumns,
                        rowKey: "metricAlias",
                        columnKey: "time",
                        pivotHeading: "Equities",
                    });
                    break;
                case MetricClassOptions[1]:
                    setTableOptions({
                        columns: CurrencyTableColumns,
                        rowKey: "metric",
                        columnKey: "period",
                        pivotHeading: "Currencies",
                    });
                    setHideColumnColor(["Level"]);
                    break;
                case MetricClassOptions[2]:
                    setTableOptions({
                        columns: BondYieldsColumns[currency],
                        rowKey: "duration",
                        columnKey: "country",
                        pivotHeading: "Bond Yields",
                    });
                    break;
                default:
                    break;
            }
            setExchangeData(undefined);
            setSelectedHeader(undefined);
            const filteredData = filterDataByPeriod("1Y", adjustedCloseData);
            setSelectedData(filteredData);
        }
    };
    const handleCurrencyChange = (value) => {
        if (typeof value === "string") {
            setCurrency(value);
            setExchangeData(undefined);
            setSelectedHeader(undefined);
            if (metricClass === MetricClassOptions[2]) {
                setTableOptions({
                    columns: BondYieldsColumns[value],
                    rowKey: "duration",
                    columnKey: "country",
                    pivotHeading: "Bond Yields",
                });
            }
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { align: "center", p: 10, children: [_jsx(SegmentedControl, { value: currency, data: CurrencyOptions, onChange: handleCurrencyChange, color: "rgb(255, 207, 179)", bg: "rgb(138, 138, 138)", transitionDuration: 500, transitionTimingFunction: "linear", classNames: { label: classes.label } }), _jsxs(Group, { wrap: "nowrap", children: [_jsx(CurrencySelect, { value: currency, options: CurrencyOptions, onChange: handleCurrencyChange, style: { display: "none" } }), _jsx(SegmentedControl, { value: metricClass, onChange: handleMetricClassChange, data: MetricClassOptions, color: "rgb(255, 207, 179)", bg: "rgb(138, 138, 138)", transitionDuration: 500, transitionTimingFunction: "linear", classNames: { label: classes.label } })] }), _jsx(SegmentedControl, { value: period, data: TimelineOptions, onChange: setPeriod, color: "rgb(255, 207, 179)", bg: "rgb(138, 138, 138)", transitionDuration: 500, transitionTimingFunction: "linear", classNames: { label: classes.label } })] }), _jsx(Skeleton, { visible: isLoading, children: _jsx(LineChart, { title: title, data: selectedData, style: { height: "35vh", width: "100%" } }) }), _jsx(ScrollArea, { children: _jsx(Skeleton, { visible: isTableLoading, children: _jsx(Center, { children: metricClass === MetricClassOptions[2] ? (_jsx(BondYieldsTable, { data: tableData !== null && tableData !== void 0 ? tableData : [], onCellClick: handleBondYieldCellClick, options: tableOptions })) : (_jsx(WidgetTable, { data: tableData !== null && tableData !== void 0 ? tableData : [], onCellClick: handleCellClick, options: tableOptions, hideColumnColor: hideColumnColor })) }) }) })] }));
}
//# sourceMappingURL=index.js.map