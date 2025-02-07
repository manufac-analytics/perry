import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MetricClassOptions } from "../components/Widget/utils";
import { APIDictionary } from "./utils";
const AxiosInstance = axios.create({
    baseURL: "https://d1anpj4arigdp7.cloudfront.net",
    headers: process.env.NODE_ENV === "production" ? undefined : { "aws-cf-cd-env": "staging" }, // Ref: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-continuous-deployment.html#understanding-continuous-deployment-routing
});
async function fetchStockData(data) {
    const { metric: symbol, exchange, fromDate, toDate } = data;
    const url = `/stock-data/${symbol}/${exchange}/`;
    const response = await AxiosInstance.get(url, {
        params: {
            fromDate,
            toDate,
        },
    });
    const output = response.data;
    return output;
}
export const useGetStockData = (data) => {
    const output = useQuery({
        queryKey: ["stockData", data], // Ref: Object is allowed. https://tanstack.com/query/v4/docs/framework/react/guides/query-keys#if-your-query-function-depends-on-a-variable-include-it-in-your-query-key
        queryFn: async () => fetchStockData(data),
        // All values in exchange data should be string type to avoid calls for undefined values.
        enabled: Object.values(data).every((ele) => typeof ele === "string"),
    });
    return output;
};
async function fetchTableData(endpoint, data) {
    const { symbols, fromDate, toDate } = data;
    const params = new URLSearchParams();
    if (symbols.length > 0) {
        symbols.forEach((symbol) => {
            const symbolString = JSON.stringify(symbol);
            params.append("symbols", symbolString);
        });
        params.append("fromDate", fromDate);
        params.append("toDate", toDate);
    }
    const url = `/${endpoint}/`;
    const response = await AxiosInstance.get(url, {
        params,
    });
    const output = response.data;
    return output;
}
export const useGetTableData = (currencyOption, tabOption) => {
    const data = APIDictionary[currencyOption][tabOption];
    let endpoint = "equity";
    switch (tabOption) {
        case MetricClassOptions[2]:
            endpoint = "bond-yields";
            break;
        case MetricClassOptions[1]:
            endpoint = "currency";
            break;
        case MetricClassOptions[0]:
        default:
            break;
    }
    const output = useQuery({
        queryKey: [currencyOption, tabOption], // Ref: Object is allowed. https://tanstack.com/query/v4/docs/framework/react/guides/query-keys#if-your-query-function-depends-on-a-variable-include-it-in-your-query-key
        queryFn: async () => fetchTableData(endpoint, data),
        // enabled is not needed because type of data is "TableQueryParams" and it does not have any optional values
    });
    return output;
};
async function fetchMapData(data) {
    const { symbols, fromDate, toDate } = data;
    const params = new URLSearchParams();
    if (symbols.length > 0) {
        symbols.forEach((symbol) => {
            const symbolString = JSON.stringify(symbol);
            params.append("symbols", symbolString);
        });
        params.append("fromDate", fromDate);
        params.append("toDate", toDate);
    }
    const url = `/map-returns/`;
    const response = await AxiosInstance.get(url, {
        params,
    });
    const output = response.data;
    return output;
}
export const useGetMapData = (data) => {
    const output = useQuery({
        queryKey: ["mapData", data], // Ref: Object is allowed. https://tanstack.com/query/v4/docs/framework/react/guides/query-keys#if-your-query-function-depends-on-a-variable-include-it-in-your-query-key
        queryFn: async () => fetchMapData(data),
    });
    return output;
};
//# sourceMappingURL=api.js.map