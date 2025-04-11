import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import BackButton, {BackButtonProps} from './BackButton';

export default {
  title: 'Atoms/BackButton',
  component: BackButton,
} as Meta;

const Template: StoryFn<BackButtonProps> = args => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '/',
  children: 'Retour à la recherche',
};
