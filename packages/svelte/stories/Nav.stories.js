import Nav from "../lib/components/Nav.svelte";

export default {
  title: "Nav",
  component: Nav,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "some component _markdown_",
      },
    },
  },
};

const Template = ({ on, ...args }) => ({
  Component: Nav,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  currentPage: "test2",
  navItems: [
    {
      label: "Home",
      href: "test1",
    },
    {
      label: "Course Videos",
      href: "test2",
    },
    {
      label: "Blog",
      href: "test3",
    },
  ],
};
