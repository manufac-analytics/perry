import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Ref: https://mantine.dev/combobox/?e=SelectOptionComponent
import { Combobox, InputBase, Text, useCombobox } from "@mantine/core";
export function CurrencySelect({ onChange, value, options, style }) {
    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
        },
    });
    const selectedOption = options.find((item) => item.value === value);
    return (_jsxs(Combobox, { store: combobox, withinPortal: false, onOptionSubmit: (val) => {
            onChange(val);
            combobox.closeDropdown();
        }, children: [_jsx(Combobox.Target, { children: _jsx(InputBase, { component: "button", type: "button", pointer: true, rightSection: _jsx(Combobox.Chevron, {}), onClick: () => {
                        combobox.toggleDropdown();
                    }, rightSectionPointerEvents: "none", style: Object.assign({}, style), children: _jsx(Text, { children: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label }) }) }), _jsx(Combobox.Dropdown, { children: _jsx(Combobox.Options, { children: options.map((item) => (_jsx(Combobox.Option, { value: item.value, children: _jsx(Text, { children: item.label }) }, item.value))) }) })] }));
}
//# sourceMappingURL=index.js.map