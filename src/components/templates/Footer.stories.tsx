import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Templates/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn = args => <Footer {...args} />;

export const Default = Template.bind({});
