import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

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

function loadStories() {
	require("../stories");
}

configure(loadStories, module);
