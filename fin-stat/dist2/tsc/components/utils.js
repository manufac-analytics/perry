import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// eslint-disable-next-line import/no-unused-modules
export function useMobile() {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    return isMobile === true;
}
//# sourceMappingURL=utils.js.map