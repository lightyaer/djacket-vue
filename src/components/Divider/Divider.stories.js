import Divider from "./Divider.vue";

export default {
  title: "Display/Divider",
  component: Divider,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Divider },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Divider v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};