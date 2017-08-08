import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, select, object } from "@storybook/addon-knobs";
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
import RangeSliderMapDefault from "./reactivemaps/RangeSlider.stories";
import NumberBoxMapDefault from "./reactivemaps/NumberBox.stories";
import DatePickerMapDefault from "./reactivemaps/DatePicker.stories";
import DateRangeMapDefault from "./reactivemaps/DateRange.stories";
import DataControllerMapDefault from "./reactivemaps/DataController.stories";

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
import SingleRangeRSDefault from "./reactivesearch/SingleRange.stories";
import MultiRangeRSDefault from "./reactivesearch/MultiRange.stories";
import SingleDropdownRangeRSDefault from "./reactivesearch/SingleDropdownRange.stories";
import MultiDropdownRangeRSDefault from "./reactivesearch/MultiDropdownRange.stories";
import ToggleButtonRSDefault from "./reactivesearch/ToggleButton.stories";
import DatePickerRSDefault from "./reactivesearch/DatePicker.stories";
import DateRangeRSDefault from "./reactivesearch/DateRange.stories";
import RangeSliderRSDefault from "./reactivesearch/RangeSlider.stories";
import DataControllerRSDefault from "./reactivesearch/DataController.stories";

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

// Reactivemaps components

storiesOf("map/GeoDistanceSlider", module)
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

storiesOf("map/GeoDistanceDropdown", module)
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

storiesOf("map/PlacesSearch", module)
	.addDecorator(withKnobs)
	.add("Basic - Direction Demo", withReadme(removeFirstLine(PlacesSearchReadme), () => (
		<PlacesSearchDefault />
	)));

storiesOf("map/ReactiveMap", module)
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

storiesOf("map/SingleList", module)
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

storiesOf("map/MultiList", module)
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

storiesOf("map/SingleDropdownList", module)
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

storiesOf("map/MultiDropdownList", module)
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

storiesOf("map/SingleRange", module)
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

storiesOf("map/MultiRange", module)
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

storiesOf("map/SingleDropdownRange", module)
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

storiesOf("map/MultiDropdownRange", module)
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

storiesOf("map/DataSearch", module)
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
	.add("With Weights", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Venue"
			weights={[1, 3]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title={text("title", "DataSearch: Meetups")}
			placeholder={text("placeholder", "Search Venue")}
			autocomplete={boolean("autocomplete", true)}
			weights={array("weights", [1,3])}
		/>
	)));

storiesOf("map/TextField", module)
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

storiesOf("map/ToggleButton", module)
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

storiesOf("map/RangeSlider", module)
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
	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderDefault
			showHistogram={false}
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
			showHistogram={boolean("showHistogram", true)}
		/>
	)));

storiesOf("map/NumberBox", module)
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


storiesOf("map/DatePicker", module)
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
			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
		/>
	)));

storiesOf("map/DateRange", module)
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
			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
		/>
	)));

storiesOf("map/DataController", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerMapDefault />
	)))
	.add("With UI", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerMapDefault
			title="DataController"
			showUI={true}
			dataLabel={
				<p>★ A customizable UI widget ★</p>
			}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerMapDefault
			title={text("title", "DataController")}
			showUI={boolean("showUI", true)}
			dataLabel={text("dataLabel", "★  A customizable UI widget ★")}
			defaultSelected={text("defaultSelected", "default")}
			componentStyle={object("componentStyle", { "paddingBottom": "10px" })}
		/>
	)));

// Reactivesearch components

storiesOf("search/NestedList", module)
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
	)))
	.add("Custom filter", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			filterLabel="Cars"
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
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

storiesOf("search/ToggleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault />
	)))
	.add("With Title", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault title={text("title", "Choose category")} />
	)))
	.add("With Custom filter label", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault filterLabel="Meetup Filter" />
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

storiesOf("search/DynamicRangeSlider", module)
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

storiesOf("search/TagCloud", module)
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

storiesOf("search/RatingsFilter", module)
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

storiesOf("search/CategorySearch", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			placeholder="Search Car"
		/>
	)))
	.add("With Weights", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			weights={[1, 3]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title={text("title", "CategorySearch")}
			appbaseField={array("appbaseField", ["name"])}
			categoryField={text("categoryField", "brand.raw")}
			defaultSelected={text("defaultSelected", "")}
			placeholder={text("placeholder", "Search Car")}
			weights={array("weights", [1,3])}
		/>
	)));

storiesOf("search/MultiLevelMenu", module)
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

storiesOf("search/ResultCard", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault />
	)))
	.add("With Pagination", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault  showPagination />
	)));

storiesOf("search/ResultList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault />
	)))
	.add("With Pagination", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault showPagination />
	)));

storiesOf("search/ViewSwitcher", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ViewSwitcherDefault />
	)));

storiesOf("search/DataSearch", module)
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
	.add("With Weights", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Venue"
			weights={[1, 3]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title={text("title", "DataSearch: Meetups")}
			placeholder={text("placeholder", "Search Venue")}
			autocomplete={boolean("autocomplete", true)}
			weights={array("weights", [1,3])}
		/>
	)));

storiesOf("search/TextField", module)
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

storiesOf("search/NumberBox", module)
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

storiesOf("search/SingleList", module)
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

storiesOf("search/MultiList", module)
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

storiesOf("search/SingleDropdownList", module)
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

storiesOf("search/MultiDropdownList", module)
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

storiesOf("search/SingleRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault defaultSelected="Cheap" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault
			title={text("title", "SingleRange: Price Filter")}
			defaultSelected={text("defaultSelected", "Cheap")}
		/>
	)));

storiesOf("search/MultiRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault defaultSelected={["Cheap", "Moderate"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault
			title={text("title", "MultiRange: Price Filter")}
			defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])}
		/>
	)));

storiesOf("search/SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault defaultSelected="Cheap" />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault
			title={text("title", "SingleDropdownRange: Price Filter")}
			defaultSelected={text("defaultSelected", "Cheap")}
		/>
	)));

storiesOf("search/MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault defaultSelected={["Cheap", "Moderate"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault
			title={text("title", "MultiDropdownRange: Price Filter")}
			defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])}
		/>
	)));

storiesOf("search/ToggleButton", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault defaultSelected={["Social"]} />
	)))
	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault
			title={text("title", "ToggleButton: Meetup Categories")}
			multiSelect={boolean("multiSelect", true)}
			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
		/>
	)));

storiesOf("search/DatePicker", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			numberOfMonths={2}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			defaultSelected={moment().subtract(1, "day")}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			allowAllDates={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			extra={{
				withFullScreenPortal: true,
				showClearDate: true
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			title={text("title", "Date Picker")}
			numberOfMonths={number("numberOfMonths", 1)}
			allowAllDates={boolean("allowAllDates", true)}
			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
		/>
	)));

storiesOf("search/DateRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			numberOfMonths={3}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			defaultSelected={{
				start: moment().subtract(7, "days"),
				end: moment()
			}}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			allowAllDates={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			extra={{
				withFullScreenPortal: true,
				showClearDate: true
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			title={text("title", "Date Range")}
			numberOfMonths={number("numberOfMonths", 2)}
			allowAllDates={boolean("allowAllDates", true)}
			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
		/>
	)));

storiesOf("search/RangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			defaultSelected={{
				start: 20,
				end: 70
			}}
		/>
	)))
	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			showHistogram={false}
		/>
	)))
	.add("With Range Labels", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			defaultSelected={{
				start: 10,
				end: 50
			}}
			rangeLabels={{
				start: "$10",
				end: "$250"
			}}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			title={text("title", "RangeSlider: Prices")}
			range={object("range", {
				start: 10,
				end: 250
			})}
			stepValue={number("stepValue", 10)}
			defaultSelected={object("defaultSelected", {
				start: 10,
				end: 50
			})}
			rangeLabels={object("rangeLabels", {
				start: "$10",
				end: "$250"
			})}
			showHistogram={boolean("showHistogram", true)}
		/>
	)));

storiesOf("search/DataController", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault />
	)))
	.add("With UI", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault
			title="DataController"
			showUI={true}
			dataLabel={
				<p>★ A customizable UI widget ★</p>
			}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault
			title={text("title", "DataController")}
			showUI={boolean("showUI", true)}
			dataLabel={text("dataLabel", "★  A customizable UI widget ★")}
			defaultSelected={text("defaultSelected", "default")}
			componentStyle={object("componentStyle", { "paddingBottom": "10px" })}
		/>
	)));
