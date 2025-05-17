import {GraphProps, createGraph} from "./Graph";
import type {Meta, StoryObj} from "@storybook/html";
// import {fn} from "@storybook/test";

const meta = {
    title: "Graph/Basic",
    // tags: ["autodocs"],
    render: (args) => {
        return createGraph(args);
    },
    argTypes: {
        jsonData: {control: "text"},
    },
} satisfies Meta<GraphProps>;

export default meta;
type Story = StoryObj<GraphProps>;

export const Basic: Story = {
    args: {
        jsonData: "./examples/data/miserables.json",
    },
};
