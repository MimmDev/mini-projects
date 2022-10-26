import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SwipeText } from "../components/SwipeText/SwipeText";

export default {
    component: SwipeText,
} as ComponentMeta<typeof SwipeText>;

export const Default: ComponentStory<typeof SwipeText> = () => <SwipeText />;
