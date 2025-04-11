import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import CardImage, {CardImageProps} from './CardImage';

export default {
  title: 'Atoms/CardImage',
  component: CardImage,
} as Meta;

const Template: StoryFn<CardImageProps> = args => <CardImage {...args} />;

export const Portrait = Template.bind({});
Portrait.args = {
  src: 'https://image.tmdb.org/t/p/w500/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
  alt: 'Movie poster',
  aspectRatio: 'portrait',
};

export const Landscape = Template.bind({});
Landscape.args = {
  src: 'https://image.tmdb.org/t/p/w500/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
  alt: 'Movie backdrop',
  aspectRatio: 'landscape',
};
