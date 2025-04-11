import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import TextWithCategories, {TextWithCategoriesProps} from './TextWithCategories';

export default {
  title: 'Atoms/TextWithCategories',
  component: TextWithCategories,
} as Meta;

const Template: StoryFn<TextWithCategoriesProps> = args => <TextWithCategories {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: ['Action', 'Adventure', 'Sci-Fi'],
};

export const ManyCategories = Template.bind({});
ManyCategories.args = {
  categories: ['Action', 'Adventure', 'Sci-Fi', 'Drama', 'Thriller', 'Romance'],
};
