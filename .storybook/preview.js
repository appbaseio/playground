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
