import { SubscribeForm } from "../lib/";
import "./utils.css";

export default {
  title: "SubscribeForm",
  component: SubscribeForm,
};

const Template = ({ on, ...args }) => ({
  Component: SubscribeForm,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
