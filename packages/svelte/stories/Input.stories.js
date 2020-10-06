import Input from "../lib/components/Input.svelte";
import "./utils.css";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    inputType: { control: "text" },
  },
};

const Template = ({ ...args }) => ({
  Component: Input,
  props: args,
});

export const Text = Template.bind({});
Text.args = {};

export const Number = Template.bind({});
Number.args = {
  inputType: "number",
};
