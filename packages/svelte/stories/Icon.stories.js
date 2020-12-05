import Icon from "../lib/components/Icon.svelte";
import "./utils.css";
import iconData from "../lib/iconData";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    iconId: { control: { type: "select", options: Object.keys(iconData) } },
  },
};

const Template = ({ ...args }) => ({
  Component: Icon,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  iconId: "clock",
};
