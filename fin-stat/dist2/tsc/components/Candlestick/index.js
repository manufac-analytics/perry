import { jsx as _jsx } from "react/jsx-runtime";
import { CandlestickChart } from "echarts/charts";
import { TitleComponent, DatasetComponent, DataZoomComponent, ToolboxComponent, TooltipComponent, GridComponent, } from "echarts/components";
import { getInstanceByDom, init, use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { useRef, useEffect } from "react";
// Adopted from Echarts. Ref: https://echarts.apache.org/examples/en/editor.html?c=dynamic-data2&lang=ts
use([
    TitleComponent,
    DatasetComponent,
    CanvasRenderer,
    CandlestickChart,
    DataZoomComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    DataZoomComponent,
]);
export function Candlestick({ title, style, theme, data }) {
    const chartRef = useRef(null);
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
                },
                dataset: [
                    {
                        // @ts-expect-error bad-type
                        source: data, // TODO: Fix type issue
                    },
                ],
                xAxis: [
                    {
                        type: "category",
                    },
                ],
                yAxis: [
                    {
                        scale: true,
                        type: "value",
                    },
                ],
                dataZoom: [
                    {
                        type: "inside",
                        xAxisIndex: 0,
                        start: 0,
                        end: 100,
                    },
                ],
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
                tooltip: {
                    trigger: "item",
                    formatter: (params) => {
                        let output;
                        if (Array.isArray(params)) {
                            output = "";
                        }
                        else {
                            const { open, close, high, low, date, volume } = params.data;
                            output = `
              <b>Date:</b> ${date}<br/>
              <b>Open:</b> ${open.toFixed(2)}<br/>
              <b>Close:</b> ${close.toFixed(2)}<br/>
              <b>High:</b> ${high.toFixed(2)}<br/>
              <b>Low:</b> ${low.toFixed(2)}<br/>
              <b>Volume:</b> ${volume}<br/>

            `;
                        }
                        return output;
                    },
                },
                series: [
                    {
                        type: "candlestick",
                        encode: {
                            x: "date",
                            y: ["open", "close", "low", "high"],
                        },
                    },
                ],
            };
            chart === null || chart === void 0 ? void 0 : chart.setOption(option, true);
        }
    }, [data, theme, title]);
    return (_jsx("div", { ref: chartRef, style: Object.assign(Object.assign({}, style), { height: "100%", width: "100%", border: "1px solid black" }) }));
}
//# sourceMappingURL=index.js.map