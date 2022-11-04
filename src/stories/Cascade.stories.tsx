import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Cascade } from "../components/Cascade/Cascade";

export default {
    component: Cascade,
} as ComponentMeta<typeof Cascade>;

const Template: ComponentStory<typeof Cascade> = (args) => (
    <Cascade {...args}>
        <h1>Hello World</h1>
        <h1>Welcome To My Show</h1>
        <h1>This Is A Test</h1>
        <h1>Of The Cascade Component</h1>
    </Cascade>
);

export const Default = Template.bind({});

export const Quick = Template.bind({});
Quick.args = {
    interval: 0.1,
};

export const Slow = Template.bind({});
Slow.args = {
    interval: 1,
};
