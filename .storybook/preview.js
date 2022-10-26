import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import { addReadme } from "storybook-readme";

addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(withA11y);

function loadStories() {
  require("../stories");
}

configure(loadStories, module);
