import LinkView from "./views/LinkView.svelte";
import { action } from "@storybook/addon-actions";
import "./utils.css";
import iconData from "../lib/iconData";

export default {
  title: "Link",
  component: LinkView,
  argTypes: {
    content: {
      description: "The contents displayed in the link.",
      control: "text",
      defaultValue: "Link",
      type: { name: "string", required: true },
      table: {
        category: "Link contents",
        type: { summary: "string" },
      },
    },
    href: {
      description: "The URL that the hyperlink points to.",
      control: "text",
      defaultValue: "/",
      type: { name: "string", required: true },
      table: {
        category: "Property",
        type: { summary: "string" },
      },
    },
    iconId: {
      description: "Displays an icon.",
      control: { type: "select", options: [false, ...Object.keys(iconData)] },
      defaultValue: false,
      type: { name: "enum", required: false },
      table: {
        category: "Link contents",
        type: {
          summary: `false | "${Object.keys(iconData).join('" | "')}"`,
        },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = ({ on, ...args }) => ({
  Component: LinkView,
  props: args,
  on: {
    click: (e) => {
      e.preventDefault();
      action("clicked")(e);
    },
    ...on,
  },
});

export const Default = Template.bind({});
Default.args = {
  href: "/",
};
Default.parameters = {
  docs: {
    source: {
      code: '<Link href="/" on:click={action("clicked")}>Link</Link>',
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  iconId: "back-chevron",
};

Icon.parameters = {
  docs: {
    source: {
      code:
        '<Link href="/" iconId="back-chevron" on:click={action("clicked")}>Link</Link>',
    },
  },
};
