import { TextInput } from "../lib/";
import "./utils.css";

export default {
  title: "TextInput",
  component: TextInput,
  argTypes: {
    inputType: {
      control: {
        type: "select",
        options: [
          "text",
          "date",
          "email",
          "number",
          "password",
          "search",
          "tel",
          "time",
          "url",
        ],
      },
    },
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
