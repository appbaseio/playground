import "@kadira/storybook-addon-knobs/register";
import "storybook-readme/register";
import "@kadira/storybook-addon-options/register";
import "./styles.css";

const $ = require("jquery");
import SumoSelect from "sumoselect";

const map = {
	ReactiveSearch: [
		"NestedList",
		"ToggleList",
		"DynamicRangeSlider",
		"TagCloud",
		"RatingsFilter",
		"CategorySearch",
		"MultiLevelMenu",
		"ResultList",
		"ResultCard",
		"ViewSwitcher"
	],
	ReactiveMap: [],
	ReactiveBase: [
		"SingleList",
		"MultiList",
		"SingleDropdownList",
		"MultiDropdownList",
		"SingleRange",
		"MultiRange",
		"SingleDropdownRange",
		"MultiDropdownRange",
		"RangeSlider",
		"NumberBox",
		"ToggleButton",
		"TextField",
		"DataSearch",
		"DataController",
		"DatePicker",
		"DateRange",
		"PoweredBy",
		"ReactiveElement",
		"ReactiveList",
		"ReactivePaginatedList"
	]
}

const options = [
	{value: "ReactiveBase", text: "ReactiveBase"},
	{value: "ReactiveMap", text: "ReactiveMap"},
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

	setTimeout(() => {
		const search = new URLSearchParams(window.location.search);
		filterBy = search.has("filterBy") ? search.get("filterBy").split(",") : [];

		$(".Pane.vertical.Pane1 > div > div > div input").replaceWith(select);
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
	}, 1000);
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
