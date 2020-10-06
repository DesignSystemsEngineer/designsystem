import Grid from "./views/GridView.svelte";
import "./utils.css";

export default {
  title: "Grid",
  component: Grid,
};

const Template = ({ ...args }) => ({
  Component: Grid,
  props: args,
});

export const Default = Template.bind({});
