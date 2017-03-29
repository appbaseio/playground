import { configure } from "@kadira/storybook";
import { setOptions } from "@kadira/storybook-addon-options";

setOptions({
	name: "appbase.io",
	url: "https://github.com/appbaseio/playground",
	goFullScreen: false,
	showLeftPanel: true,
	showDownPanel: true,
	showSearchBox: false,
	downPanelInRight: false,
});

function loadStories() {
	require("../stories");
}

configure(loadStories, module);
