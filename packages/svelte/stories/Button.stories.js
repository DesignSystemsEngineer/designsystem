import ButtonView from "./views/ButtonView.svelte";
import { action } from "@storybook/addon-actions";
import iconData from "../lib/iconData";

export default {
  title: "Button",
  component: ButtonView,
  argTypes: {
    label: { control: "text" },
    isCTA: { control: "boolean" },
    isLarge: { control: "boolean" },
    isDisabled: { control: "boolean" },
    iconId: { control: { type: "select", options: Object.keys(iconData) } },
  },
  parameters: {
    docs: {
      description: {
        component: "some component _markdown_",
      },
    },
  },
};

const Template = ({ on, ...args }) => ({
  Component: ButtonView,
  props: args,
  on: {
    click: action("click"),
    ...on,
  },
});

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const CTA = Template.bind({});
CTA.args = {
  isCTA: true,
};

export const Large = Template.bind({});
Large.args = {
  isLarge: true,
};

export const Icon = Template.bind({});
Icon.args = {
  iconId: Object.keys(iconData)[
    Math.floor(Math.random() * Object.keys(iconData).length)
  ],
};

export const Link = Template.bind({});
Link.args = {
  href: "#",
  on: {
    click: (e) => {
      e.preventDefault();
      action("clicked")(e);
    },
  },
};
