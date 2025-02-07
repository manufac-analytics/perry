import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell, ActionIcon, Group, Title } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
export function Header({ colorScheme, onToggleColorScheme }) {
    return (_jsx(AppShell.Header, { p: "xs", children: _jsxs(Group, { justify: "space-between", align: "center", children: [_jsx(Title, { order: 5, children: "Header" }), _jsx(ActionIcon, { onClick: onToggleColorScheme, variant: "default", children: colorScheme === "dark" ? _jsx(IconSun, {}) : _jsx(IconMoonStars, {}) })] }) }));
}
//# sourceMappingURL=index.js.map