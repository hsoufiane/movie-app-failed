import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import StarIcon, {StarIconProps} from './StarIcon';

export default {
  title: 'Atoms/StarIcon',
  component: StarIcon,
} as Meta;

const Template: StoryFn<StarIconProps> = args => <StarIcon {...args} />;

export const WithoutVotes = Template.bind({});
WithoutVotes.args = {
  rating: 8.4,
};

export const WithVotes = Template.bind({});
WithVotes.args = {
  rating: 8.4,
  votes: 18,
};
