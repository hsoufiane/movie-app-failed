import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Icon, {IconProps} from './Icon';
import {FaSearch} from 'react-icons/fa';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

const Template: StoryFn<IconProps> = args => <Icon {...args} />;

export const Search = Template.bind({});
Search.args = {
  icon: FaSearch,
  className: 'text-gray-500 w-6 h-6',
};
