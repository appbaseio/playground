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
import GeoDistanceSliderReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/map-components/GeoDistanceSlider.md";
import GeoDistanceDropdownReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/map-components/GeoDistanceDropdown.md";
import PlacesSearchReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/map-components/PlacesSearch.md";
import ReactiveMapReadme from "@appbaseio/reactivemaps-manual/docs/v1.0.0/map-components/ReactiveMap.md";

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

// import reactivemaps components
import GeoDistanceSliderDefault from "./reactivemaps/GeoDistanceSlider.stories";
import GeoDistanceDropdownDefault from "./reactivemaps/GeoDistanceDropdown.stories";
import PlacesSearchDefault from "./reactivemaps/PlacesSearch.stories";
import ReactiveMapDefault from "./reactivemaps/ReactiveMap.stories";

import SingleListMapDefault from "./reactivemaps/SingleList.stories";
import MultiListMapDefault from "./reactivemaps/MultiList.stories";
import SingleDropdownListMapDefault from "./reactivemaps/SingleDropdownList.stories";
import MultiDropdownListMapDefault from "./reactivemaps/MultiDropdownList.stories";
import SingleRangeMapDefault from "./reactivemaps/SingleRange.stories";
import MultiRangeMapDefault from "./reactivemaps/MultiRange.stories";
import SingleDropdownRangeMapDefault from "./reactivemaps/SingleDropdownRange.stories";
import MultiDropdownRangeMapDefault from "./reactivemaps/MultiDropdownRange.stories";
import DataSearchMapDefault from "./reactivemaps/DataSearch.stories";
import TextFieldMapDefault from "./reactivemaps/TextField.stories";
import ToggleButtonMapDefault from "./reactivemaps/ToggleButton.stories";
import NestedListMapDefault from "./reactivemaps/NestedList.stories";
import RangeSliderMapDefault from "./reactivemaps/RangeSlider.stories";
import NumberBoxMapDefault from "./reactivemaps/NumberBox.stories";
import DatePickerMapDefault from "./reactivemaps/DatePicker.stories";
import DateRangeMapDefault from "./reactivemaps/DateRange.stories";

// import reactivesearch components
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

import DataSearchRSDefault from "./reactivesearch/DataSearch.stories";
import TextFieldRSDefault from "./reactivesearch/TextField.stories";
import NumberBoxRSDefault from "./reactivesearch/NumberBox.stories";
import SingleListRSDefault from "./reactivesearch/SingleList.stories";
import MultiListRSDefault from "./reactivesearch/MultiList.stories";
import SingleDropdownListRSDefault from "./reactivesearch/SingleDropdownList.stories";
import MultiDropdownListRSDefault from "./reactivesearch/MultiDropdownList.stories";


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

// Reactivemaps components

storiesOf("GeoDistanceSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			placeholder="Search Location"
		/>
	)))
	.add("With Title", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			title="Geo Distance Search"
			placeholder="Search Location"
		/>
	)))
	.add("With Range Labels", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			title="Geo Distance Search"
			placeholder="Search Location"
			rangeLabels={{
				start: "Start",
				end: "End"
			}}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				location: "London",
				distance: 5
			}}
			unit="mi"
			title="Geo Distance Search"
			placeholder="Search Location"
			rangeLabels={{
				start: "Start",
				end: "End"
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={object("defaultSelected", {
				location: "London",
				distance: 5
			})}
			stepValue={number("stepValue", 1)}
			unit={text("unit", "mi")}
			title={text("title", "Geo Distance Slider")}
			placeholder={text("placeholder", "Search Location")}
			range={object("range", {
				start: 0,
				end: 50
			})}
			rangeLabels={object("rangeLabels", {
				start: "Start",
				end: "End"
			})}
		/>
	)));

storiesOf("GeoDistanceDropdown", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
			[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
			}
			// distanceOptions={[20,50,100,150]}
			placeholder="Search Location"
		/>
	)))
	.add("With Title", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
			[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
			}
			// distanceOptions={[20,50,100,150]}
			title="Geo Distance Search"
			placeholder="Search Location"
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
			[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
			}
			defaultSelected={{
				label: "Less than 100 miles",
				location: "London"
			}}
			title="Geo Distance Search"
			placeholder="Search Location"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			data={
			[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
			}
			unit={select("unit", { mi: "mi", miles: "miles", yd: "yd", yards: "yards", ft: "ft", feet: "feet", in: "in", inch: "inch", km: "km", kilometers: "kilometers", m: "m", meters: "meters", cm: "cm", centimeters: "centimeters", mm: "mm", millimeters: "millimeters", NM: "NM", nmi: "nmi", nauticalmiles: "nauticalmiles" }, "mi")}
			title={text("title", "Geo Distance Slider")}
			defaultSelected={object("defaultSelected", {
				label: "Less than 100 miles",
				location: "London"
			})}
			placeholder={text("placeholder", "Search Location")}
		/>
	)));

storiesOf("PlacesSearch", module)
	.addDecorator(withKnobs)
	.add("Basic - Direction Demo", withReadme(removeFirstLine(PlacesSearchReadme), () => (
		<PlacesSearchDefault />
	)));

storiesOf("ReactiveMap", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveMapReadme, 3), () => (
		<ReactiveMapDefault />
	)))
	.add("With Title", withReadme(removeFirstLine(ReactiveMapReadme, 3), () => (
		<ReactiveMapDefault
			title="Reactive Maps"
		/>
	)))
	.add("With Popover onClick", withReadme(removeFirstLine(ReactiveMapReadme, 3), () => (
		<ReactiveMapDefault
			title="Reactive Maps"
			showPopoverOn="click"
		/>
	)))
	.add("With Popover onMouseOver", withReadme(removeFirstLine(ReactiveMapReadme), () => (
		<ReactiveMapDefault
			title="Reactive Maps"
			showPopoverOn="mouseover"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(ReactiveMapReadme), () => (
		<ReactiveMapDefault
			title={text("title", "Reactive maps")}
			showPopoverOn={select("showPopoverOn", { click: "click", mouseover: "mouseover" }, "click")}
			setMarkerCluster={boolean("setMarkerCluster", true)}
			autoCenter={boolean("autoCenter", true)}
			showSearchAsMove={boolean("showSearchAsMove", true)}
			setSearchAsMove={boolean("setSearchAsMove", false)}
			showMapStyles={boolean("showMapStyles", false)}
			defaultMapStyle={select("defaultMapStyle", { Standard: "Standard", "Blue Essence": "Blue Essence", "Blue Water": "Blue Water", "Flat Map": "Flat Map", "Light Monochrome": "Light Monochrome", "Midnight Commander": "Midnight Commander", "Unsaturated Browns": "Unsaturated Browns" }, "Standard")}
			size={number("size", 100)}
			streamTTL={number("streamTTL", 5)}
			streamAutoCenter={boolean("streamAutoCenter", true)}
			autoMarkerPosition={boolean("autoMarkerPosition", false)}
			showMarkers={boolean("showMarkers", true)}
			autoMapRender={boolean("autoMapRender", true)}
			defaultZoom={number("defaultZoom", 13)}
			defaultCenter={object("defaultCenter", {
				lat: 37.74,
				lon: -122.45
			})}
			defaultMarkerImage={text("defaultMarkerImage", "https://cdn.rawgit.com/appbaseio/reactivemaps/6500c73a/dist/images/historic-pin.png")}
			streamMarkerImage={text("streamMarkerImage", "https://cdn.rawgit.com/appbaseio/reactivemaps/6500c73a/dist/images/stream-pin.png")}
		/>
	)));

storiesOf("m/SingleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" />
	)))
	.add("Without Search", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch={false} placeholder="Search City" />
	)))
	.add("Default Selected", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch defaultSelected="San Francisco" placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault title="SingleList: Ascending Sort" showSearch defaultSelected="London" sortBy="asc" placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch selectAllLabel="All Cities" placeholder="Search City" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault
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

storiesOf("m/MultiList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch placeholder="Search City" />
	)))
	.add("Without Search", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch={false} placeholder="Search City" />
	)))
	.add("Default Selected", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch defaultSelected={["London", "Sydney"]} placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault title="MultiList: Ascending Sort" showSearch defaultSelected={["London"]} sortBy="asc" placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch selectAllLabel="All Cities" placeholder="Search City" />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault
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

storiesOf("m/SingleDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault
			selectAllLabel="All Cities"
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault
			selectAllLabel="All Cities"
			defaultSelected="London"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault
			title={text("title", "SingleDropdownList")}
			size={number("size", 100)}
			showCount={boolean("showCount", true)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			selectAllLabel={text("selectAllLabel", "All Cities")}
			defaultSelected={text("defaultSelected", "London")}
			placeholder={text("placeholder", "Select a City")}
		/>
	)));

storiesOf("m/MultiDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault />
	)))
	.add("With Placeholder", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault
			placeholder="Select Cities"
		/>
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault
			placeholder="Select Cities"
			selectAllLabel="All Cities"
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault
			placeholder="Select Cities"
			size={100}
			sortBy="count"
			defaultSelected={["London", "Melbourne"]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault
			title={text("title", "MultiDropdownList")}
			size={number("size", 100)}
			showCount={boolean("showCount", true)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			selectAllLabel={text("selectAllLabel", "All Cities")}
			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
			placeholder={text("placeholder", "Select Cities")}
		/>
	)));

storiesOf("m/SingleRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault defaultSelected="Strong" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault
			title={text("title", "SingleRange: Earthquake Magnitude")}
			defaultSelected={text("defaultSelected", "Strong")}
		/>
	)));

storiesOf("m/MultiRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault defaultSelected={["Moderate", "Strong"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault
			title={text("title", "MultiRange: Earthquake Magnitude")}
			defaultSelected={array("defaultSelected", ["Moderate", "Strong"])}
			showTags={boolean("showTags", "false")}
		/>
	)));

storiesOf("m/SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault defaultSelected="Strong" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault
			title={text("title", "SingleDropdownRange: Earthquake Magnitude")}
			defaultSelected={text("defaultSelected", "Strong")}
		/>
	)));

storiesOf("m/MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault defaultSelected={["Moderate", "Strong"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault
			title={text("title", "MultiDropdownRange: Earthquake Magnitude")}
			defaultSelected={array("defaultSelected", ["Moderate", "Strong"])}
		/>
	)));

storiesOf("m/DataSearch", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Venue"
		/>
	)))
	.add("Without Autocomplete", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Venue"
			autocomplete={false}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title={text("title", "DataSearch: Meetups")}
			placeholder={text("placeholder", "Search Venue")}
			autocomplete={boolean("autocomplete", true)}
		/>
	)));

storiesOf("m/TextField", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault />
	)))
	.add("DefaultSelected", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault defaultSelected="London" />
	)))
	.add("Playground", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault
			title={text("title", "DataSearch: Meetups")}
			placeholder={text("placeholder", "Search Venue")}
			defaultSelected={text("defaultSelected", "London")}
		/>
	)));

storiesOf("m/ToggleButton", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault defaultSelected={["Social"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault
			title={text("title", "ToggleButton: Meetup Categories")}
			multiSelect={boolean("multiSelect", true)}
			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
		/>
	)));

storiesOf("m/NestedList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListMapDefault />
	)))
	.add("With Title", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListMapDefault
			title={text("title", "City-wise Meetups")}
		/>
	)))
	.add("Default selection", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListMapDefault
			defaultSelected={["London", "Travel"]}
		/>
	))).add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListMapDefault
			title={text("title", "NestedList: City-wise Meetup Topics")}
			size={number("size", 100)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			defaultSelected={array("defaultSelected", ["London", "Travel"])}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			placeholder={text("placeholder", "Search Topics")}
		/>
	)));

storiesOf("m/RangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault
			defaultSelected={{
				start: 0,
				end: 2
			}}
		/>
	)))
	.add("With Range Labels", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault
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
		<RangeSliderMapDefault
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
		/>
	)));

storiesOf("m/NumberBox", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxMapDefault
			defaultSelected={3}
			data={{
				label: "Guests",
				start: 1,
				end: 5
			}}
			labelPosition="left"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxMapDefault
			defaultSelected={number("defaultSelected", 3)}
			data={object("data", {
				start: 1,
				end: 5,
				label: "Guests"
			})}
			labelPosition={select("labelPosition", { bottom: "bottom", top: "top", left: "left", right: "right" }, "right")}
		/>
	)));


storiesOf("m/DatePicker", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			numberOfMonths={2}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			defaultSelected={moment().subtract(1, "day")}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			allowAllDates={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			extra={{
				withFullScreenPortal: true,
				showClearDate: true
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			title={text("title", "Date Picker")}
			numberOfMonths={number("numberOfMonths", 1)}
			allowAllDates={boolean("allowAllDates", true)}
		/>
	)));

storiesOf("m/DateRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			numberOfMonths={3}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			defaultSelected={{
				start: moment().subtract(7, "days"),
				end: moment()
			}}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			allowAllDates={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			extra={{
				withFullScreenPortal: true,
				showClearDate: true
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			title={text("title", "Date Range")}
			numberOfMonths={number("numberOfMonths", 2)}
			allowAllDates={boolean("allowAllDates", true)}
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

storiesOf("s/DataSearch", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Venue"
		/>
	)))
	.add("Without Autocomplete", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Venue"
			autocomplete={false}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title={text("title", "DataSearch: Meetups")}
			placeholder={text("placeholder", "Search Venue")}
			autocomplete={boolean("autocomplete", true)}
		/>
	)));

storiesOf("s/TextField", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault />
	)))
	.add("DefaultSelected", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault defaultSelected="nissan" />
	)))
	.add("Playground", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault
			title={text("title", "TextField: Car Search")}
			placeholder={text("placeholder", "Type a car name")}
			defaultSelected={text("defaultSelected", "nissan")}
		/>
	)));

storiesOf("s/NumberBox", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			defaultSelected={2}
			data={{
				start: 1,
				end: 16
			}}
			labelPosition="left"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			defaultSelected={number("defaultSelected", 3)}
			data={object("data", {
				start: 1,
				end: 16,
				label: "Guests"
			})}
			labelPosition={select("labelPosition", { bottom: "bottom", top: "top", left: "left", right: "right" }, "right")}
		/>
	)));

storiesOf("s/SingleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch placeholder="Search City" />
	)))
	.add("Without Search", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch={false} placeholder="Search City" />
	)))
	.add("Default Selected", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch defaultSelected="San Francisco" placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault title="SingleList: Ascending Sort" showSearch defaultSelected="London" sortBy="asc" placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch selectAllLabel="All Cities" placeholder="Search City" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault
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

storiesOf("s/MultiList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" />
	)))
	.add("Without Search", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch={false} placeholder="Search City" />
	)))
	.add("Default Selected", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch defaultSelected={["London", "Sydney"]} placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault title="MultiList: Ascending Sort" showSearch defaultSelected={["London"]} sortBy="asc" placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch selectAllLabel="All Cities" placeholder="Search City" />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault
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

storiesOf("s/SingleDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault
			selectAllLabel="All Cities"
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault
			selectAllLabel="All Cities"
			defaultSelected="London"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault
			title={text("title", "SingleDropdownList")}
			size={number("size", 100)}
			showCount={boolean("showCount", true)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			selectAllLabel={text("selectAllLabel", "All Cities")}
			defaultSelected={text("defaultSelected", "London")}
			placeholder={text("placeholder", "Select a City")}
		/>
	)));

storiesOf("s/MultiDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault />
	)))
	.add("With Placeholder", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			placeholder="Select Cities"
		/>
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			placeholder="Select Cities"
			selectAllLabel="All Cities"
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			placeholder="Select Cities"
			size={100}
			sortBy="count"
			defaultSelected={["London", "Melbourne"]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			title={text("title", "MultiDropdownList")}
			size={number("size", 100)}
			showCount={boolean("showCount", true)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			selectAllLabel={text("selectAllLabel", "All Cities")}
			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
			placeholder={text("placeholder", "Select Cities")}
		/>
	)));
