import React from 'react';
import NonStyledComponent from './NonStyledComponent';

export default {
  component: NonStyledComponent,
  title: 'Non Styled Component',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <NonStyledComponent />;
};
