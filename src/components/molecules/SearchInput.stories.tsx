import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import SearchInput, {SearchInputProps} from './SearchInput';

export default {
  title: 'Molecules/SearchInput',
  component: SearchInput,
} as Meta;

const Template: StoryFn<SearchInputProps> = args => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  onChange: (value: string) => console.log('Search value:', value),
  onClear: () => console.log('Clear search'),
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Search term',
  onChange: (value: string) => console.log('Search value:', value),
  onClear: () => console.log('Clear search'),
};
