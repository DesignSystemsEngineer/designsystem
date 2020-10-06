import Button from "../lib/components/Button.svelte";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
