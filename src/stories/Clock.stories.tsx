import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Clock } from "../components/Clock/Clock";

export default {
    component: Clock,
} as ComponentMeta<typeof Clock>;

export const Default: ComponentStory<typeof Clock> = () => <Clock />;
