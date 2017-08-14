import "@storybook/addon-knobs/register";
import "storybook-readme/register";
import "@storybook/addon-options/register";

import "./styles.css";

const $ = require("jquery");
import SumoSelect from "sumoselect";

const map = {
	ReactiveSearch: [
		"search/NestedList",
		"search/ToggleList",
		"search/DynamicRangeSlider",
		"search/TagCloud",
		"search/RatingsFilter",
		"search/CategorySearch",
		"search/MultiLevelMenu",
		"search/ResultList",
		"search/ResultCard",
		"search/ViewSwitcher",
		"search/DataSearch",
		"search/TextField",
		"search/NumberBox",
		"search/SingleList",
		"search/MultiList",
		"search/SingleDropdownList",
		"search/MultiDropdownList",
		"search/SingleRange",
		"search/MultiRange",
		"search/SingleDropdownRange",
		"search/MultiDropdownRange",
		"search/ToggleButton",
		"search/DatePicker",
		"search/DateRange",
		"search/RangeSlider",
		"search/DataController"
	],
	ReactiveMaps: [
		"map/GeoDistanceSlider",
		"map/GeoDistanceDropdown",
		"map/PlacesSearch",
		"map/ReactiveMap",
		"map/SingleList",
		"map/MultiList",
		"map/SingleDropdownList",
		"map/MultiDropdownList",
		"map/SingleRange",
		"map/MultiRange",
		"map/SingleDropdownRange",
		"map/MultiDropdownRange",
		"map/DataSearch",
		"map/TextField",
		"map/ToggleButton",
		"map/RangeSlider",
		"map/NumberBox",
		"map/DatePicker",
		"map/DateRange",
		"map/DataController"
	]
}

const options = [
	{value: "ReactiveMaps", text: "ReactiveMaps"},
	{value: "ReactiveSearch", text: "ReactiveSearch"}
];

let filterBy = [];

$(document).ready(() => {
	let select = $("<select></select>")
		.attr("multiple", "multiple")
		.attr("name", "filter")
		.attr("class", "filter")
		.attr("placeholder", "Filter Stories");

	options.forEach(option => {
		$("<option />", option).appendTo(select);
	});

	let interval = setInterval(() => {
		if ($(".Pane.vertical.Pane1 > div > div > div > div > ul > li").length) {
			main();
		}
	}, 500);

	function main() {
		clearInterval(interval);
		let search = new URLSearchParams(window.location.search);
		filterBy = search.has("filterBy") ? search.get("filterBy").split(",") : [];

		$(".Pane.vertical.Pane1 > div > div > div:eq(1)").prepend(select);
		$(".filter").SumoSelect({captionFormatAllSelected: "All Selected"});

		const stories = Array.from($(".Pane.vertical.Pane1 > div > div > div > div > ul > li > a"));

		$(".filter").on("change", function() {
			filterBy = $(this).val();
			search.set("filterBy", filterBy.join());
			history.pushState({}, "", window.location.pathname + "?" + search.toString());

			$(".hide-me").removeClass("hide-me");
			$(".show-me").removeClass("show-me");

			filterStories(stories);
		});

		if (filterBy.length) {
			filterBy.forEach(category => {
				options.forEach(({value}, index) => {
					if (value === category) {
						$(".filter")[0].sumo.selectItem(index);
					}
				})
			})
		}

		$(".Pane.vertical.Pane1 > div > div > div > div > ul > li").on("click", () => {
			setTimeout(() => {
				search = new URLSearchParams(window.location.search);
				if (filterBy && filterBy.length) {
					search.set("filterBy", filterBy.join());
					history.pushState({}, "", window.location.pathname + "?" + search.toString());
				}
			}, 1500);
		});
	}
});

function filterStories(stories) {
	stories.forEach((story) => {
		const name = $(story)[0].innerText;

		filterBy.forEach(category => {
			if (map[category].indexOf(name) < 0) {
				$(story).parent().addClass("hide-me");
			} else {
				$(story).parent().addClass("show-me");
			}
		});
	});
}
