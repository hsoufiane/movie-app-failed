import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: StoryFn = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  className: 'w-full px-4 py-2 border border-gray-300 rounded-md',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  placeholder: 'Search...',
  className: 'w-full px-4 py-2 pl-10 border border-gray-300 rounded-md',
};
