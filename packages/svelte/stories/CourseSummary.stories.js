import CourseSummary from "../lib/components/CourseSummary.svelte";
import "./utils.css";

export default {
  title: "CourseSummary",
  component: CourseSummary,
  argTypes: { videoCount: { control: { type: "number" } } },
};

const Template = ({ ...args }) => ({
  Component: CourseSummary,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: "Lorem Ipsum",
  videoCount: 5,
  duration: "4m",
  description: `<p>
    Do you know what a testing framework does? Do you know what makes a
    testing framework different from a testing or assertion library? The best
    way to use a tool effectively is to understand how it works. And the best
    way to understand how a tool works is by making it yourself!
  </p>
  <p>
    In this short course, we’ll learn how testing frameworks and assertion
    libraries work by building our own, simple version of each.
  </p>`,
};
