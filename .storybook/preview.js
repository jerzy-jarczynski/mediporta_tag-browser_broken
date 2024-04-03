import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
      manual: false,
    },
  },
  decorators: [
    (storyFn, context) => withConsole()(storyFn)(context),
  ],
};

preview.initializationPromise = new Promise((resolve) => {
  setTimeout(resolve, 100);
});

export default preview;
