import { WidgetTable } from ".";
import type { StoryObj } from "@storybook/react";
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react").ReactRenderer, import(".").TableProps>;
export default _default;
export declare const Template: StoryObj<typeof WidgetTable>;
export declare const Currency: {
    args: {
        data: import(".").TableData[];
        options: {
            columns: import("./utils").ColumnsType[];
            rowKey: string;
            columnKey: string;
            pivotHeading: string;
        };
    };
};
//# sourceMappingURL=index.stories.d.ts.map