import { jsx as _jsx } from "react/jsx-runtime";
import { MantineProvider, SegmentedControl, Table, Text, createTheme } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Supports weights 300-800
import "@fontsource-variable/open-sans"; // Ref: https://fontsource.org/fonts/open-sans/install
import { ChoroplethWidget } from "./components/ChoroplethWidget";
import { Widget } from "./components/Widget";
import "@mantine/core/styles.css"; // Ref: https://mantine.dev/changelog/7-0-0/#global-styles
const ReactQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 8.64e7,
            retry: false, // Ref: https://tanstack.com/query/latest/docs/framework/react/guides/query-retries
        },
    },
});
const MantineTheme = createTheme({
    fontFamily: "Open Sans Variable, sans-serif",
    // Ref: https://mantine.dev/styles/variants-sizes/#adding-custom-variants
    components: {
        SegmentedControl: SegmentedControl.extend({
            styles: {
                label: {
                    fontSize: "12px",
                },
            },
        }),
        Text: Text.extend({
            styles: {
                root: {
                    fontSize: "12px",
                },
            },
        }),
        Table: Table.extend({
            styles: {
                tbody: {
                    fontSize: "12px",
                },
            },
        }),
    },
}); // Ref: https://mantine.dev/theming/theme-object/#store-theme-override-object-in-a-variable
const Elements = document.getElementsByClassName("finstat-widget");
// Render multiple widgets
for (const ele of Elements) {
    const root = createRoot(ele);
    root.render(_jsx(StrictMode, { children: _jsx(QueryClientProvider, { client: ReactQueryClient, children: _jsx(MantineProvider, { theme: MantineTheme, children: _jsx(Widget, {}) }) }) }));
}
const MapElements = document.getElementsByClassName("finstat-map");
for (const ele of MapElements) {
    const root = createRoot(ele);
    root.render(_jsx(StrictMode, { children: _jsx(QueryClientProvider, { client: ReactQueryClient, children: _jsx(MantineProvider, { theme: MantineTheme, children: _jsx(ChoroplethWidget, {}) }) }) }));
}
//# sourceMappingURL=index.js.map