import React from 'react';
import StyledComponent from './StyledComponent';

export default {
  component: StyledComponent,
  title: 'Styled Component',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <StyledComponent />;
};
