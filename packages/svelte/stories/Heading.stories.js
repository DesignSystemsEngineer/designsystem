import Heading from "./views/HeadingView.svelte";
import "./utils.css";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["XXXL", "XXL", "XL", "L", "M", "S", "XS", "XXS"],
      },
    },
  },
};

const Template = ({ ...args }) => ({
  Component: Heading,
  props: args,
});

export const XXXL = Template.bind({});
XXXL.args = { size: "XXXL", label: "Heading XXXL" };

export const XXL = Template.bind({});
XXL.args = { size: "XXL", label: "Heading XXL" };

export const XL = Template.bind({});
XL.args = { size: "XL", label: "Heading XL" };

export const L = Template.bind({});
L.args = { size: "L", label: "Heading L" };

export const M = Template.bind({});
M.args = { label: "Heading M" };

export const S = Template.bind({});
S.args = { size: "S", label: "Heading S" };

export const XS = Template.bind({});
XS.args = { size: "XS", label: "Heading XS" };

export const XXS = Template.bind({});
XXS.args = { size: "XXS", label: "Heading XXS" };
