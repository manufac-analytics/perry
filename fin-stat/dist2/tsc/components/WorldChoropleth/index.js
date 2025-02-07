import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Adapted from https://github.com/manufac-analytics/magnet/blob/main/src/renderer/charts/WorldChoroplethMap/index.tsx
import { SegmentedControl, Stack } from "@mantine/core";
import { extent } from "d3-array";
import { MapChart } from "echarts/charts";
import { TitleComponent, ToolboxComponent, TooltipComponent, VisualMapComponent, GeoComponent, } from "echarts/components";
import { init, use, registerMap, getInstanceByDom } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useRef, useEffect, useMemo, useState } from "react";
import Logo from "../../fin-logo.png";
import { useMobile } from "../utils";
import * as classes from "../Widget/Widget.module.css";
import { TimePeriods } from "./utils";
import WorldChoroplethGeoJSON from "./WorldGeoJSON.json";
/**
 * Adapted from Echarts.
 * Ref: https://echarts.apache.org/examples/en/editor.html?c=map-usa-projection&lang=ts
 */
use([
    TitleComponent,
    TooltipComponent,
    VisualMapComponent,
    GeoComponent,
    MapChart,
    ToolboxComponent, // A group of utility tools, which includes export, data view, dynamic type switching, data area zooming, and reset.
    CanvasRenderer, // If you only need to use the canvas rendering mode, the bundle will not include the SVGRenderer module, which is not needed.
]);
registerMap("WorldChoropleth", WorldChoroplethGeoJSON);
export function WorldChoropleth({ data, theme, title, style }) {
    var _a, _b;
    const [period, setPeriod] = useState(TimePeriods[1]);
    const chartRef = useRef(null);
    const max = useMemo(() => {
        var _a, _b;
        const mapExtent = extent(data !== null && data !== void 0 ? data : [], (item) => item[period]);
        return Math.max(Math.abs((_a = mapExtent[1]) !== null && _a !== void 0 ? _a : 0), Math.abs((_b = mapExtent[0]) !== null && _b !== void 0 ? _b : 0));
    }, [data, period]);
    const isMobile = useMobile();
    useEffect(() => {
        let chart;
        let observer;
        if (chartRef.current !== null) {
            chart = init(chartRef.current, theme);
            observer = new ResizeObserver(() => {
                chart === null || chart === void 0 ? void 0 : chart.resize();
            });
            observer.observe(chartRef.current);
        }
        return () => {
            chart === null || chart === void 0 ? void 0 : chart.dispose();
            observer === null || observer === void 0 ? void 0 : observer.disconnect();
        };
    }, [theme]); // Whenever theme changes we need to dispose the chart to render a fresh one with appropriate styling
    useEffect(() => {
        if (chartRef.current !== null) {
            const chart = getInstanceByDom(chartRef.current);
            const option = {
                title: {
                    text: title,
                    left: "center",
                },
                tooltip: {
                    trigger: "item",
                    formatter: (params) => {
                        let output = "";
                        const { value, name } = params;
                        output = `${name}: ${(value / 100).toLocaleString(undefined, {
                            style: "percent",
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                        })}`;
                        return output;
                    },
                },
                toolbox: {
                    show: true,
                    left: "right",
                    top: "top",
                    feature: {
                        saveAsImage: {},
                        restore: {
                            show: true,
                            title: "Reset zoom",
                        },
                    },
                },
                // Ref: https://echarts.apache.org/examples/en/editor.html?c=map-usa-projection
                visualMap: {
                    type: "continuous",
                    left: "right",
                    min: -1 * max,
                    max,
                    inRange: {
                        color: [
                            "#8F223A",
                            "#A54E61",
                            "#BB7A88",
                            "#D2a6b0",
                            "#BACDAE",
                            "#98B485",
                            "#769B5D",
                            "#548235",
                        ],
                    },
                    text: ["High", "Low"],
                    calculable: true,
                    realtime: false,
                },
                // Ref: https://echarts.apache.org/en/option.html#graphic.elements-group.type
                graphic: [
                    {
                        type: "image",
                        style: {
                            image: Logo.toString(),
                            width: 28,
                            height: 21,
                        },
                        right: 70,
                        bottom: 10,
                        zlevel: 1,
                    },
                ],
                series: [
                    {
                        name: "WorldChoropleth",
                        type: "map",
                        map: "WorldChoropleth", // Should be same as the map registered with 'registerMap'
                        roam: isMobile !== true, // Used for zooming and spanning over the map. Ref: https://echarts.apache.org/en/option.html#series-map.roam
                        /**
                         * Associates individual map polygons to the key defined.
                         * Ref: https://echarts.apache.org/en/option.html#series-map.nameProperty
                         */
                        nameProperty: "name",
                        data: data === null || data === void 0 ? void 0 : data.map((item) => ({
                            name: item.country,
                            value: item[period],
                        })),
                    },
                ],
            };
            chart === null || chart === void 0 ? void 0 : chart.setOption(option);
        }
    }, [data, period, title, isMobile, max]); // Whenever theme changes we need to dispose the chart to render a fresh one with appropriate styling
    const handleChange = (value) => {
        setPeriod(value);
    };
    return (_jsxs(Stack, { align: "center", children: [_jsx(SegmentedControl, { value: period, data: TimePeriods, onChange: handleChange, color: "rgb(255, 207, 179)", bg: "rgb(138, 138, 138)", transitionDuration: 500, transitionTimingFunction: "linear", classNames: { label: classes.label } }), _jsx("div", { style: Object.assign(Object.assign({}, style), { height: (_a = style === null || style === void 0 ? void 0 : style.height) !== null && _a !== void 0 ? _a : "90vh", width: (_b = style === null || style === void 0 ? void 0 : style.width) !== null && _b !== void 0 ? _b : "100%" }), ref: chartRef })] }));
}
//# sourceMappingURL=index.js.map