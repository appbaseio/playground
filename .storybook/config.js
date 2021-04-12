import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import { create } from '@storybook/theming';
import { addReadme } from 'storybook-readme';

addParameters({
  options: {
    panelPosition: 'right',
    theme: create({
      base: 'light',
      brandTitle: 'ReactiveSearch',
      brandUrl: 'https://github.com/appbaseio/playground',
    }),
  },
});

addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(withA11y);

function loadStories() {
	require("../stories");
}

configure(loadStories, module);
