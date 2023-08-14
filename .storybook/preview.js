import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { addReadme } from "storybook-readme";

addDecorator(withKnobs);
addDecorator(addReadme);
export const parameters = {
  a11y: {
    element: "#storybook-root",
    config: {},
    options: {},
    manual: true,
  },
};


/**
 * Workaround for knobs not updating. Look at github issue for more details.
 * https://github.com/storybookjs/addon-knobs/issues/19
 *
*/
let currentPath;
let timeout = 500;

if (window.parent) {
  const parentWindow = window.parent;
  parentWindow.setInterval(function () {
    const urlParams = new URLSearchParams(parentWindow.location.search);
    const path = urlParams.get('path');

    if (path && path !== currentPath) {
      currentPath = path;

      const knobButtons = parentWindow.document.querySelectorAll(
        '#panel-tab-content button',
      );

      if (knobButtons.length) {
        const resetButton = knobButtons[knobButtons.length - 1];
        resetButton.click();
      }else{
        currentPath = ""
      }
    }
  }, timeout);
}
