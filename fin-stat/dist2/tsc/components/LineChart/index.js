import { jsx as _jsx } from "react/jsx-runtime";
import { useMantineColorScheme } from "@mantine/core";
import { LineChart as LineGraph } from "echarts/charts";
import { TitleComponent, DatasetComponent, GridComponent, DataZoomComponent, ToolboxComponent, TooltipComponent, GraphicComponent, } from "echarts/components";
import { getInstanceByDom, init, use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useRef, useEffect } from "react";
import Logo from "../../fin-logo.png";
import { useMobile } from "../utils";
// Adopted from Echarts. Ref: https://echarts.apache.org/examples/en/editor.html?c=dynamic-data2&lang=ts
use([
    TitleComponent,
    CanvasRenderer,
    DatasetComponent,
    GridComponent,
    LineGraph,
    DataZoomComponent,
    ToolboxComponent,
    TooltipComponent,
    GraphicComponent,
]);
export function LineChart({ title, style, data, theme }) {
    var _a, _b;
    const chartRef = useRef(null);
    const { colorScheme } = useMantineColorScheme();
    const isMobile = useMobile();
    useEffect(() => {
        let chart;
        let observer;
        // Initialize chart
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
    }, [theme]);
    useEffect(() => {
        if (chartRef.current !== null) {
            const chart = getInstanceByDom(chartRef.current);
            const option = {
                title: {
                    text: title,
                    left: "center",
                    textStyle: {
                        fontSize: "12px",
                        fontFamily: "Open Sans Variable, sans-serif",
                    },
                    subtextStyle: {
                        fontSize: "12px",
                        fontFamily: "Open Sans Variable, sans-serif",
                    },
                },
                dataset: [
                    {
                        // @ts-expect-error bad-type
                        source: data, // TODO: Fix type issue
                    },
                ],
                grid: {
                    left: 70,
                    right: 20,
                    bottom: 20,
                },
                xAxis: [
                    {
                        type: "time",
                        axisLabel: {
                            // Ref: https://echarts.apache.org/en/option.html#xAxis.axisLabel.formatter
                            formatter: (value) => {
                                return new Date(value).toLocaleDateString();
                            },
                            hideOverlap: true,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        scale: true,
                    },
                ],
                dataZoom: [
                    {
                        type: "inside",
                        xAxisIndex: 0,
                        start: 0,
                        end: 100,
                        disabled: isMobile,
                    },
                ],
                tooltip: {
                    trigger: "axis",
                    formatter: (params) => {
                        let output = "";
                        if (Array.isArray(params)) {
                            const { ticker, date, adjustedClose } = params[0].data;
                            const formattedDate = new Date(date).toLocaleDateString();
                            output = `
              <b>Date:</b> ${formattedDate}<br/>
              <b>Ticker:</b> ${ticker}<br/>
              <b>Adjusted close:</b> ${adjustedClose}<br/>
              `;
                        }
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
                series: [
                    {
                        type: "line",
                        showSymbol: false,
                        encode: {
                            x: "date",
                            y: "adjustedClose",
                        },
                        areaStyle: {
                            color: "rgba(255, 207, 179, 0.5)",
                        },
                        color: colorScheme === "light" ? "black" : "white",
                    },
                ],
                // Ref: https://echarts.apache.org/en/option.html#graphic.elements-group.type
                graphic: [
                    {
                        type: "image",
                        style: {
                            image: Logo.toString(),
                            width: 28,
                            height: 21,
                        },
                        right: 25,
                        bottom: 25,
                        zlevel: 1,
                    },
                ],
            };
            chart === null || chart === void 0 ? void 0 : chart.setOption(option, true);
        }
    }, [data, title, theme, colorScheme, isMobile]);
    return (_jsx("div", { ref: chartRef, style: Object.assign(Object.assign({}, style), { height: (_a = style === null || style === void 0 ? void 0 : style.height) !== null && _a !== void 0 ? _a : "100%", width: (_b = style === null || style === void 0 ? void 0 : style.width) !== null && _b !== void 0 ? _b : "100%" }) }));
}
//# sourceMappingURL=index.js.map