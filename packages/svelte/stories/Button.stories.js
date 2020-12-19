import ButtonView from "./views/ButtonView.svelte";
import { action } from "@storybook/addon-actions";
import iconData from "../lib/iconData";

export default {
  title: "Button",
  component: ButtonView,
  argTypes: {
    label: {
      description: "The label displayed on the button.",
      control: "text",
      defaultValue: "Button",
      type: { name: "string", required: true },
      table: {
        category: "Button contents",
        type: { summary: "string" },
      },
    },
    isCTA: {
      description: "Makes the button more distinct for calls to action.",
      control: "boolean",
      defaultValue: false,
      type: { name: "boolean", required: false },
      table: {
        category: "Modifier",
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    isLarge: {
      description: "Makes button larger.",
      control: "boolean",
      defaultValue: false,
      type: { name: "boolean", required: false },
      table: {
        category: "Modifier",
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    isDisabled: {
      description: "Disables button.",
      control: "boolean",
      defaultValue: false,
      type: { name: "boolean", required: false },
      table: {
        category: "Modifier",
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    iconId: {
      description: "Displays an icon.",
      control: { type: "select", options: [false, ...Object.keys(iconData)] },
      defaultValue: false,
      type: { name: "enum", required: false },
      table: {
        category: "Button contents",
        type: {
          summary: `false | "${Object.keys(iconData).join('" | "')}"`,
        },
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Buttons are clickable items used to perform an action.",
      },
      source: {
        language: "css",
        code: "<Button {...$$props}>{label}</Button>",
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
  href: "/",
  on: {
    click: (e) => {
      e.preventDefault();
      action("clicked")(e);
    },
  },
};
