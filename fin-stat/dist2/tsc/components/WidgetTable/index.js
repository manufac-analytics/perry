import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Adapted from https://github.com/manufac-analytics/energy/blob/main/src/components/ForecastTable/index.tsx
import { Group, Stack, Table, Text, useMantineTheme, useMantineColorScheme } from "@mantine/core";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { transformData } from "./utils";
import * as classes from "./WidgetTable.module.css";
export function WidgetTable({ data, title, onCellClick, options, hideColumnColor, }) {
    const { colors } = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();
    const [selectedCell, setSelectedCell] = useState();
    const { columns: tableColumns, columnKey, pivotHeading, rowKey } = options;
    const transformedData = useMemo(() => transformData({
        columnKey,
        data,
        pivotHeading,
        rowKey,
    }), [columnKey, data, pivotHeading, rowKey]);
    const columns = useMemo(() => {
        const columnHelper = createColumnHelper();
        return tableColumns.map((columnValue) => {
            return columnHelper.accessor((rowData) => { var _a, _b; return (_b = (_a = rowData[columnValue.column]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ""; }, {
                id: columnValue.column,
                header: columnValue.column,
                cell: ({ getValue }) => {
                    let output = getValue();
                    if (columnValue.format === "percentage" && typeof output === "number") {
                        output = (output / 100).toLocaleString(undefined, {
                            style: "percent",
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                        });
                    }
                    else if (columnValue.format === "number" && typeof output === "number") {
                        output = output.toFixed(3); // All column are percentage formatted only "level" column has type number
                    }
                    return output;
                },
            });
        });
    }, [tableColumns]);
    const { getRowModel, getHeaderGroups } = useReactTable({
        data: transformedData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (_jsxs(Stack, { w: "fit-content", children: [_jsx(Text, { size: "lg", fw: "bold", ta: "center", children: title }), _jsxs(Table, { withColumnBorders: true, withTableBorder: true, classNames: { td: classes.td }, children: [_jsx(Table.Thead, { children: getHeaderGroups().map(({ id, headers }) => (_jsx(Table.Tr, { style: { borderBottom: "2px solid black" }, children: headers.map(({ id: headerID, column, getContext }) => (_jsx(Table.Th, { style: {
                                    cursor: "pointer",
                                    background: "rgba(255, 207, 179, 0.5)",
                                    color: "black",
                                }, children: _jsx(Group, { wrap: "nowrap", children: _jsx(Text, { size: "md", fw: "bold", tt: "uppercase", children: flexRender(column.columnDef.header, getContext()) }) }) }, headerID))) }, id))) }), _jsx(Table.Tbody, { children: getRowModel().rows.map(({ id, getVisibleCells }) => (_jsx(Table.Tr, { children: getVisibleCells().map(({ id: dataID, column, getContext, getValue, row }, index) => {
                                const cellValue = getValue();
                                const isSelected = typeof cellValue === "number" // Prevent user from clicking on row header
                                    ? (selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.rowID) === row.id && selectedCell.columnID === column.id
                                    : false;
                                let color;
                                const selectedValue = row.original[column.id];
                                if (typeof cellValue === "number" &&
                                    (Array.isArray(hideColumnColor) && hideColumnColor.includes(column.id)) === false) {
                                    if (cellValue < 0) {
                                        color = colors.red.at(9);
                                    }
                                    else if (cellValue > 0) {
                                        color = colors.green.at(9);
                                    }
                                    else {
                                        color = colorScheme === "light" ? "black" : "white";
                                    }
                                }
                                return (_jsx(Table.Td, { c: color, bg: isSelected === true ? "rgba(0,0,0,0.2)" : undefined, onClick: () => {
                                        // Ref: https://github.com/TanStack/table/discussions/2295
                                        onCellClick === null || onCellClick === void 0 ? void 0 : onCellClick(selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}); // TODO: Update arguments
                                        setSelectedCell({ rowID: row.id, columnID: column.id });
                                    }, style: {
                                        cursor: index > 0 ? "pointer" : "auto",
                                    }, children: flexRender(column.columnDef.cell, getContext()) }, dataID));
                            }) }, id))) })] })] }));
}
//# sourceMappingURL=index.js.map