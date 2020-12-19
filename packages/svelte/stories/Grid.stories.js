import GridView from "./views/GridView.svelte";
import "./utils.css";

export default {
  title: "Grid",
  component: GridView,
};

const Template = ({ ...args }) => ({
  Component: GridView,
  props: args,
});

export const Default = Template.bind({});
