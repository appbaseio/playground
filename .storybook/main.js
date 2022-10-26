module.exports = {
  stories: ["../stories/index.js"],
  addons: [
    "@storybook/addon-knobs",
    "storybook-readme",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
  ],
  reactOptions: { legacyRootApi: false },
};
