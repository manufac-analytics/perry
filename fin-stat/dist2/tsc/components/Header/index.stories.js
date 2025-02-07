import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell } from "@mantine/core";
import { useDarkMode } from "storybook-dark-mode";
import { Header } from ".";
export default {
    title: "Header",
    component: Header,
};
export const Template = {
    render: function Wrapper() {
        const darkMode = useDarkMode();
        return (_jsx(AppShell, { children: _jsx(Header, { onToggleColorScheme: () => { }, colorScheme: darkMode ? "dark" : "light" }) }));
    },
};
//# sourceMappingURL=index.stories.js.map