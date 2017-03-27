import React from "react";
import { storiesOf } from "@kadira/storybook";
import { withKnobs, text, boolean, number, array, select, object } from "@kadira/storybook-addon-knobs";
import withReadme from "storybook-readme/with-readme";

// import READMEs for each component
import SingleListReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/SingleList.md";
import MultiListReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/MultiList.md";
import SingleDropdownListReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/SingleDropdownList.md";
import MultiDropdownListReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/MultiDropdownList.md";
import NestedListReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/NestedList.md";
import SingleRangeReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/SingleRange.md";
import MultiRangeReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/MultiRange.md";
import SingleDropdownRangeReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/SingleDropdownRange.md";
import MultiDropdownRangeReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/MultiDropdownRange.md";
import RangeSliderReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/RangeSlider.md";
import NumberBoxReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/NumberBox.md";
import ToggleButtonReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/ToggleButton.md";
import DatePickerReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/DatePicker.md";
import DateRangeReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/DateRange.md";
import TextFieldReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/TextField.md";
import DataSearchReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/DataSearch.md";
import DataControllerReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/DataController.md";
import ReactiveElementReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/ReactiveElement.md";
import ReactiveListReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/ReactiveList.md";
import ReactivePaginatedListReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/components/ReactivePaginatedList.md";

// import reactivebase components
import SingleListDefault from "./reactivebase/SingleList.stories";
import MultiListDefault from "./reactivebase/MultiList.stories";
import SingleDropdownListDefault from "./reactivebase/SingleDropdownList.stories";
import MultiDropdownListDefault from "./reactivebase/MultiDropdownList.stories";
import SingleRangeDefault from "./reactivebase/SingleRange.stories";
import MultiRangeDefault from "./reactivebase/MultiRange.stories";
import SingleDropdownRangeDefault from "./reactivebase/SingleDropdownRange.stories";
import MultiDropdownRangeDefault from "./reactivebase/MultiDropdownRange.stories";
import RangeSliderDefault from "./reactivebase/RangeSlider.stories";
import NumberBoxDefault from "./reactivebase/NumberBox.stories";
import ToggleButtonDefault from "./reactivebase/ToggleButton.stories";
import DatePickerDefault from "./reactivebase/DatePicker.stories";
import DateRangeDefault from "./reactivebase/DateRange.stories";
import TextFieldDefault from "./reactivebase/TextField.stories";
import DataSearchDefault from "./reactivebase/DataSearch.stories";
import DataControllerDefault from "./reactivebase/DataController.stories";
import PoweredByDefault from "./reactivebase/PoweredBy.stories";
import ReactiveElement from "./reactivebase/ReactiveElement";
import ReactiveListDefault from "./reactivebase/ReactiveList.stories";
import ReactivePaginatedListDefault from "./reactivebase/ReactivePaginatedList.stories";

// import ReactiveSearch Components
import NestedListDefault from "./reactivesearch/NestedList.stories";
import ToggleListDefault from "./reactivesearch/ToggleList.stories";
import DynamicRangeSliderDefault from "./reactivesearch/DynamicRangeSlider.stories";
import TagCloudDefault from "./reactivesearch/TagCloud.stories";
import RatingsFilterDefault from "./reactivesearch/RatingsFilter.stories";
import CategorySearchDefault from "./reactivesearch/CategorySearch.stories";
import MultiLevelMenuDefault from "./reactivesearch/MultiLevelMenu.stories";
import ResultCardDefault from "./reactivesearch/ResultCard.stories";
import ResultListDefault from "./reactivesearch/ResultList.stories";
import ViewSwitcherDefault from "./reactivesearch/ViewSwitcher.stories";

const moment = require("moment");
require("materialize-css/dist/css/materialize.min.css");
require("@appbaseio/reactivesearch/dist/css/style.min.css");
require("./styles.css");

function removeFirstLine(str, number=1) {
	while (number--) {
		str = str.substring(str.indexOf("\n") + 1);
	}
	return str;
}

// Reactivebase components

storiesOf("SingleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListDefault showSearch placeholder="Search City" />
	)))
	.add("Without Search", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListDefault showSearch={false} placeholder="Search City" />
	)))
	.add("Default Selected", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListDefault showSearch defaultSelected="San Francisco" placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListDefault title="SingleList: Ascending Sort" showSearch defaultSelected="London" sortBy="asc" placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListDefault showSearch selectAllLabel="All Cities" placeholder="Search City" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListDefault
			title={text("title", "SingleList: City Filter")}
			size={number("size", 100)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			defaultSelected={text("defaultSelected", "San Francisco")}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			placeholder={text("placeholder", "Search City")}
			selectAllLabel={text("selectAllLabel", "All cities")}
		/>
	)));

storiesOf("MultiList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListDefault showSearch placeholder="Search City" />
	)))
	.add("Without Search", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListDefault showSearch={false} placeholder="Search City" />
	)))
	.add("Default Selected", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListDefault showSearch defaultSelected={["London", "Sydney"]} placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListDefault title="MultiList: Ascending Sort" showSearch defaultSelected={["London"]} sortBy="asc" placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListDefault showSearch selectAllLabel="All Cities" placeholder="Search City" />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListDefault
			title={text("title", "MultiList: City Filter")}
			size={number("size", 10)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			defaultSelected={array("defaultSelected", ["London", "Sydney"])}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			placeholder={text("placeholder", "Search City")}
			selectAllLabel={text("selectAllLabel", "All cities")}
		/>
	)));

storiesOf("SingleDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListDefault />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListDefault
			selectAllLabel="All Cities"
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListDefault
			selectAllLabel="All Cities"
			defaultSelected="London"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListDefault
			title={text("title", "SingleDropdownList")}
			size={number("size", 100)}
			showCount={boolean("showCount", true)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			selectAllLabel={text("selectAllLabel", "All Cities")}
			defaultSelected={text("defaultSelected", "London")}
			placeholder={text("placeholder", "Select a City")}
		/>
	)));

storiesOf("MultiDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListDefault />
	)))
	.add("With Placeholder", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListDefault
			placeholder="Select Cities"
		/>
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListDefault
			placeholder="Select Cities"
			selectAllLabel="All Cities"
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListDefault
			placeholder="Select Cities"
			size={100}
			sortBy="count"
			defaultSelected={["London", "Melbourne"]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListDefault
			title={text("title", "MultiDropdownList")}
			size={number("size", 100)}
			showCount={boolean("showCount", true)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			selectAllLabel={text("selectAllLabel", "All Cities")}
			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
			placeholder={text("placeholder", "Select Cities")}
		/>
	)));

storiesOf("SingleRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeDefault defaultSelected="Cheap" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeDefault
			title={text("title", "SingleRange: Price Filter")}
			defaultSelected={text("defaultSelected", "Cheap")}
		/>
	)));

storiesOf("MultiRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeDefault defaultSelected={["Cheap", "Moderate"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeDefault
			title={text("title", "MultiRange: Price Filter")}
			defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])}
		/>
	)));

storiesOf("SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeDefault defaultSelected="Cheap" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeDefault
			title={text("title", "SingleDropdownRange: Price Filter")}
			defaultSelected={text("defaultSelected", "Cheap")}
		/>
	)));

storiesOf("MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeDefault defaultSelected={["Cheap", "Moderate"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeDefault
			title={text("title", "MultiDropdownRange: Price Filter")}
			defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])}
		/>
	)));

storiesOf("RangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderDefault
			defaultSelected={{
				start: 0,
				end: 2
			}}
		/>
	)))
	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderDefault
			showHistogram={false}
		/>
	)))
	.add("With Range Labels", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderDefault
			defaultSelected={{
				start: 0,
				end: 2
			}}
			rangeLabels={{
				start: "Start",
				end: "End"
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderDefault
			title={text("title", "RangeSlider: Guest RSVPs")}
			range={object("range", {
				start: 0,
				end: 5
			})}
			stepValue={number("stepValue", 1)}
			defaultSelected={object("defaultSelected", {
				start: 0,
				end: 2
			})}
			rangeLabels={object("rangeLabels", {
				start: "Start",
				end: "End"
			})}
			showHistogram={boolean("showHistogram", true)}
		/>
	)));

storiesOf("NumberBox", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxDefault
			defaultSelected={3}
			data={{
				label: "Car Ratings",
				start: 1,
				end: 5
			}}
			labelPosition="left"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxDefault
			defaultSelected={number("defaultSelected", 3)}
			data={object("data", {
				start: 1,
				end: 5,
				label: "Car Ratings"
			})}
			labelPosition={select("labelPosition", { bottom: "bottom", top: "top", left: "left", right: "right" }, "right")}
		/>
	)));

storiesOf("ToggleButton", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonDefault defaultSelected={["Social"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonDefault
			title={text("title", "ToggleButton: Meetup Categories")}
			multiSelect={boolean("multiSelect", true)}
			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
		/>
	)));

storiesOf("TextField", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldDefault />
	)))
	.add("DefaultSelected", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldDefault defaultSelected="nissan" />
	)))
	.add("Playground", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldDefault
			title={text("title", "TextField: Car Search")}
			placeholder={text("placeholder", "Type a car name")}
			defaultSelected={text("defaultSelected", "nissan")}
		/>
	)));

storiesOf("DataSearch", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchDefault
			title="DataSearch"
			placeholder="Search Venue"
		/>
	)))
	.add("Without Autocomplete", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchDefault
			title="DataSearch"
			placeholder="Search Venue"
			autocomplete={false}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchDefault
			title={text("title", "DataSearch")}
			placeholder={text("placeholder", "Search Venue")}
			autocomplete={boolean("autocomplete", true)}
		/>
	)));


storiesOf("DataController", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerDefault />
	)))
	.add("With UI", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerDefault
			title="DataController"
			showUI={true}
			dataLabel={
				<p>★ A customizable UI widget ★</p>
			}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerDefault
			title={text("title", "DataController")}
			showUI={boolean("showUI", true)}
			dataLabel={text("dataLabel", "★  A customizable UI widget ★")}
			defaultSelected={text("defaultSelected", "default")}
			componentStyle={object("componentStyle", { "padding-bottom": "10px" })}
		/>
	)));


storiesOf("DatePicker", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerDefault />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerDefault
			numberOfMonths={2}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerDefault
			defaultSelected={moment().subtract(1, "day")}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerDefault
			allowAllDates={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerDefault
			extra={{
				withFullScreenPortal: true,
				showClearDate: true
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerDefault
			title={text("title", "Date Picker")}
			numberOfMonths={number("numberOfMonths", 1)}
			allowAllDates={boolean("allowAllDates", true)}
		/>
	)));

storiesOf("DateRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeDefault />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeDefault
			numberOfMonths={3}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeDefault
			defaultSelected={{
				start: moment().subtract(7, "days"),
				end: moment()
			}}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeDefault
			allowAllDates={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeDefault
			extra={{
				withFullScreenPortal: true,
				showClearDate: true
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeDefault
			title={text("title", "Date Range")}
			numberOfMonths={number("numberOfMonths", 2)}
			allowAllDates={boolean("allowAllDates", true)}
		/>
	)));

storiesOf("PoweredBy", module)
	.add("Basic", () => (
		<PoweredByDefault />
	));

storiesOf("ReactiveElement", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
		<ReactiveElement.Basic />
	)))
	.add("Stream", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
		<ReactiveElement.WithStream />
	)))
	.add("Theme", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
		<ReactiveElement.WithTheme />
	)))
	.add("Playground", withReadme(removeFirstLine(ReactiveElementReadme, 3), () => (
		<ReactiveElement.Basic
			title={text("title", "ReactiveElement")}
			placeholder={text("placeholder", "Select city from the list")}
			from={number("from", 0)}
			size={number("size", 5)}
			initialLoader="Loading results.."
			noResults="No results found! Try a different filter duh.."
			stream={boolean("stream", false)}
			showResultStats={boolean("showResultStats", true)}
		/>
	)));

storiesOf("ReactiveList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault onData={null} requestOnScroll stream={false} />
	)))
	.add("With Custom Markup", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault requestOnScroll stream={false} />
	)))
	.add("Without Title", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault title="" requestOnScroll stream={false} />
	)))
	.add("With Streaming Enabled", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault title="Meetups" stream />
	)))
	.add("With Sort Options", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault
			title="Meetups"
			requestOnScroll
			stream={false}
			sortOptions={[
				{
					label: "Most Recent RSVP",
					appbaseField: "mtime",
					sortBy: "desc"
				},
				{
					label: "Guests - High to Low",
					appbaseField: "guests",
					sortBy: "desc"
				},
				{
					label: "Guests - Low to High",
					appbaseField: "guests",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add("With Loader", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault
			title="Meetups"
			requestOnScroll
			stream={false}
			initialLoader="Loading results.."
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault
			title={text("title", "ReactiveList: Results")}
			from={number("from", 0)}
			size={number("size", 5)}
			initialLoader={text("initialLoader", "Loading results..")}
			noResults={text("noResults", "No results found!")}
			showResultStats={boolean("showResultStats", true)}
			requestOnScroll={boolean("requestOnScroll", true)}
			stream={boolean("stream", false)}
		/>
	)));

storiesOf("ReactivePaginatedList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactivePaginatedListReadme, 3), () => (
		<ReactivePaginatedListDefault
			onData={null}
		/>
	)))
	.add("With Custom Markup", withReadme(removeFirstLine(ReactivePaginatedListReadme, 3), () => (
		<ReactivePaginatedListDefault />
	)))
	.add("With Sort Options", withReadme(removeFirstLine(ReactivePaginatedListReadme, 3), () => (
		<ReactivePaginatedListDefault
			sortOptions={[
				{
					label: "Most Recent RSVP",
					appbaseField: "mtime",
					sortBy: "desc"
				},
				{
					label: "Guests - High to Low",
					appbaseField: "guests",
					sortBy: "desc"
				},
				{
					label: "Guests - Low to High",
					appbaseField: "guests",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add("With Loader", withReadme(removeFirstLine(ReactivePaginatedListReadme, 3), () => (
		<ReactivePaginatedListDefault
			title="Meetups"
			stream={false}
			initialLoader="Loading results.."
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(ReactivePaginatedListReadme, 3), () => (
		<ReactivePaginatedListDefault
			title={text("title", "ReactivePaginatedList: Playground")}
			from={number("from", 0)}
			size={number("size", 5)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", default: "default" }, "default")}
			paginationAt={select("paginationAt", { bottom: "bottom", top: "top", both: "both" }, "bottom")}
		/>
	)));


// Reactivesearch components

storiesOf("NestedList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			title=""
		/>
	)))
	.add("With Title", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			title={text("title", "Car Category")}
		/>
	)))
	.add("Default selection", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
		/>
	))).add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			title={text("title", "NestedList: Car Filter")}
			size={number("size", 100)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			placeholder={text("placeholder", "Search Cars")}
		/>
	)));

storiesOf("ToggleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault
			defaultSelected={array("defaultSelected", ["Social"])}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault
			title={text("title", "ToggleList: Meetup Categories")}
			multiSelect={boolean("multiSelect", true)}
			data={object("data", [
					{ label: "Social", value: "Social" },
					{ label: "Travel", value: "Travel" },
					{ label: "Outdoors", value: "Outdoors" }
			])}
			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
		/>
	)));

storiesOf("DynamicRangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault />
	)))
	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			showHistogram={boolean("showHistogram", false)}
		/>
	)))
	.add("With RangeLabels", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			rangeLabels={(min, max) => ({ start: min, end: max })}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			rangeLabels={(min, max) => ({ start: min, end: max })}
			defaultSelected={(min, max) => ({ start: min + 10, end: max - 10 })}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "DynamicRangeSlider: Guest RSVPs")}
			stepValue={number("stepValue", 1)}
			showHistogram={boolean("showHistogram", true)}
		/>
	)));

storiesOf("TagCloud", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault />
	)))
	.add("With multiSelect", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			multiSelect={boolean("multiSelect", true)}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			defaultSelected={text("defaultSelected", "Auckland")}
		/>
	)))
	.add("With multiSelect and defaultSelected", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			multiSelect={boolean("multiSelect", true)}
			defaultSelected={array("defaultSelected", ["Auckland", "Amsterdam"])}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			title={text("title", "TagCloud: City Filter")}
			size={number("size", 100)}
			multiSelect={boolean("multiSelect", "true")}
			defaultSelected={array("defaultSelected", ["Auckland"])}
			showCount={boolean("showCount", true)}
		/>
	)));

storiesOf("RatingsFilter", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<RatingsFilterDefault />
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<RatingsFilterDefault
			defaultSelected={object("defaultSelected", { start: 2, end: 5 })}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<RatingsFilterDefault
			title={text("title", "RatingsFilter")}
			data={object("data", [{ start: 4, end: 5, label: "4 stars and up" },
				{ start: 3, end: 5, label: "3 stars and up" },
				{ start: 2, end: 5, label: "2 stars and up" },
				{ start: 1, end: 5, label: "> 1 stars" }])}
			defaultSelected={object("defaultSelected", { start: 2, end: 5 })}
		/>
	)));

storiesOf("CategorySearch", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			placeholder="Search Car"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title={text("title", "CategorySearch")}
			appbaseField={array("appbaseField", ["name"])}
			categoryField={text("categoryField", "brand.raw")}
			defaultSelected={text("defaultSelected", "")}
			placeholder={text("placeholder", "Search Car")}
		/>
	)));

storiesOf("MultiLevelMenu", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(NestedListReadme), () => (
		<MultiLevelMenuDefault />
	)))
	.add("With Blacklist", withReadme(removeFirstLine(NestedListReadme), () => (
		<MultiLevelMenuDefault
			blacklist={array("blacklist", ["golf", "unknown"])}
		/>
	)))
	.add("With maxCategories", withReadme(removeFirstLine(NestedListReadme), () => (
		<MultiLevelMenuDefault
			maxCategories={number("maxCategories", 6)}
		/>
	)))
	.add("With maxItems", withReadme(removeFirstLine(NestedListReadme), () => (
		<MultiLevelMenuDefault
			maxItems={number("maxItems", 3)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
		<MultiLevelMenuDefault
			data={object("data", [
				{ label: "Volkswagen", value: "volkswagen" },
				{ label: "BMW", value: "bmw" }
			])}
			blacklist={array("blacklist", ["golf", "unknown"])}
			maxCategories={number("maxCategories", 10)}
			maxItems={number("maxItems", 4)}
		/>
	)));

storiesOf("ResultCard", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault />
	)))
	.add("With Pagination", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault  showPagination />
	)));

storiesOf("ResultList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault />
	)))
	.add("With Pagination", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault showPagination />
	)));

storiesOf("ViewSwitcher", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ViewSwitcherDefault />
	)));
