import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Header from './Header';

export default {
  title: 'Templates/Header',
  component: Header,
} as Meta;

const Template: StoryFn = args => <Header {...args} />;

export const Default = Template.bind({});
