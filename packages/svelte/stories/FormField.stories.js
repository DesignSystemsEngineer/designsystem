import { FormField } from "../lib/index";
import "./utils.css";
import iconData from "../lib/iconData";

export default {
  title: "FormField",
  component: FormField,
  argTypes: {
    label: { control: "text", defaultValue: "Label:" },
    isTop: { control: "boolean" },
    isFullWidth: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
};

const Template = ({ ...args }) => ({
  Component: FormField,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Top = Template.bind({});
Top.args = {
  isTop: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
