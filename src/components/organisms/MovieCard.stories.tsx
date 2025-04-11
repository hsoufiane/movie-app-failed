import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import MovieCard, {MovieCardProps} from './MovieCard';

export default {
  title: 'Organisms/MovieCard',
  component: MovieCard,
} as Meta;

const Template: StoryFn<MovieCardProps> = args => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    id: 1,
    title: 'Inception',
    posterUrl: 'https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
    voteAverage: 8.8,
    releaseYear: '2010',
  },
};

export const NoRating = Template.bind({});
NoRating.args = {
  movie: {
    id: 2,
    title: 'Upcoming Movie',
    posterUrl: 'https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
    voteAverage: 0,
    releaseYear: '2023',
  },
};
