import "./styles.css";
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "ReactiveSearch",
  brandUrl: "https://github.com/appbaseio/playground",
});

addons.setConfig({
  panelPosition: "bottom",
  theme,
});
