import Heading from './Heading.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    classNames: {
      control: {
        type: 'select',
      },
      options: ['heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

export const Default = {
  args: {
    level: 1,
    text: 'the brown fox jumps over the lazy dog',
    classNames: 'heading-1'
  },
};
export const H1 = {
  args: {
    ...Default.args,
    level: 1,
  },
};

export const H2 = {
  args: {
    ...Default.args,
    level: 2,
    classNames: 'heading-2'
  },
};
