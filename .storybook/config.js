import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from '@storybook/addon-info';

setOptions({
	name: "appbase.io",
	url: "https://github.com/appbaseio/playground",
	goFullScreen: false,
	showLeftPanel: true,
	showDownPanel: true,
	showSearchBox: false,
	downPanelInRight: false,
	sortStoriesByKind: true,
});

setDefaults({
	header: false, // Toggles display of header with component name and description
	inline: false, // Displays info inline vs click button to view
	source: false, // Displays the source of story Component
	propTables: [/* Components used in story */], // displays Prop Tables with this components
});

function loadStories() {
	require("../stories");
}

configure(loadStories, module);
