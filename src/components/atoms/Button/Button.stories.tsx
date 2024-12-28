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
    children: "Click Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Secondary Button",
    // Place props for styling secondary button here
};