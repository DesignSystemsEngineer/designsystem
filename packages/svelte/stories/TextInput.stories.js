import TextInput from "../lib/components/TextInput.svelte";
import "./utils.css";

export default {
  title: "TextInput",
  component: TextInput,
  argTypes: {
    inputType: { control: "text" },
  },
};

const Template = ({ ...args }) => ({
  Component: TextInput,
  props: args,
});

export const Text = Template.bind({});
Text.args = {};

export const Number = Template.bind({});
Number.args = {
  inputType: "number",
};
