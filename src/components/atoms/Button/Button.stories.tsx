import React from "react";
import Button from "./Button";

// Default Export
export default {
    title: 'Components/Button',
    component: Button,
};

// Template function to create Button story
const Template = (args) => <Button {...args} />;

// Story variants
export const Primary = Template.bind({});
Primary.args = {
    children: "Trade",
    variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Trade",
    variant: "secondary",
    // Place props for styling secondary button here
};

export const Ghost = Template.bind({});
Ghost.args = {
    children: "Trade",
    variant: "ghost",
    // Place props for styling ghost button here
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Trade",
    variant: "disabled",
}