import React from "react";
import { storiesOf } from "@storybook/react";
import {
	withKnobs,
	text,
	boolean,
	number,
	array,
	select,
	object
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import withReadme from "storybook-readme/with-readme";
import { withInfo } from '@storybook/addon-info';

// import READMEs for each component
import SingleListReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleList.md";
import MultiListReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiList.md";
import SingleDataListReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleDataList.md";
import MultiDataListReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiDataList.md";
import SelectedFiltersReadme from "@appbaseio/reactive-manual/docs/v1/components/SelectedFilters.md";
import SingleDropdownListReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleDropdownList.md";
import MultiDropdownListReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiDropdownList.md";
// import NestedListReadme from "@appbaseio/reactive-manual/docs/v1/search-components/NestedList.md";
import NestedMultiListReadme from "@appbaseio/reactive-manual/docs/v1/search-components/NestedMultiList.md";
import SingleRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleRange.md";
import MultiRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiRange.md";
import SingleDropdownRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/SingleDropdownRange.md";
import MultiDropdownRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/MultiDropdownRange.md";
import RangeSliderReadme from "@appbaseio/reactive-manual/docs/v1/components/RangeSlider.md";
import DynamicRangeSliderReadme from "@appbaseio/reactive-manual/docs/v1/search-components/DynamicRangeSlider.md";
import TagCloudReadme from "@appbaseio/reactive-manual/docs/v1/search-components/TagCloud.md";
import RatingsFilterReadme from "@appbaseio/reactive-manual/docs/v1/search-components/RatingsFilter.md";
import CategorySearchReadme from "@appbaseio/reactive-manual/docs/v1/search-components/CategorySearch.md";
import ResultCardReadme from "@appbaseio/reactive-manual/docs/v1/search-components/ResultCard.md";
import ResultListReadme from "@appbaseio/reactive-manual/docs/v1/search-components/ResultList.md";
import NumberBoxReadme from "@appbaseio/reactive-manual/docs/v1/components/NumberBox.md";
import ToggleButtonReadme from "@appbaseio/reactive-manual/docs/v1/components/ToggleButton.md";
import DatePickerReadme from "@appbaseio/reactive-manual/docs/v1/components/DatePicker.md";
import DateRangeReadme from "@appbaseio/reactive-manual/docs/v1/components/DateRange.md";
import TextFieldReadme from "@appbaseio/reactive-manual/docs/v1/components/TextField.md";
import DataSearchReadme from "@appbaseio/reactive-manual/docs/v1/components/DataSearch.md";
import DataControllerReadme from "@appbaseio/reactive-manual/docs/v1/components/DataController.md";
import ReactiveListReadme from "@appbaseio/reactive-manual/docs/v1/components/ReactiveList.md";
// import GeoDistanceSliderReadme from "@appbaseio/reactive-manual/docs/v1/map-components/GeoDistanceSlider.md";
import GeoDistanceDropdownReadme from "@appbaseio/reactive-manual/docs/v1/map-components/GeoDistanceDropdown.md";
import ReactiveMapReadme from "@appbaseio/reactive-manual/docs/v1/map-components/ReactiveMap.md";

// import reactivemaps components
import GeoDistanceSliderDefault from "./reactivemaps/GeoDistanceSlider.stories";
import GeoDistanceDropdownDefault from "./reactivemaps/GeoDistanceDropdown.stories";
import ReactiveMapDefault from "./reactivemaps/ReactiveMap.stories";

// import reactivesearch components
// import NestedListDefault from "./reactivesearch/NestedList.stories";
// import NestedMultiListDefault from "./reactivesearch/NestedMultiList.stories";
import DynamicRangeSliderDefault from "./reactivesearch/DynamicRangeSlider.stories";
import TagCloudDefault from "./reactivesearch/TagCloud.stories";
import RatingsFilterDefault from "./reactivesearch/RatingsFilter.stories";
import CategorySearchDefault from "./reactivesearch/CategorySearch.stories";
import ResultCardDefault from "./reactivesearch/ResultCard.stories";
import ReactiveListDefault from "./reactivesearch/ReactiveList.stories";
import ResultListDefault from "./reactivesearch/ResultList.stories";
import SingleDataListRSDefault from "./reactivesearch/SingleDataList.stories";
import MultiDataListRSDefault from "./reactivesearch/MultiDataList.stories";
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
import RangeInputRSDefault from "./reactivesearch/RangeInput.stories";
import DataControllerRSDefault from "./reactivesearch/DataController.stories";
import ReactiveComponentStory from "./reactivesearch/ReactiveComponent.stories";
// import ReactiveElement from "./reactivesearch/ReactiveElement";

import DarkStory from "./reactivesearch/Dark.stories";
import DarkCard from "./reactivesearch/DarkCard.stories";
import TagCloudDark from "./reactivesearch/TagCloudDark.stories";
import DatePickerDark from "./reactivesearch/DatePickerDark.stories";
import DateRangeDark from "./reactivesearch/DateRangeDark.stories";

require("./styles.css");

function removeFirstLine(str, number = 1) {
	while (number--) {
		str = str.substring(str.indexOf("\n") + 1);
	}
	return str;
}

// The function removes lines starting with // which crashes storybook
const removeCommentsLine = str => str.replace(/^.*    \/\/.*$/gm, "");

storiesOf("Base components/DataController", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault showFilter={false} />
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				defaultSelected={text("defaultSelected", "Harry Potter")}
			/>
		))
	)
	.add(
		"With UI",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				title="DataController"
				showFilter={false}
			>
				<p>★ A customizable UI widget ★</p>
			</DataControllerRSDefault>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				defaultSelected={text("defaultSelected", "Harry Potter")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DataControllerReadme), () => (
			<DataControllerRSDefault
				title={text("title", "DataController")}
				visible={boolean("visible", true)}
				defaultSelected={text("defaultSelected", "Harry Potter")}
				componentStyle={object("componentStyle", { paddingBottom: "10px" })}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			>
				<p>{text("dataLabel", "★  A customizable UI widget ★")}</p>
			</DataControllerRSDefault>
		))
	);

storiesOf("Base components/ReactiveComponent", module)
	.addDecorator(withKnobs)
	.add(
		"A custom component",
		() => (
			<ReactiveComponentStory />
		)
	)

// Reactivemaps components

storiesOf("Map Components/GeoDistanceSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			placeholder="Search Location"
			showFilter={false}
		/>
	)))
	.add("With title", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			title={text("title", "Geo Distance Slider")}
			placeholder="Search Location"
			showFilter={false}
		/>
	)))
	.add("With placeholder", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			placeholder={text("placeholder", "Search Location")}
			showFilter={false}
		/>
	)))
	.add("With filter", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			placeholder="Search Location"
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "GeoDistance filter")}
		/>
	)))
	.add("With Range Labels", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
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
			showFilter={false}
		/>
	)))
	.add("With Country Restrictions", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			placeholder="Search Location"
			dataField="location"
			unit="mi"
			range={{
				start: 10,
				end: 300,
			}}
			countries={object("countries",["us"])}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={object("defaultSelected", {
				location: "London",
				distance: 5
			})}
			unit="mi"
			title="Geo Distance Search"
			placeholder="Search Location"
			rangeLabels={{
				start: "Start",
				end: "End"
			}}
			showFilter={false}
		/>
	)))
	.add("With autoLocation off", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			title={text("title", "Geo Distance Slider")}
			placeholder="Search Location"
			showFilter={false}
			autoLocation={boolean("autoLocation", false)}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			placeholder="Search Location"
			showFilter={false}
			URLParams={boolean("URLParams (not visible on storybook)", true)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={object("defaultSelected", {
				location: "London",
				distance: 5
			})}
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
			autoLocation={boolean("autoLocation", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "GeoDistance filter")}
			URLParams={boolean("URLParams (not visible on storybook)", true)}
			countries={object("countries",["uk"])}
		/>
	)));

storiesOf("Map Components/GeoDistanceDropdown", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			placeholder="Search Location"
			showFilter={false}
		/>
	)))
	.add("With title", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			title={text("title", "Geo Distance Slider")}
			placeholder="Search Location"
			showFilter={false}
		/>
	)))
	.add("With Country Restrictions", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			title= "Geo Distance Slider"
			placeholder="Search Location"
			showFilter={false}
			countries={object("countries",["us"])}
		/>
	)))
	.add("With placeholder", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			placeholder={text("placeholder", "Search Location")}
			placeholderDropdown={text("placeholderDropdown", "Select radius")}
			showFilter={false}
		/>
	)))
	.add("With filter", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			placeholder="Search Location"
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "GeoDistance filter")}
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			defaultSelected={object("defaultSelected", {
				label: "Under 100 miles",
				location: "London"
			})}
			title="Geo Distance Search"
			placeholder="Search Location"
			showFilter={false}
		/>
	)))
	.add("Without autoLocation", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			placeholder="Search Location"
			showFilter={false}
			autoLocation={boolean("autoLocation", false)}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			placeholder="Search Location"
			showFilter={false}
			URLParams={boolean("URLParams (not visible in storybook)", true)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			data={
				[{ distance: 100, label: "Under 100 miles" },
				{ distance: 200, label: "Under 200 miles" },
				{ distance: 500, label: "Under 500 miles" },
				{ distance: 1000, label: "Under 1000 miles" }]
			}
			unit={select("unit", { mi: "mi", miles: "miles", yd: "yd", yards: "yards", ft: "ft", feet: "feet", in: "in", inch: "inch", km: "km", kilometers: "kilometers", m: "m", meters: "meters", cm: "cm", centimeters: "centimeters", mm: "mm", millimeters: "millimeters", NM: "NM", nmi: "nmi", nauticalmiles: "nauticalmiles" }, "mi")}
				title={text("title", "Geo Distance Slider")}
				defaultSelected={object("defaultSelected", {
					label: "Under 100 miles",
					location: "London"
				})}
				placeholder={text("placeholder", "Search Location")}
				title={text("title", "Geo Distance Slider")}
				placeholderDropdown={text("placeholderDropdown", "Select radius")}
				autoLocation={boolean("autoLocation", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "GeoDistance filter")}
				URLParams={boolean("URLParams (not visible in storybook)", true)}
				countries={object("countries",["uk"])}
		/>
	)));

storiesOf("Map Components/ReactiveMap", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault />
	)))
	.add("With title", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			title={text("title", "Reactive maps")}
		/>
	)))
	.add("With showMarkerCluster", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			showMarkerCluster={boolean("showMarkerCluster", true)}
		/>
	)))
	.add("With autoCenter", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			autoCenter={boolean("autoCenter", true)}
		/>
	)))
	.add("With showSearchAsMove", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			showSearchAsMove={boolean("showSearchAsMove", true)}
		/>
	)))
	.add("With searchAsMove", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			searchAsMove={boolean("searchAsMove", false)}
		/>
	)))
	.add("With showMapStyles", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			showMapStyles={boolean("showMapStyles", false)}
		/>
	)))
	.add("With defaultMapStyle", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			defaultMapStyle={select("defaultMapStyle", { Standard: "Standard", "Blue Essence": "Blue Essence", "Blue Water": "Blue Water", "Flat Map": "Flat Map", "Light Monochrome": "Light Monochrome", "Midnight Commander": "Midnight Commander", "Unsaturated Browns": "Unsaturated Browns" }, "Standard")}
		/>
	)))
	.add("With size", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			size={number("size", 100)}
		/>
	)))
	.add("With defaultZoom", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			defaultZoom={number("defaultZoom", 13)}
		/>
	)))
	.add("With defaultCenter", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			defaultCenter={object("defaultCenter", {
				lat: 37.74,
				lng: -122.45
			})}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(removeCommentsLine(ReactiveMapReadme), 3), () => (
		<ReactiveMapDefault
			title={text("title", "Reactive maps")}
			showMarkerCluster={boolean("showMarkerCluster", true)}
			autoCenter={boolean("autoCenter", true)}
			showSearchAsMove={boolean("showSearchAsMove", true)}
			searchAsMove={boolean("searchAsMove", false)}
			showMapStyles={boolean("showMapStyles", false)}
			defaultMapStyle={select("defaultMapStyle", { Standard: "Standard", "Blue Essence": "Blue Essence", "Blue Water": "Blue Water", "Flat Map": "Flat Map", "Light Monochrome": "Light Monochrome", "Midnight Commander": "Midnight Commander", "Unsaturated Browns": "Unsaturated Browns" }, "Standard")}
			size={number("size", 100)}
			defaultZoom={number("defaultZoom", 13)}
			defaultCenter={object("defaultCenter", {
				lat: 37.74,
				lng: -122.45
			})}
		/>
	)));

// Reactivesearch components

// storiesOf("search/NestedList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title={text("title", "Car Category")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Default selection", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Custom filter", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title={text("title", "NestedList: Car Filter")}
// 			size={number("size", 100)}
// 			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showCount={boolean("showCount", true)}
// 			showSearch={boolean("showSearch", true)}
// 			placeholder={text("placeholder", "Search Cars")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 			URLParams={boolean("URLParams (not visible on storybook)", false)}
// 		/>
// 	)));

// storiesOf("search/NestedMultiList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title={text("title", "Car Category")}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Default selection", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Custom filter", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 		/>
// 	)))
// 	.add("With URLParams", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title=""
// 			showFilter={false}
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title={text("title", "NestedMultiList: Car Filter")}
// 			size={number("size", 100)}
// 			sortBy={select("sortBy", { asc: "asc", description: "desc", count: "count" }, "count")}
// 			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
// 			showCount={boolean("showCount", true)}
// 			showSearch={boolean("showSearch", true)}
// 			placeholder={text("placeholder", "Search Cars")}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "Cars")}
// 			URLParams={boolean("URLParams (not visible on storybook)", false)}
// 		/>
// 	)));

storiesOf("Range components/DynamicRangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "Books")}
			showFilter={false}
		/>
	)))
	.add("With labels", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "Books")}
			showFilter={false}
			rangeLabels={(min, max) => ({
				"start": min + " book",
				"end": max + " books"
			})}
		/>
	)))
	.add("With custom stepValue", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			stepValue={number("stepValue", 1)}
			showFilter={false}
		/>
	)))
	.add("Without histogram", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			showHistogram={boolean("showHistogram", false)}
			showFilter={false}
		/>
	)))
	.add("With filters", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			showFilter={boolean("showFilter", true)}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			defaultSelected={() => ({
				start: 500,
				end: 2000
			})}
			showFilter={false}
		/>
	)))
	.add("With onDrag", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			defaultSelected={() => ({
				start: 500,
				end: 2000
			})}
			onDrag={(selected, boundary) => {
				console.log(selected, boundary);
			}}
			showFilter={false}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			URLParams={boolean("URLParams (not visible on storybook)", true)}
			showFilter={false}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DynamicRangeSliderReadme), () => (
		<DynamicRangeSliderDefault
			title={text("title", "DynamicRangeSlider: Books")}
			showFilter={boolean("showFilter", true)}
			dataField={select("dataField", ["books_count", "original_publication_year", "ratings_count"], "books_count")}
			defaultSelected={(min, max) => ({
				start: min,
				end: max
			})}
			stepValue={number("stepValue", 1)}
			showHistogram={boolean("showHistogram", true)}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("Base components/TagCloud", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault title={text("title", "Cities")} showFilter={false} />
		))
	)
	.add(
		"With showCount",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				showCount={boolean("showCount", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With custom filter",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Cities filter")}
			/>
		))
	)
	.add(
		"With multiSelect",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				multiSelect={boolean("multiSelect", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				defaultSelected={text("defaultSelected", "Auckland")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With multiSelect on and defaultSelected",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				multiSelect
				defaultSelected={array("defaultSelected", ["Auckland", "Amsterdam"])}
			/>
		))
	)
	.add(
		"With multiSelect off and defaultSelected",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault defaultSelected={text("defaultSelected", "Auckland")} />
		))
	)
	.add(
		"With sortBy",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault showFilter={false} sortBy={select("sortBy", ["count", "asc", "desc"], "count")} />
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(TagCloudReadme), () => (
			<TagCloudDefault
				title={text("title", "TagCloud: City Filter")}
				dataField={select("dataField", ["group.group_city.raw", "group.group_topics.topic_name_raw.raw"], "group.group_city.raw")}
				size={number("size", 100)}
				multiSelect
				defaultSelected={array("defaultSelected", ["Auckland"])}
				showCount={boolean("showCount", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Cities filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/RatingsFilter", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault title={text("title", "Ratings")} showFilter={false} />
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault
			defaultSelected={object("defaultSelected", { start: 2, end: 5 })}
			showFilter={false}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(RatingsFilterReadme), () => (
		<RatingsFilterDefault
			title={text("title", "RatingsFilter")}
			data={object("data", [{ start: 4, end: 5, label: "4 stars and up" },
				{ start: 3, end: 5, label: "3 stars and up" },
				{ start: 2, end: 5, label: "2 stars and up" },
				{ start: 1, end: 5, label: "> 1 stars" }])}
			defaultSelected={object("defaultSelected", { start: 2, end: 5 })}
			filterLabel={text("filterLabel", "Ratings filter")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("Search components/CategorySearch", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				title={text("title", "Books")}
				placeholder="Search Books by Author"
				showFilter={false}
			/>
		))
	)
	.add(
		"without search icon",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Authors"
				showFilter={false}
				showIcon={boolean("showIcon", false)}
			/>
		))
	)
	.add(
		"with iconPosition",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Authors"
				showFilter={false}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"with custom icon",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Authors"
				showFilter={false}
				icon={<div>📚</div>}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"with showClear",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books..."
				showFilter={false}
				showClear={boolean('showClear', true)}
			/>
		))
	)
	.add(
		"with custom clearIcon",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books..."
				showFilter={false}
				showClear={boolean('showClear', true)}
				clearIcon={<div>❌</div>}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"with debounce",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				debounce={number("debounce", 300)}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				defaultSelected={text("defaultSelected", "Sherlock Holmes")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With defaultSuggestions",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				defaultSuggestions={[
					{ label: "Sherlock Holmes", value: "Sherlock Holmes" },
					{ label: "A Song of Ice and Fire", value: "A Song of Ice and Fire" }
				]}
				showFilter={false}
			/>
		))
	)
	.add(
		"With strictSelection",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				strictSelection={boolean("strictSelection", true)}
			/>
		))
	)
	.add(
		"With onSuggestion",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books..."
				onSuggestion={(suggestion) => ({label: <div>{suggestion._source.original_title} by<span style={{ color: 'dodgerblue', marginLeft: 5 }}>{suggestion._source.authors}</span></div>, value: suggestion._source.original_title})}
				showFilter={false}
			/>
		))
	)
	.add(
		"With renderSuggestions",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books..."
				renderSuggestions={({
					currentValue,
					categories,
					isOpen,
					getItemProps,
					highlightedIndex,
					suggestions,
					parsedSuggestions,
				}) => isOpen && Boolean(currentValue.length) && (
					<div style={{ position: 'absolute', padding: 10, color: '#424242', fontSize: '0.9rem', border: '1px solid #ddd', borderRadius: 4, marginTop: 10, width: '100%' }}>
						{
							<div>
								{parsedSuggestions.slice(0, 5).map((suggestion, index) => (
									<div style={{ padding: 10, background: index === highlightedIndex ? '#eee' : 'transparent' }} key={suggestion.value} {...getItemProps({ item: suggestion })}>{suggestion.value}</div>
								))}
								{categories.slice(0, 3).map((category, index) => (
									<div style={{ padding: 10, color: 'mediumseagreen', background: highlightedIndex === index + parsedSuggestions.slice(0, 5).length ? '#eee' : 'transparent' }} key={category.key} {...getItemProps({ item: { value: currentValue, category: category.key } })}>{currentValue} in {category.key}</div>
								))}
								{Boolean(currentValue.length) && <div style={{ color: 'dodgerblue', padding: 10, cursor: 'pointer', background: highlightedIndex === parsedSuggestions.slice(0, 5).length + categories.slice(0, 3).length ? '#eee' : 'transparent' }} {...getItemProps({ item: { label: currentValue, value: currentValue }})}>Search for "{currentValue}" in all categories</div>}
							</div>
						}
					</div>
				)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Weights",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				weights={array("weights", [1, 3])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With fuzziness",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				showFilter={false}
				fuzziness={number("fuzziness", 1)}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"Without autosuggest",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				autosuggest={boolean("autosuggest", false)}
			/>
		))
	)
	.add(
		"With highlight",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				highlight={boolean("highlight", true)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"With onValueSelected",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<CategorySearchDefault
				placeholder="Search Books by Author"
				showFilter={false}
				onValueSelected={action('onValueSelected called with')}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(CategorySearchReadme), () => (
			<CategorySearchDefault
				title={text("title", "CategorySearch")}
				dataField={array("dataField", ["original_title", "original_title.search"])}
				categoryField={text("categoryField", "authors.raw")}
				defaultSelected={text("defaultSelected", "")}
				strictSelection={boolean("strictSelection", false)}
				placeholder={text("placeholder", "Search Books by Author")}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				weights={array("weights", [1, 3])}
				fuzziness={number("fuzziness", 1)}
				autosuggest={boolean("autosuggest", true)}
				highlight={boolean("highlight", false)}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
				showClear={boolean('showClear', true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Result components/ReactiveList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault />
		))
	)
	// .add("Without resultStats", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
	// 	<ReactiveListDefault onAllData={null} stream={false} showResultStats={boolean("showResultStats", false)} />
	// )))
	// .add(
	// 	"With Streaming Enabled",
	// 	withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
	// 		<ReactiveListDefault stream={boolean("stream", true)} />
	// 	))
	// )
	.add(
		"With pagination",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault
				pagination={boolean("pagination", true)}
				paginationAt={select(
					"paginationAt",
					{ bottom: "bottom", top: "top", both: "both" },
					"bottom"
				)}
				pages={number("pages", 5)}
				title="Meetups"
			/>
		))
	)
	.add(
		"With infinite loading",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault pagination={false} />
		))
	)
	.add(
		"With scrollTarget",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault
				pagination={false}
				scrollTarget={text("scrollTarget", "results")}
				scrollTargetStory
			 />
		))
	)
	.add(
		"With custom sort order",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault
				sortBy={select("sortBy", { asc: "asc", description: "desc" }, "asc")}
			/>
		))
	)
	.add("With Sort Options", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add("With onQueryChange", withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
		<ReactiveListDefault
			onQueryChange={action("Query Changed")}
		/>
	)))
	.add(
		"Playground",
		withReadme(removeFirstLine(ReactiveListReadme, 3), () => (
			<ReactiveListDefault
				title={text("title", "ReactiveList: Results")}
				dataField={select("dataField", ["original_title.raw", "authors.raw", "original_series.raw"], "original_title.raw")}
				placeholder={text("placeholder", "Select from list")}
				// initialLoader={text("initialLoader", "Loading results..")}
				// noResults={text("noResults", "No results found!")}
				showResultStats={boolean("showResultStats", true)}
				sortOptions={[
					{
						label: "Rating - High to Low",
						dataField: "average_rating",
						sortBy: "desc"
					},
					{
						label: "Published - Most recent first",
						dataField: "original_publication_year",
						sortBy: "desc"
					},
					{
						label: "Published - Oldest first",
						dataField: "original_publication_year",
						sortBy: "asc"
					}
				]}
				pagination={boolean("pagination", true)}
				paginationAt={select(
					"paginationAt",
					{ bottom: "bottom", top: "top", both: "both" },
					"bottom"
				)}
				pages={number("pages", 5)}
				currentPage={number("currentPage", 1)}
				includeFields={array("includeFields", ['*'])}
				excludeFields={array("excludeFields", [])}
				// stream={boolean("stream", false)}
				sortBy={select("sortBy", { asc: "asc", desc: "desc" }, "asc")}
			/>
		))
	);

storiesOf("Result components/ResultCard", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault />
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault size={number("size", 12)} />
		))
	)
	.add(
		"Hide resultStats",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault showResultStats={boolean("showResultStats", false)} />
		))
	)
	.add(
		"With infinite loading",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault scrollOnTarget={window} pagination={false} />
		))
	)
	.add(
		"With pagination",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault
				pagination={boolean("pagination", true)}
				paginationAt={text("paginationAt", "bottom")}
			/>
		))
	)
	.add("With onQueryChange", withReadme(removeFirstLine(ResultCardReadme, 3), () => (
		<ResultCardDefault
			onQueryChange={action("Query Changed")}
		/>
	)))
	.add("With Sort Options", withReadme(removeFirstLine(ResultCardReadme, 3), () => (
		<ResultCardDefault
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add(
		"Playground",
		withReadme(removeFirstLine(ResultCardReadme, 3), () => (
			<ResultCardDefault
				size={number("size", 12)}
				dataField={select("dataField", ["original_title.raw", "authors.raw", "original_series.raw"], "original_title.raw")}
				showResultStats={boolean("showResultStats", true)}
				sortOptions={[
					{
						label: "Rating - High to Low",
						dataField: "average_rating",
						sortBy: "desc"
					},
					{
						label: "Published - Most recent first",
						dataField: "original_publication_year",
						sortBy: "desc"
					},
					{
						label: "Published - Oldest first",
						dataField: "original_publication_year",
						sortBy: "asc"
					}
				]}
				currentPage={number("currentPage", 1)}
				pagination={boolean("pagination", true)}
				paginationAt={text("paginationAt", "bottom")}
				includeFields={array("includeFields", ['*'])}
				excludeFields={array("excludeFields", [])}
			/>
		))
	);

storiesOf("Result components/ResultList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault />
	)))
	.add("With size", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault size={text("size", 5)} />
	)))
	.add("Hide resultStats", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault showResultStats={boolean("showResultStats", false)} />
	)))
	.add("With infinite loading", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault size={10} pagination={false} />
	)))
	.add("With pagination", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault
			pagination={boolean("pagination", true)}
			paginationAt={text("paginationAt", "bottom")}
		/>
	)))
	.add("With onQueryChange", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault
			onQueryChange={action("Query Changed")}
		/>
	)))
	.add("With Sort Options", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(ResultListReadme, 3), () => (
		<ResultListDefault
			title={text("title", "Cars result")}
			dataField={select("dataField", ["original_title.raw", "authors.raw", "original_series.raw"], "original_title.raw")}
			size={number("size", 5)}
			showResultStats={boolean("showResultStats", true)}
			sortOptions={[
				{
					label: "Rating - High to Low",
					dataField: "average_rating",
					sortBy: "desc"
				},
				{
					label: "Published - Most recent first",
					dataField: "original_publication_year",
					sortBy: "desc"
				},
				{
					label: "Published - Oldest first",
					dataField: "original_publication_year",
					sortBy: "asc"
				}
			]}
			currentPage={number("currentPage", 1)}
			pagination={boolean("pagination", true)}
			includeFields={array("includeFields", ['*'])}
			excludeFields={array("excludeFields", [])}
			paginationAt={text("paginationAt", "bottom")}
		/>
	)));

storiesOf("Search components/DataSearch", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				title={text("title", "Books Search")}
				placeholder="Search Books..."
				showFilter={false}
			/>
		))
	)
	.add(
		"wihout search icon",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				showIcon={boolean("showIcon", false)}
			/>
		))
	)
	.add(
		"with iconPosition",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"with custom icon",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				icon={<div>📚</div>}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
			/>
		))
	)
	.add(
		"with showClear",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				showClear={boolean('showClear', true)}
			/>
		))
	)
	.add(
		"with custom clearIcon",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				showClear={boolean('showClear', true)}
				clearIcon={<div>❌</div>}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"with debounce",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				debounce={number("debounce", 300)}
			/>
		))
	)
	.add(
		"With strictSelection",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				strictSelection={boolean("strictSelection", true)}
			/>
		))
	)
	.add(
		"Without autosuggest",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				autosuggest={boolean("autosuggest", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With onSuggestion",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				onSuggestion={(suggestion) => ({label: <div>{suggestion._source.original_title} by<span style={{ color: 'dodgerblue', marginLeft: 5 }}>{suggestion._source.authors}</span></div>, value: suggestion._source.original_title})}
				showFilter={false}
			/>
		))
	)
	.add(
		"With renderSuggestions",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				renderSuggestions={({
					currentValue,
					isOpen,
					getItemProps,
					highlightedIndex,
					suggestions,
					parsedSuggestions,
				}) => isOpen && Boolean(currentValue.length) && (
					<div style={{ position: 'absolute', padding: 10, color: '#424242', fontSize: '0.9rem', border: '1px solid #ddd', borderRadius: 4, marginTop: 10, width: '100%' }}>
						{
							<div>
								{parsedSuggestions.slice(0, 5).map((suggestion, index) => (
									<div style={{ padding: 10, background: index === highlightedIndex ? '#eee' : 'transparent' }} key={suggestion.value} {...getItemProps({ item: suggestion })}>{suggestion.value}</div>
								))}
								{Boolean(currentValue.length) && <div style={{ color: 'dodgerblue', padding: 10, cursor: 'pointer', background: highlightedIndex === parsedSuggestions.slice(0, 5).length ? '#eee' : 'transparent' }} {...getItemProps({ item: { label: currentValue, value: currentValue }})}>Show all results for "{currentValue}"</div>}
							</div>
						}
					</div>
				)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				defaultSelected={text("defaultSelected", "Harry Potter")}
			/>
		))
	)
	.add(
		"With defaultSuggestions",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				defaultSuggestions={[
					{ label: "Sherlock Holmes", value: "Sherlock Holmes" },
					{ label: "The Lord of the Rings", value: "The Lord of the Rings" }
				]}
			/>
		))
	)
	.add(
		"With fieldWeights",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				fieldWeights={array("fieldWeights", [1, 3])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With fuzziness as a number",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				fuzziness={number("fuzziness", 1)}
			/>
		))
	)
	.add(
		"With fuzziness as AUTO",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				fuzziness="AUTO"
			/>
		))
	)
	.add(
		"With highlight",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				highlight={boolean("highlight", true)}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"With onValueSelected",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				onValueSelected={action('onValueSelected called with')}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				placeholder="Search Books..."
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<DataSearchRSDefault
				title={text("title", "DataSearch: Books...")}
				dataField={array("dataField", ["original_title", "original_title.search"])}
				placeholder={text("placeholder", "Search Books...")}
				autosuggest={boolean("autosuggest", true)}
				defaultSelected={text("defaultSelected", "")}
				strictSelection={boolean("strictSelection", false)}
				fieldWeights={array("weights", [1, 3])}
				fuzziness={number("fuzziness", 1)}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				showClear={boolean('showClear', true)}
				showFilter={boolean("showFilter", true)}
				iconPosition={select("iconPosition", ["left", "right"], "left")}
				filterLabel={text("filterLabel", "Books filter")}
				highlight={boolean("highlight", false)}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
				onValueSelected={action('onValueSelected called with')}
			/>
		))
	);

storiesOf("Base components/TextField", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault title={text("title", "Books")} showFilter={false} />
		))
	)
	.add(
		"DefaultSelected",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				defaultSelected={text("defaultSelected", "The Murder of Roger Ackroyd")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"with showClear",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<TextFieldRSDefault
				placeholder="Search Books..."
				showFilter={false}
				showClear={boolean('showClear', true)}
			/>
		))
	)
	.add(
		"with custom clearIcon",
		withReadme(removeFirstLine(DataSearchReadme), () => (
			<TextFieldRSDefault
				placeholder="Search Books..."
				showFilter={false}
				showClear={boolean('showClear', true)}
				clearIcon={<div>❌</div>}
			/>
		))
	)
	.add(
		"with debounce",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault showFilter={false} debounce={number("debounce", 300)} />
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(TextFieldReadme), () => (
			<TextFieldRSDefault
				title={text("title", "TextField: Books Search")}
				dataField={select("dataField", ["original_title.search", "authors.search", "original_series.search"], "original_title.search")}
				showClear={boolean('showClear', true)}
				placeholder={text("placeholder", "Search for books...")}
				defaultSelected={text("defaultSelected", "The Hitchhiker's Guide to the Galaxy")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/NumberBox", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition="left"
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition="left"
				title={text("title", "Average Rating")}
			/>
		))
	)
	.add(
		"With labelPosition",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition={select(
					"labelPosition",
					{ bottom: "bottom", top: "top", left: "left", right: "right" },
					"right"
				)}
			/>
		))
	)
	.add(
		"With data",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={object("data", {
					label: "Book Ratings",
					start: 2,
					end: 5
				})}
				labelPosition="right"
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={number("defaultSelected", 2)}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				queryFormat={select(
					"queryFormat",
					{ exact: "exact", gte: "gte", lte: "lte" },
					"exact"
				)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				defaultSelected={2}
				data={{
					label: "Book Rating",
					start: 2,
					end: 5
				}}
				labelPosition="left"
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(NumberBoxReadme), () => (
			<NumberBoxRSDefault
				title={text("title", "Books")}
				dataField={select("dataField", ["average_rating_rounded", "books_count"], "average_rating_rounded")}
				defaultSelected={number("defaultSelected", 3)}
				data={object("data", {
					label: "Car Ratings",
					start: 2,
					end: 5
				})}
				labelPosition={select(
					"labelPosition",
					{ bottom: "bottom", top: "top", left: "left", right: "right" },
					"right"
				)}
				queryFormat={select(
					"queryFormat",
					{ exact: "exact", gte: "gte", lte: "lte" },
					"exact"
				)}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/SingleList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				title={text("title", "Good Books")}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"Without count",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"With renderListItem",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				renderListItem={(label, count) => (
					<div>
						{label}
						<span style={{ marginLeft: 5, color: 'dodgerblue' }}>
							{count}
						</span>
					</div>
				)}
			/>
		))
	)
	.add(
		"Without Search",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch={boolean("showSearch", false)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Wihout radio buttons",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showRadio={boolean("showRadio", false)}
			/>
		))
	)
	.add(
		"Default Selected",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				defaultSelected={text("defaultSelected", "Hercule Poirot")}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"Custom Sort",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				title="SingleList: Custom Sort"
				showSearch
				defaultSelected="London"
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				selectAllLabel={text("selectAllLabel", "All Books")}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"extending onValueChange",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				onValueChange={action("SingleList Value Changed")}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleListReadme), () => (
			<SingleListRSDefault
				title={text("title", "SingleList: Books Filter")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 100)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				defaultSelected={text("defaultSelected", "Artemis Fowl")}
				showCount={boolean("showCount", true)}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search Books")}
				selectAllLabel={text("selectAllLabel", "All books")}
				showRadio={boolean("showRadio", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/MultiList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				title={text("title", "MultiList: Books Filter")}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"Without count",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"With renderListItem",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				renderListItem={(label, count) => (
					<div>
						{label}
						<span style={{ marginLeft: 5, color: 'dodgerblue' }}>
							{count}
						</span>
					</div>
				)}
			/>
		))
	)
	.add(
		"Without Search",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch={boolean("showSearch", false)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"Without checkbox",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				showCheckbox={boolean("showCheckbox", false)}
			/>
		))
	)
	.add(
		"Default Selected",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				defaultSelected={array("defaultSelected", ["Hercule Poirot"])}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"Custom Sort",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				title="MultiList: Custom Sort"
				showSearch
				defaultSelected={["London"]}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				selectAllLabel={text("selectAllLabel", "All Books")}
				placeholder="Search Books"
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"extending with onValueChange",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				showSearch
				placeholder="Search Books"
				showFilter={false}
				onValueChange={action("MultiList Value Changed")}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiListReadme), () => (
			<MultiListRSDefault
				title={text("title", "MultiList: Books Filter")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 10)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				defaultSelected={array("defaultSelected", ["Harry Potter", "Artemis Fowl"])}
				showCount={boolean("showCount", true)}
				showSearch={boolean("showSearch", true)}
				showCheckbox={boolean("showCheckbox", true)}
				placeholder={text("placeholder", "Search Books")}
				selectAllLabel={text("selectAllLabel", "All books")}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/SingleDropdownList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				title={text("title", "Book list")}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Book filter")}
			/>
		))
	)
	.add(
		"With custom sort",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
			/>
		))
	)
	.add(
		"Without count",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"With search",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				showSearch={boolean("showSearch", true)}
			/>
		))
	)
	.add(
		"With renderListItem",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				renderListItem={(label, count) => (
					<div>
						{label}
						<span style={{ marginLeft: 5, color: 'dodgerblue' }}>
							{count}
						</span>
					</div>
				)}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				selectAllLabel={text("selectAllLabel", "All Books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				selectAllLabel="All Cities"
				defaultSelected={text("defaultSelected", "Artemis Fowl")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<SingleDropdownListRSDefault
				title={text("title", "SingleDropdownList")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 100)}
				showCount={boolean("showCount", true)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				selectAllLabel={text("selectAllLabel", "All Books")}
				defaultSelected={text("defaultSelected", "Harry Potter")}
				placeholder={text("placeholder", "Select a Book")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Book filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/MultiDropdownList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				title={text("title", "Books list")}
			/>
		))
	)
	.add(
		"With Placeholder",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				placeholder={text("placeholder", "Select Books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With size",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				size={number("size", 10)}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Without count",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				showCount={boolean("showCount", false)}
			/>
		))
	)
	.add(
		"With search",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				showSearch={boolean("showSearch", true)}
			/>
		))
	)
	.add(
		"With custom sort",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"asc"
				)}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"With Select All",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				placeholder="Select Books"
				selectAllLabel={text("selectAllLabel", "All Books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				placeholder="Select Books"
				size={100}
				sortBy="count"
				defaultSelected={array("defaultSelected", ["Hercule Poirot"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With renderListItem",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				placeholder="Select Books"
				size={100}
				sortBy="count"
				renderListItem={(label, count) => (
					<div>
						{label}
						<span style={{ marginLeft: 5, color: 'dodgerblue' }}>
							{count}
						</span>
					</div>
				)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"extending onValueChange",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				showFilter={false}
				onValueChange={action("MultiDropdownList Value Changed")}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiDropdownListReadme), () => (
			<MultiDropdownListRSDefault
				title={text("title", "MultiDropdownList")}
				dataField={select("dataField", ["original_series.raw", "authors.raw", "language_code.raw"], "original_series.raw")}
				size={number("size", 100)}
				showCount={boolean("showCount", true)}
				sortBy={select(
					"sortBy",
					{ asc: "asc", description: "desc", count: "count" },
					"count"
				)}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
				selectAllLabel={text("selectAllLabel", "All Books")}
				defaultSelected={array("defaultSelected", ["Hercule Poirot"])}
				placeholder={text("placeholder", "Select Books")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/SingleDataList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				title={text("title", "Topics")}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				defaultSelected={text("defaultSelected", "Social")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With showSearch",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
			/>
		))
	)
	.add(
		"Without Radio",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showRadio={boolean("showRadio", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With selectAllLabel",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				selectAllLabel={text("selectAllLabel", "Select All")}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleDataListReadme), () => (
			<SingleDataListRSDefault
				title={text("title", "Topics")}
				dataField={text("dataField", "group.group_topics.topic_name_raw.raw")}
				defaultSelected={text("defaultSelected", "Social")}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
				showRadio={boolean("showRadio", true)}
				selectAllLabel={text("selectAllLabel", "Select All")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("List components/MultiDataList", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				title={text("title", "Topics")}
			/>
		))
	)
	.add(
		"With defaultSelected",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				defaultSelected={array("defaultSelected", ["Social", "Music"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With showSearch",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
			/>
		))
	)
	.add(
		"Without Checkbox",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showCheckbox={boolean("showCheckbox", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With selectAllLabel",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				selectAllLabel={text("selectAllLabel", "Select All")}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiDataListReadme), () => (
			<MultiDataListRSDefault
				title={text("title", "Topics")}
				dataField={text("dataField", "group.group_topics.topic_name_raw.raw")}
				defaultSelected={array("defaultSelected", ["Social", "Music"])}
				showSearch={boolean("showSearch", true)}
				placeholder={text("placeholder", "Search topics")}
				showCheckbox={boolean("showCheckbox", true)}
				selectAllLabel={text("selectAllLabel", "Select All")}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Custom Filter Name")}
				queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/SingleRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={false}
				title={text("title", "SingleRange: Books Filter")}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				defaultSelected={text("defaultSelected", "Rating 3 to 4")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Without radio buttons",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={false}
				showRadio={boolean("showRadio", false)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<SingleRangeRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleRangeReadme), () => (
			<SingleRangeRSDefault
				title={text("title", "SingleRange: Books Filter")}
				defaultSelected={text("defaultSelected", "Cheap")}
				showRadio={boolean("showRadio", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/MultiRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				title={text("title", "MultiRange: Books Filter")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
			/>
		))
	)
	.add(
		"Without checkbox",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				showFilter={false}
				showCheckbox={boolean("showCheckbox", false)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiRangeReadme), () => (
			<MultiRangeRSDefault
				title={text("title", "MultiRange: Books Filter")}
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				showCheckbox={boolean("showCheckbox", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				title={text("title", "SingleDropdownRange: Books Filter")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				placeholder={text("placeholder", "Search books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				defaultSelected={text("defaultSelected", "Rating 3 to 4")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				URLParams={boolean("URLParams (not visible on storybook)", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<SingleDropdownRangeRSDefault
				title={text("title", "SingleDropdownRange: Books Filter")}
				placeholder={text("placeholder", "Search books")}
				defaultSelected={text("defaultSelected", "Rating 3 to 4")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	);

storiesOf("Range components/MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				title={text("title", "MultiDropdownRange: Books Filter")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				placeholder={text("placeholder", "Search books")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				URLParams={boolean("URLParams (not visible on storybook)", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
			<MultiDropdownRangeRSDefault
				title={text("title", "MultiDropdownRange: Books Filter")}
				dataField={text("dataField", "average_rating")}
				defaultSelected={array("defaultSelected", ["Rating 3 to 4"])}
				placeholder={text("placeholder", "Search books")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Books")}
			/>
		))
	);

storiesOf("Base components/ToggleButton", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={false}
				title={text("title", "ToggleButton: Topics")}
			/>
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				defaultSelected={array("defaultSelected", ["Music"])}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Topics filter")}
			/>
		))
	)
	.add(
		"Without multiSelect",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={false}
				multiSelect={boolean("multiSelect", false)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(ToggleButtonReadme), () => (
			<ToggleButtonRSDefault
				title={text("title", "ToggleButton: Topics")}
				dataField={text("dataField", "group.group_topics.topic_name_raw.raw")}
				multiSelect={boolean("multiSelect", true)}
				defaultSelected={array("defaultSelected", ["Social"])}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Category filter")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/DatePicker", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				title={text("title", "Date Picker")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				placeholder={text("placeholder", "Pick date")}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Date")}
			/>
		))
	)
	.add(
		"With focus",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={false}
				focused={boolean("focused", true)}
			/>
		))
	)
	.add(
		"Show more than 1 month",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				numberOfMonths={number("numberOfMonths", 2)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Default date",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				defaultSelected={text("defaultSelected", "2017-04-07")}
				showFilter={false}
			/>
		))
	)
	.add(
		"with initialMonth",
		withInfo(
			`initialMonth accepts a JavaScript object. Here it's passed new Date("2017-04-04")`
		)(withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				initialMonth={new Date("2017-04-04")}
				showFilter={false}
			/>
		)))
	)
	.add(
		"Without clear button",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showClear={boolean("showClear", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Without clickUnselectsDay",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				clickUnselectsDay={boolean("clickUnselectsDay", false)}
				showFilter={false}
			/>
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={false}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DatePickerReadme), () => (
			<DatePickerRSDefault
				title={text("title", "Date Picker")}
				placeholder={text("placeholder", "Pick date")}
				dataField={select("dataField", ["date_from", "date_to"], "date_from")}
				numberOfMonths={number("numberOfMonths", 1)}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
				showFilter={boolean("showFilter", true)}
				dayPickerInputProps={object("dayPickerInputProps", {
					clickUnselectsDay: true
				})}
				filterLabel={text("filterLabel", "Date")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/DateRange", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				title={text("title", "Date Range")}
			/>
		))
	)
	.add(
		"With placeholder",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				placeholder={object(
					"placeholder",
					{
						start: "Start Date",
						end: "End Date"
					}
				)}
			/>
		))
	)
	.add(
		"without showClear",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault showFilter={false} showClear={boolean("showClear", false)} />
		))
	)
	.add(
		"With filter",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Date range")}
			/>
		))
	)
	.add(
		"Show more than 1 month",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				numberOfMonths={number("numberOfMonths", 3)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Default date",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				defaultSelected={{
					start: new Date("2017-04-07"),
					end: new Date("2017-04-14")
				}}
			/>
		))
	)
	.add(
		"wihout autoFocusEnd",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault showFilter={false} autoFocusEnd={boolean("autoFocusEnd", false)} />
		))
	)
	.add(
		"With queryFormat",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(DateRangeReadme), () => (
			<DateRangeRSDefault
				title={text("title", "Date Range")}
				dataField={select("dataField", ["date_from", "date_to"], "date_from")}
				numberOfMonths={number("numberOfMonths", 2)}
				dayPickerInputProps={object("dayPickerInputProps", {
					clickUnselectsDay: true
				})}
				queryFormat={select(
					"queryFormat",
					[
						"date",
						"basic_date",
						"basic_date_time",
						"basic_date_time_no_millis",
						"date_time_no_millis",
						"basic_time",
						"basic_time_no_millis",
						"epoch_millis",
						"epoch_seconds"
					],
					"epoch_millis"
				)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "Date range")}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/RangeInput", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault title={text("title", "RangeInput: Ratings")} showFilter={false} />
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				defaultSelected={object("defaultSelected", {
					start: 5000,
					end: 9000
				})}
				showFilter={false}
			/>
		))
	)
	.add(
		"Without histogram",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault showHistogram={boolean("showHistogram", false)} showFilter={false} />
		))
	)
	.add(
		"Without slider",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault showSlider={boolean("showSlider", false)} showFilter={false} />
		))
	)
	.add(
		"With custom histogram interval",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault interval={number("interval", 1000)} showFilter={false} />
		))
	)
	.add(
		"With Range Labels",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				rangeLabels={object("rangeLabels", {
					start: "Low",
					end: "High"
				})}
				showFilter={false}
			/>
		))
	)
	.add(
		"With filters",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				showFilter={boolean("showFilter", true)}
			/>
		))
	)
	.add(
		"With onDrag",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				rangeLabels={object("rangeLabels", {
					start: "Low",
					end: "High"
				})}
				onDrag={(selected, boundary) => {
					console.log(selected, boundary);
				}}
				showFilter={false}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				URLParams={boolean("URLParams (not visible on storybook)", true)}
				showFilter={false}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeInputRSDefault
				title={text("title", "RangeSlider: Ratings")}
				dataField={select("dataField", ["books_count", "original_publication_year", "ratings_count"], "books_count")}
				range={object("range", {
					start: 3000,
					end: 50000
				})}
				showFilter={boolean("showFilter", true)}
				stepValue={number("stepValue", 1)}
				interval={number("interval", 1000)}
				defaultSelected={object("defaultSelected", {
					start: 4000,
					end: 10000
				})}
				rangeLabels={object("rangeLabels", {
					start: "Start",
					end: "End"
				})}
				showHistogram={boolean("showHistogram", true)}
				showSlider={boolean("showSlider", true)}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

storiesOf("Range components/RangeSlider", module)
	.addDecorator(withKnobs)
	.add(
		"Basic",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault showFilter={false} />
		))
	)
	.add(
		"With title",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault title={text("title", "RangeSlider: Ratings")} showFilter={false} />
		))
	)
	.add(
		"With Default Selected",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				defaultSelected={object("defaultSelected", {
					start: 3000,
					end: 4000
				})}
				showFilter={false}
			/>
		))
	)
	.add(
		"With onDrag",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				showFilter={false}
				defaultSelected={object("defaultSelected", {
					start: 3000,
					end: 4000
				})}
				onDrag={(selected, boundary) => {
					console.log(selected, boundary);
				}}
			/>
		))
	)
	.add(
		"Without histogram",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault showFilter={false} showHistogram={boolean("showHistogram", false)} />
		))
	)
	.add(
		"With custom histogram interval",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault showFilter={false} interval={number("interval", 1000)} />
		))
	)
	.add(
		"With Range Labels",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				showFilter={false}
				rangeLabels={object("rangeLabels", {
					start: "Low",
					end: "High"
				})}
			/>
		))
	)
	.add(
		"With filters",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				showFilter={boolean("showFilter", true)}
				rangeLabels={object("rangeLabels", {
					start: "Low",
					end: "High"
				})}
			/>
		))
	)
	.add(
		"With URLParams",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				showFilter={false}
				URLParams={boolean("URLParams (not visible on storybook)", true)}
			/>
		))
	)
	.add(
		"Playground",
		withReadme(removeFirstLine(RangeSliderReadme), () => (
			<RangeSliderRSDefault
				title={text("title", "RangeSlider: Prices")}
				dataField={select("dataField", ["books_count", "original_publication_year", "ratings_count"], "books_count")}
				range={object("range", {
					start: 3000,
					end: 50000
				})}
				showFilter={boolean("showFilter", true)}
				stepValue={number("stepValue", 1)}
				interval={number("interval", 2000)}
				defaultSelected={object("defaultSelected", {
					start: 6000,
					end: 12000
				})}
				rangeLabels={object("rangeLabels", {
					start: "Start",
					end: "End"
				})}
				showHistogram={boolean("showHistogram", true)}
				URLParams={boolean("URLParams (not visible on storybook)", false)}
			/>
		))
	);

// storiesOf("search/SelectedFilters", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultSelected={["London"]} />
// 	)))
// 	.add("With no filter", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultSelected={["London"]} showFilter={boolean("showFilter", false)} />
// 	)))
// 	.add("With filterLabel", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultSelected={["London"]} filterLabel={text("filterLabel", "City filter")} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault
// 			defaultSelected={["London"]}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "City filter")}
// 		/>
// 	)));

storiesOf("theme", module)
	.addDecorator(withKnobs)
	.add("Default (Light Preset)", () => (
		<DarkStory />
	))
	.add("Dark Preset with ResultList", () => (
		<DarkStory themePreset={select('themePreset', ['light', 'dark'], 'dark')} />
	))
	.add("Dark Preset with ResultCard", () => (
		<DarkCard themePreset={select('themePreset', ['light', 'dark'], 'dark')} />
	))
	.add("Dark Preset with TagCloud/ToggleButton/Single/MultiDataList", () => (
		<TagCloudDark themePreset={select('themePreset', ['light', 'dark'], 'dark')} />
	))
	.add("Dark Preset with DatePicker", () => (
		<DatePickerDark themePreset={select('themePreset', ['light', 'dark'], 'dark')} />
	))
	.add("Dark Preset with DateRange", () => (
		<DateRangeDark themePreset={select('themePreset', ['light', 'dark'], 'dark')} />
	))
