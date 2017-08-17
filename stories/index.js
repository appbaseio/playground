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
			showFilter={false}
		/>
	)))
	.add("With Title", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
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
	.add("With placeholder", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			placeholder={text("placeholder", "Search Location")}
			showFilter={false}
		/>
	)))
	.add("With filter", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
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
			showFilter={false}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
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
	.add("With stepValue", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
		<GeoDistanceSliderDefault
			defaultSelected={{
				distance: 50
			}}
			unit="mi"
			placeholder="Search Location"
			showFilter={false}
			stepValue={number("stepValue", 1)}
		/>
	)))
	.add("With autoLocation off", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
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
	.add("With URLParams", withReadme(removeFirstLine(GeoDistanceSliderReadme), () => (
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
			autoLocation={boolean("autoLocation", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "GeoDistance filter")}
			URLParams={boolean("URLParams (not visible on storybook)", true)}
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
			placeholder="Search Location"
			showFilter={false}
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
			title={text("title", "Geo Distance Slider")}
			placeholder="Search Location"
			showFilter={false}
		/>
	)))
	.add("With placeholder", withReadme(removeFirstLine(GeoDistanceDropdownReadme), () => (
		<GeoDistanceDropdownDefault
			unit="mi"
			data={
				[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
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
				[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
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
				[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
			}
			defaultSelected={object("defaultSelected", {
				label: "Less than 100 miles",
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
				[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
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
				[{ start: 1, end: 100, label: "Less than 100 miles" },
				{ start: 101, end: 200, label: "Between 100 and 200 miles" },
				{ start: 201, end: 500, label: "Between 200 and 500 miles" },
				{ start: 501, end: 1000, label: "Above 500 miles" }]
			}
			placeholder="Search Location"
			showFilter={false}
			URLParams={boolean("URLParams (not visible in storybook)", true)}
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
				title={text("title", "Geo Distance Slider")}
				placeholderDropdown={text("placeholderDropdown", "Select radius")}
				autoLocation={boolean("autoLocation", true)}
				showFilter={boolean("showFilter", true)}
				filterLabel={text("filterLabel", "GeoDistance filter")}
				URLParams={boolean("URLParams (not visible in storybook)", true)}
		/>
	)));

storiesOf("map/PlacesSearch", module)
	.addDecorator(withKnobs)
	.add("Basic - Direction Demo", withReadme(removeFirstLine(PlacesSearchReadme), () => (
		<PlacesSearchDefault />
	)));

storiesOf("map/ReactiveMap", module)
	.addDecorator(withKnobs)
	.add("Basic", () => (
		<ReactiveMapDefault />
	))
	.add("With Title", () => (
		<ReactiveMapDefault
			title={text("title", "Reactive maps")}
		/>
	))
	.add("With Popover onClick", () => (
		<ReactiveMapDefault
			title="Reactive Maps"
			showPopoverOn="click"
		/>
	))
	.add("With Popover onMouseOver", () => (
		<ReactiveMapDefault
			title="Reactive Maps"
			showPopoverOn="mouseover"
		/>
	))
	.add("Playground", () => (
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
	));

storiesOf("map/SingleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch placeholder="Search City" />
	)))
	.add("With title", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} title={text("title", "Cities")} />
	)))
	.add("With size", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} size={number("size", 10)} />
	)))
	.add("With filter", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
	)))
	.add("Without count", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("Without Search", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch={boolean("showSearch", false)} placeholder="Search City" />
	)))
	.add("Wihout radio buttons", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showSearch placeholder="Search City" showFilter={false} showRadio={boolean("showRadio", false)} />
	)))
	.add("Default Selected", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch defaultSelected={text("defaultSelected", "San Francisco")} placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} title="SingleList: Ascending Sort" showSearch defaultSelected="London" sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch selectAllLabel={text("selectAllLabel", "All cities")} placeholder="Search City" />
	)))
	.add("With URLParams", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListMapDefault showFilter={false} showSearch placeholder="Search City" URLParams={boolean("URLParams (not visible in storybook)", true)} />
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
			showRadio={boolean("showRadio", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/MultiList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showFilter={false} showSearch placeholder="Search City" />
	)))
	.add("With title", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} title={text("title", "MultiList: City Filter")} />
	)))
	.add("With size", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} size={number("size", 10)} />
	)))
	.add("With filter", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")}  showSearch placeholder="Search City" />
	)))
	.add("With queryFormat", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch placeholder="Search City" queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")} />
	)))
	.add("Wihout count", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("Without Search", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showFilter={false} showSearch={boolean("showSearch", false)} placeholder="Search City" />
	)))
	.add("Without checkbox", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showSearch placeholder="Search City" showFilter={false} showCheckbox={boolean("showCheckbox", false)} />
	)))
	.add("Default Selected", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showFilter={false} showSearch defaultSelected={array("defaultSelected", ["London", "Sydney"])} placeholder="Search City" />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showFilter={false} title="MultiList: Ascending Sort" showSearch defaultSelected={["London"]} sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} placeholder="Search City" />
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showFilter={false} showSearch selectAllLabel={text("selectAllLabel", "All cities")} placeholder="Search City" />
	)))
	.add("With URLParams", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault showFilter={false} showSearch placeholder="Search City" URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListMapDefault
			title={text("title", "MultiList: City Filter")}
			size={number("size", 10)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			defaultSelected={array("defaultSelected", ["London", "Sydney"])}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			showCheckbox={boolean("showCheckbox", true)}
			placeholder={text("placeholder", "Search City")}
			selectAllLabel={text("selectAllLabel", "All cities")}
			queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/SingleDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault showFilter={false} title={text("title", "City list")} />
	)))
	.add("With size", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault showFilter={false} size={number("size", 10)} />
	)))
	.add("With filter", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
	)))
	.add("With custom sort", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault showFilter={false} sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} />
	)))
	.add("Without count", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault
			selectAllLabel={text("selectAllLabel", "All Cities")}
			showFilter={false}
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault
			selectAllLabel="All Cities"
			defaultSelected={text("defaultSelected", "London")}
			showFilter={false}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
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
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/MultiDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListMapDefault showFilter={false} title={text("title", "City list")} />
	)))
	.add("With Placeholder", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault
			placeholder={text("placeholder", "Select Cities")}
			showFilter={false}
		/>
	)))
	.add("With size", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListMapDefault showFilter={false} size={number("size", 10)} />
	)))
	.add("With filter", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
	)))
	.add("Without count", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListMapDefault showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("With custom sort", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListMapDefault showFilter={false} sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} />
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault
			placeholder="Select Cities"
			selectAllLabel={text("selectAllLabel", "All Cities")}
			showFilter={false}
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault
			placeholder="Select Cities"
			size={100}
			sortBy="count"
			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
			showFilter={false}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
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
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/SingleRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault showFilter={false} title={text("title", "SingleRange: Earthquake Filter")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault defaultSelected={text("defaultSelected", "Moderate")} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Earthquake range filter")} />
	)))
	.add("Without radio buttons", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault showFilter={false} showRadio={boolean("showRadio", false)} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeMapDefault
			title={text("title", "SingleRange: Earthquake Filter")}
			defaultSelected={text("defaultSelected", "Moderate")}
			showRadio={boolean("showRadio", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Earthquake range filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/MultiRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault title={text("title", "MultiRange: Earthquake Filter")} showFilter={false} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault defaultSelected={array("defaultSelected", ["Major", "Moderate"])} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Earthquake range filter")} />
	)))
	.add("Without checkbox", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault showFilter={false} showCheckbox={boolean("showCheckbox", false)} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeMapDefault
			title={text("title", "MultiRange: Filter")}
			defaultSelected={array("defaultSelected", ["Major", "Moderate"])}
			showCheckbox={boolean("showCheckbox", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Earthquake range filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault title={text("title", "SingleDropdownRange: Filter")} />
	)))
	.add("With placeholder", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault placeholder={text("placeholder", "Search places")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault defaultSelected={text("defaultSelected", "Moderate")} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeMapDefault
			title={text("title", "SingleDropdownRange: Filter")}
			placeholder={text("placeholder", "Search prices")}
			defaultSelected={text("defaultSelected", "Moderate")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault title={text("title", "MultiDropdownRange: Earthquake Magnitude")} />
	)))
	.add("With placeholder", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault placeholder={text("placeholder", "Search places")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault defaultSelected={["Moderate", "Strong"]} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeMapDefault
			title={text("title", "MultiDropdownRange: Earthquake Magnitude")}
			defaultSelected={["Moderate", "Strong"]}
			placeholder={text("placeholder", "Search places")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/DataSearch", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Venue"
			showFilter={false}
		/>
	)))
	.add("With title", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title={text("title", "Places Search")}
			placeholder="Search Places"
			showFilter={false}
		/>
	)))
	.add("With filter", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Places"
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Places filter")}
		/>
	)))
	.add("Without autoSuggest", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Venue"
			autoSuggest={boolean("autoSuggest", false)}
			showFilter={false}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Places"
			showFilter={false}
			defaultSelected={text("defaultSelected", "Songwriting")}
		/>
	)))
	.add("With initialSuggestions", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Places"
			showFilter={false}
			initialSuggestions={[{label: "Songwriting", value: "Songwriting"}, {label: "Musicians", value: "Musicians"}]}
		/>
	)))
	.add("With Weights", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Places"
			weights={[1, 3]}
			showFilter={false}
		/>
	)))
	.add("With fuzziness", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Places"
			showFilter={false}
			fuzziness={number("fuzziness", 1)}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title="DataSearch"
			placeholder="Search Venue"
			showFilter={false}
			URLParams={boolean("URLParams (not visible in storybook)", true)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchMapDefault
			title={text("title", "DataSearch: Places")}
			placeholder={text("placeholder", "Search Places")}
			autoSuggest={boolean("autoSuggest", true)}
			defaultSelected={text("defaultSelected", "")}
			weights={array("weights", [1,3])}
			fuzziness={number("fuzziness", 1)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Places filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/TextField", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault title={text("title", "Meetups")} showFilter={false} />
	)))
	.add("DefaultSelected", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault defaultSelected={text("defaultSelected", "London")} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Meetups filter")} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldMapDefault
			title={text("title", "TextField: Venue Search")}
			placeholder={text("placeholder", "Type a place name")}
			defaultSelected={text("defaultSelected", "London")}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Places filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/ToggleButton", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault showFilter={false} title={text("title", "ToggleButton: Meetup Categories")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault defaultSelected={array("defaultSelected", ["Social", "Travel"])} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Category filter")} />
	)))
	.add("Without multiSelect", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault showFilter={false} multiSelect={boolean("multiSelect", false)} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault showFilter={false} URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonMapDefault
			title={text("title", "ToggleButton: Meetup Categories")}
			multiSelect={boolean("multiSelect", true)}
			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Category filter")}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
		/>
	)));

storiesOf("map/RangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault />
	)))
	.add("With title", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault title={text("title", "RangeSlider: Guests")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault
			defaultSelected={object("defaultSelected", {
				start: 0,
				end: 2
			})}
		/>
	)))
	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault
			showHistogram={boolean("showHistogram", false)}
		/>
	)))
	.add("With custom histogram interval", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault interval={number("interval", 5)} />
	)))
	.add("With Range Labels", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault
			defaultSelected={{
				start: 0,
				end: 2
			}}
			rangeLabels={object("rangeLabels", {
				start: "Start",
				end: "End"
			})}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault URLParams={boolean("URLParams (not visible in storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderMapDefault
			title={text("title", "RangeSlider: Guest RSVPs")}
			range={object("range", {
				start: 0,
				end: 5
			})}
			stepValue={number("stepValue", 1)}
			interval={number("interval", 20)}
			defaultSelected={object("defaultSelected", {
				start: 0,
				end: 2
			})}
			rangeLabels={object("rangeLabels", {
				start: "Start",
				end: "End"
			})}
			showHistogram={boolean("showHistogram", true)}
			URLParams={boolean("URLParams (not visible in storybook)", false)}
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
	.add("With title", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxMapDefault
			defaultSelected={2}
			data={{
				start: 1,
				end: 16
			}}
			labelPosition="left"
			title={text("title", "Number of Guests")}
		/>
	)))
	.add("With data", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxMapDefault
			defaultSelected={2}
			data={object("data", {
				start: 1,
				end: 16,
				label: "Guests"
			})}
			labelPosition="right"
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxMapDefault
			defaultSelected={number("defaultSelected", 2)}
			data={{
				start: 1,
				end: 16
			}}
		/>
	)))
	.add("With queryFormat", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxMapDefault
			defaultSelected={2}
			data={{
				start: 1,
				end: 16
			}}
			queryFormat={select("queryFormat", { exact: "exact", gte: "gte", lte: "lte" }, "exact")}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxMapDefault
			title={text("title", "Number of Guests")}
			defaultSelected={number("defaultSelected", 3)}
			data={object("data", {
				start: 1,
				end: 16,
				label: "Guests"
			})}
			labelPosition={select("labelPosition", { bottom: "bottom", top: "top", left: "left", right: "right" }, "right")}
			queryFormat={select("queryFormat", { exact: "exact", gte: "gte", lte: "lte" }, "exact")}
		/>
	)));


storiesOf("map/DatePicker", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault title={text("title", "Date Picker")} showFilter={false} />
	)))
	.add("With placeholder", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault placeholder={text("placeholder", "Pick date")} showFilter={false} />
	)))
	.add("With filterLabel", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault filterLabel="Date" />
	)))
	.add("Without focus", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault showFilter={false} focused={boolean("focused", false)} />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			numberOfMonths={number("numberOfMonths", 2)}
			showFilter={false}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			defaultSelected={moment().subtract(1, "day")}
			showFilter={false}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			allowAllDates={boolean("allowAllDates", false)}
			showFilter={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			extra={object("extra", {
				withFullScreenPortal: true,
				showClearDate: true
			})}
			showFilter={false}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerMapDefault
			title={text("title", "Date Picker")}
			placeholder={text("placeholder", "Pick date")}
			numberOfMonths={number("numberOfMonths", 1)}
			allowAllDates={boolean("allowAllDates", true)}
			extra={object("extra", {
				withFullScreenPortal: false,
				showClearDate: false
			})}
			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
		/>
	)));

storiesOf("map/DateRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault showFilter={false} title={text("title", "Date Range")} />
	)))
	.add("With filterLabel", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault filterLabel="Date range" />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			numberOfMonths={number("numberOfMonths", 3)}
			showFilter={false}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			showFilter={false}
			defaultSelected={{
				start: moment().subtract(7, "days"),
				end: moment()
			}}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			allowAllDates={boolean("allowAllDates", false)}
			showFilter={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			showFilter={false}
			extra={object("extra", {
				withFullScreenPortal: true,
				showClearDate: true
			})}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeMapDefault
			title={text("title", "Date Range")}
			numberOfMonths={number("numberOfMonths", 2)}
			allowAllDates={boolean("allowAllDates", true)}
			extra={object("extra", {
				withFullScreenPortal: true,
				showClearDate: true
			})}
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
			showFilter={false}
		/>
	)))
	.add("With Title", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			title={text("title", "Car Category")}
			showFilter={false}
		/>
	)))
	.add("Default selection", withReadme(removeFirstLine(NestedListReadme), () => (
		<NestedListDefault
			defaultSelected={array("defaultSelected", ["bmw", "x series"])}
			showFilter={false}
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
		<ToggleListDefault showFilter={false} />
	)))
	.add("With Title", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault title={text("title", "Choose category")} showFilter={false} />
	)))
	.add("Without multiSelect", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault showFilter={false} multiSelect={boolean("multiSelect", false)} />
	)))
	.add("With Custom filter label", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault filterLabel="Meetup Filter" />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleListDefault
			defaultSelected={array("defaultSelected", ["Social"])}
			showFilter={false}
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
	.add("With Title", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault title={text("title", "Guests")} />
	)))
	.add("With custom stepValue", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<DynamicRangeSliderDefault stepValue={number("stepValue", 1)} />
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
		<TagCloudDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault title={text("title", "Cities")} showFilter={false} />
	)))
	.add("Without showCount", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault showCount={boolean("showCount", false)} showFilter={false} />
	)))
	.add("With custom filterLabel", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault filterLabel="Cities filter" />
	)))
	.add("With multiSelect", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			multiSelect={boolean("multiSelect", true)}
			showFilter={false}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			defaultSelected={text("defaultSelected", "Auckland")}
			showFilter={false}
		/>
	)))
	.add("With multiSelect on and defaultSelected", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			multiSelect
			defaultSelected={array("defaultSelected", ["Auckland", "Amsterdam"])}
		/>
	)))
	.add("With multiSelect off and defaultSelected", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			defaultSelected={text("defaultSelected", "Auckland")}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(SingleListReadme), () => (
		<TagCloudDefault
			title={text("title", "TagCloud: City Filter")}
			size={number("size", 100)}
			multiSelect
			defaultSelected={array("defaultSelected", ["Auckland"])}
			showCount={boolean("showCount", true)}
		/>
	)));

storiesOf("search/RatingsFilter", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<RatingsFilterDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<RatingsFilterDefault title={text("title", "Ratings")} showFilter={false} />
	)))
	.add("With filterLabel", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<RatingsFilterDefault filterLabel="Ratings Label" />
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<RatingsFilterDefault
			defaultSelected={object("defaultSelected", { start: 2, end: 5 })}
			showFilter={false}
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
			showFilter={false}
		/>
	)))
	.add("With title", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title={text("title", "Cars")}
			placeholder="Search Car"
			showFilter={false}
		/>
	)))
	.add("With filterLabel", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			placeholder="Search Car"
			filterLabel="Cars Filter"
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			placeholder="Search Car"
			defaultSelected={text("defaultSelected", "")}
			showFilter={false}
		/>
	)))
	.add("With initialSuggestions", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			placeholder="Search Car"
			initialSuggestions={[{label: "Opel", value: "Opel"}, {label: "VW", value: "VW"}]}
			showFilter={false}
		/>
	)))
	.add("With Weights", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			weights={array("weights", [1,3])}
			showFilter={false}
		/>
	)))
	.add("With fuzziness", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			showFilter={false}
			fuzziness={number("fuzziness", 1)}
		/>
	)))
	.add("With queryFormat", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			showFilter={false}
			queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
		/>
	)))
	.add("Without autoSuggest", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title="CategorySearch"
			placeholder="Search Car"
			showFilter={false}
			autoSuggest={boolean("autoSuggest", false)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<CategorySearchDefault
			title={text("title", "CategorySearch")}
			appbaseField={array("appbaseField", ["name"])}
			categoryField={text("categoryField", "brand.raw")}
			defaultSelected={text("defaultSelected", "")}
			placeholder={text("placeholder", "Search Car")}
			queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
			weights={array("weights", [1,3])}
			fuzziness={number("fuzziness", 1)}
			autoSuggest={boolean("autoSuggest", true)}
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
	.add("With title", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault title={text("title", "Cars result")} />
	)))
	.add("With size", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault size={number("size", 5)} />
	)))
	.add("Hide resultStats", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault showResultStats={boolean("showResultStats", false)} />
	)))
	.add("With pagination", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault  pagination={boolean("pagination", true)} paginationAt={text("paginationAt", "bottom")} />
	)))
	.add("Playground", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultCardDefault
			title={text("title", "Cars result")}
			size={number("size", 5)}
			showResultStats={boolean("showResultStats", true)}
			pagination={boolean("pagination", true)}
			paginationAt={text("paginationAt", "bottom")}
		/>
	)));

storiesOf("search/ResultList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault />
	)))
	.add("With title", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault title={text("title", "Cars list")} />
	)))
	.add("With size", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault size={text("size", 5)} />
	)))
	.add("Hide resultStats", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault showResultStats={boolean("showResultStats", false)} />
	)))
	.add("With pagination", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault pagination={boolean("pagination", true)} paginationAt={text("paginationAt", "bottom")} />
	)))
	.add("Playground", withReadme(removeFirstLine(ReactiveListReadme), () => (
		<ResultListDefault
			title={text("title", "Cars result")}
			size={number("size", 5)}
			showResultStats={boolean("showResultStats", true)}
			pagination={boolean("pagination", true)}
			paginationAt={text("paginationAt", "bottom")}
		/>
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
			placeholder="Search Cars"
			showFilter={false}
		/>
	)))
	.add("With title", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title={text("title", "Cars Search")}
			placeholder="Search Cars"
			showFilter={false}
		/>
	)))
	.add("With filter", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Cars"
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Cars filter")}
		/>
	)))
	.add("Without autoSuggest", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Venue"
			autoSuggest={boolean("autoSuggest", false)}
			showFilter={false}
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Cars"
			showFilter={false}
			defaultSelected={text("defaultSelected", "Audi")}
		/>
	)))
	.add("With initialSuggestions", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Cars"
			showFilter={false}
			initialSuggestions={[{label: "Audi", value: "Audi"}, {label: "Hyundai", value: "Hyundai"}]}
		/>
	)))
	.add("With Weights", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Cars"
			weights={[1, 3]}
			showFilter={false}
		/>
	)))
	.add("With fuzziness", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Cars"
			showFilter={false}
			fuzziness={number("fuzziness", 1)}
		/>
	)))
	.add("With highlight", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Cars"
			showFilter={false}
			highlight={boolean("highlight", true)}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title="DataSearch"
			placeholder="Search Cars"
			showFilter={false}
			URLParams={boolean("URLParams (not visible on storybook)", true)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(DataSearchReadme), () => (
		<DataSearchRSDefault
			title={text("title", "DataSearch: Cars")}
			placeholder={text("placeholder", "Search Cars")}
			autoSuggest={boolean("autoSuggest", true)}
			defaultSelected={text("defaultSelected", "")}
			weights={array("weights", [1, 3])}
			fuzziness={number("fuzziness", 1)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Cars filter")}
			highlight={boolean("highlight", false)}
			URLParams={boolean("URLParams (not visible on storybook)", true)}
		/>
	)));

storiesOf("search/TextField", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault title={text("title", "Cars")} showFilter={false} />
	)))
	.add("DefaultSelected", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault defaultSelected={text("defaultSelected", "Nissan")} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Cars filter")} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(TextFieldReadme), () => (
		<TextFieldRSDefault
			title={text("title", "TextField: Car Search")}
			placeholder={text("placeholder", "Type a car name")}
			defaultSelected={text("defaultSelected", "nissan")}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Cars filter")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
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
	.add("With title", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			defaultSelected={2}
			data={{
				start: 1,
				end: 16
			}}
			labelPosition="left"
			title={text("title", "Number of Guests")}
		/>
	)))
	.add("With data", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			defaultSelected={2}
			data={object("data", {
				start: 1,
				end: 16,
				label: "Guests"
			})}
			labelPosition="right"
		/>
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			defaultSelected={number("defaultSelected", 2)}
			data={{
				start: 1,
				end: 16
			}}
		/>
	)))
	.add("With queryFormat", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			defaultSelected={2}
			data={{
				start: 1,
				end: 16
			}}
			queryFormat={select("queryFormat", { exact: "exact", gte: "gte", lte: "lte" }, "exact")}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			defaultSelected={2}
			data={{
				start: 1,
				end: 16
			}}
			labelPosition="left"
			URLParams={boolean("URLParams (not visible on storybook)", true)}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(NumberBoxReadme), () => (
		<NumberBoxRSDefault
			title={text("title", "Number of Guests")}
			defaultSelected={number("defaultSelected", 3)}
			data={object("data", {
				start: 1,
				end: 16,
				label: "Guests"
			})}
			labelPosition={select("labelPosition", { bottom: "bottom", top: "top", left: "left", right: "right" }, "right")}
			queryFormat={select("queryFormat", { exact: "exact", gte: "gte", lte: "lte" }, "exact")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/SingleList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch placeholder="Search City" showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch placeholder="Search City" showFilter={false} title={text("title", "Cities")} />
	)))
	.add("With size", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch placeholder="Search City" showFilter={false} size={number("size", 10)} />
	)))
	.add("Without count", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch placeholder="Search City" showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("Without Search", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch={boolean("showSearch", false)} placeholder="Search City" showFilter={false} />
	)))
	.add("With filterLabel", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch placeholder="Search City" filterLabel="City filter" />
	)))
	.add("Wihout radio buttons", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch placeholder="Search City" showFilter={false} showRadio={boolean("showRadio", false)} />
	)))
	.add("Default Selected", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch defaultSelected={text("defaultSelected", "London")} placeholder="Search City" showFilter={false} />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault title="SingleList: Custom Sort" showSearch defaultSelected="London" sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} placeholder="Search City" showFilter={false} />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleListReadme), () => (
		<SingleListRSDefault showSearch selectAllLabel={text("selectAllLabel", "All Cities")} placeholder="Search City" showFilter={false} />
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
			showRadio={boolean("showRadio", true)}
		/>
	)));

storiesOf("search/MultiList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" showFilter={false} title={text("title", "MultiList: City Filter")} />
	)))
	.add("With size", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" showFilter={false} size={number("size", 10)} />
	)))
	.add("With filter", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
	)))
	.add("With queryFormat", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")} />
	)))
	.add("Wihout count", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("Without Search", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch={boolean("showSearch", false)} placeholder="Search City" showFilter={false} />
	)))
	.add("Without checkbox", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch placeholder="Search City" showFilter={false} showCheckbox={boolean("showCheckbox", false)} />
	)))
	.add("Default Selected", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch defaultSelected={array("defaultSelected", ["London", "Sydney"])} placeholder="Search City" showFilter={false} />
	)))
	.add("Custom Sort", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault title="MultiList: Custom Sort" showSearch defaultSelected={["London"]} sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} placeholder="Search City" showFilter={false} />
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault showSearch selectAllLabel={text("selectAllLabel", "All Cities")} placeholder="Search City" showFilter={false} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiListReadme), () => (
		<MultiListRSDefault
			title={text("title", "MultiList: City Filter")}
			size={number("size", 10)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			defaultSelected={array("defaultSelected", ["London", "Sydney"])}
			showCount={boolean("showCount", true)}
			showSearch={boolean("showSearch", true)}
			showCheckbox={boolean("showCheckbox", true)}
			placeholder={text("placeholder", "Search City")}
			selectAllLabel={text("selectAllLabel", "All cities")}
			queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
		/>
	)));

storiesOf("search/SingleDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault showFilter={false} title={text("title", "City list")} />
	)))
	.add("With size", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault showFilter={false} size={number("size", 10)} />
	)))
	.add("With filter", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "City filter")} />
	)))
	.add("With custom sort", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault showFilter={false} sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} />
	)))
	.add("Without count", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("With Select All", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault
			selectAllLabel={text("selectAllLabel", "All Cities")}
			showFilter={false}
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<SingleDropdownListRSDefault
			selectAllLabel="All Cities"
			defaultSelected={text("defaultSelected", "London")}
			showFilter={false}
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
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
		/>
	)));

storiesOf("search/MultiDropdownList", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListRSDefault showFilter={false} title={text("title", "City list")} />
	)))
	.add("With Placeholder", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			placeholder={text("placeholder", "Select Cities")}
			showFilter={false}
		/>
	)))
	.add("With size", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListRSDefault showFilter={false} size={number("size", 10)} />
	)))
	.add("With filterLabel", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListRSDefault filterLabel="Cities filter" />
	)))
	.add("Without count", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListRSDefault showFilter={false} showCount={boolean("showCount", false)} />
	)))
	.add("With custom sort", withReadme(removeFirstLine(SingleDropdownListReadme), () => (
		<MultiDropdownListRSDefault showFilter={false} sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "asc")} />
	)))
	.add("With queryFormat", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListDefault showFilter={false} queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")} />
	)))
	.add("With Select All", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			placeholder="Select Cities"
			selectAllLabel={text("selectAllLabel", "All Cities")}
			showFilter={false}
		/>
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			placeholder="Select Cities"
			size={100}
			sortBy="count"
			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
			showFilter={false}
		/>
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownListReadme), () => (
		<MultiDropdownListRSDefault
			title={text("title", "MultiDropdownList")}
			size={number("size", 100)}
			showCount={boolean("showCount", true)}
			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
			queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
			selectAllLabel={text("selectAllLabel", "All Cities")}
			defaultSelected={array("defaultSelected", ["London", "Melbourne"])}
			placeholder={text("placeholder", "Select Cities")}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "City filter")}
		/>
	)));

storiesOf("search/SingleRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault showFilter={false} title={text("title", "SingleRange: Price Filter")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault defaultSelected={text("defaultSelected", "Cheap")} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Price filter")} />
	)))
	.add("Without radio buttons", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault showFilter={false} showRadio={boolean("showRadio", false)} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<SingleRangeRSDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleRangeReadme), () => (
		<SingleRangeRSDefault
			title={text("title", "SingleRange: Price Filter")}
			defaultSelected={text("defaultSelected", "Cheap")}
			showRadio={boolean("showRadio", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Price filter")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/MultiRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault title={text("title", "MultiRange: Price Filter")} showFilter={false} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Price filter")} />
	)))
	.add("Without checkbox", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault showFilter={false} showCheckbox={boolean("showCheckbox", false)} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiRangeReadme), () => (
		<MultiRangeRSDefault
			title={text("title", "MultiRange: Price Filter")}
			defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])}
			showCheckbox={boolean("showCheckbox", true)}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Price filter")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault title={text("title", "SingleDropdownRange: Price Filter")} />
	)))
	.add("With placeholder", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault placeholder={text("placeholder", "Search prices")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault defaultSelected={text("defaultSelected", "Cheap")} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<SingleDropdownRangeRSDefault
			title={text("title", "SingleDropdownRange: Price Filter")}
			placeholder={text("placeholder", "Search prices")}
			defaultSelected={text("defaultSelected", "Cheap")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault />
	)))
	.add("With title", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault title={text("title", "SingleDropdownRange: Price Filter")} />
	)))
	.add("With placeholder", withReadme(removeFirstLine(SingleDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault placeholder={text("placeholder", "Search prices")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(MultiDropdownRangeReadme), () => (
		<MultiDropdownRangeRSDefault
			title={text("title", "MultiDropdownRange: Price Filter")}
			defaultSelected={array("defaultSelected", ["Cheap", "Moderate"])}
			placeholder={text("placeholder", "Search prices")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/ToggleButton", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault showFilter={false} title={text("title", "ToggleButton: Meetup Categories")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault defaultSelected={array("defaultSelected", ["Social", "Travel"])} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Category filter")} />
	)))
	.add("Without multiSelect", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault showFilter={false} multiSelect={boolean("multiSelect", false)} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(ToggleButtonReadme), () => (
		<ToggleButtonRSDefault
			title={text("title", "ToggleButton: Meetup Categories")}
			multiSelect={boolean("multiSelect", true)}
			defaultSelected={array("defaultSelected", ["Social", "Travel"])}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Category filter")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/DatePicker", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault title={text("title", "Date Picker")} showFilter={false} />
	)))
	.add("With placeholder", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault placeholder={text("placeholder", "Pick date")} showFilter={false} />
	)))
	.add("With filter", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Date")} />
	)))
	.add("Without focus", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault showFilter={false} focused={boolean("focused", false)} />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			numberOfMonths={number("numberOfMonths", 2)}
			showFilter={false}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			defaultSelected={moment().subtract(1, "day")}
			showFilter={false}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			allowAllDates={boolean("allowAllDates", false)}
			showFilter={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			extra={object("extra", {
				withFullScreenPortal: true,
				showClearDate: true
			})}
			showFilter={false}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(DatePickerReadme), () => (
		<DatePickerRSDefault
			title={text("title", "Date Picker")}
			placeholder={text("placeholder", "Pick date")}
			numberOfMonths={number("numberOfMonths", 1)}
			allowAllDates={boolean("allowAllDates", true)}
			extra={object("extra", {
				withFullScreenPortal: false,
				showClearDate: false
			})}
			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Date")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/DateRange", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault showFilter={false} />
	)))
	.add("With title", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault showFilter={false} title={text("title", "Date Range")} />
	)))
	.add("With filter", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Date range")} />
	)))
	.add("Show more than 1 month", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			numberOfMonths={number("numberOfMonths", 3)}
			showFilter={false}
		/>
	)))
	.add("Default date", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			showFilter={false}
			defaultSelected={{
				start: moment().subtract(7, "days"),
				end: moment()
			}}
		/>
	)))
	.add("Enable days from today only", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			allowAllDates={boolean("allowAllDates", false)}
			showFilter={false}
		/>
	)))
	.add("Using extra prop object", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			showFilter={false}
			extra={object("extra", {
				withFullScreenPortal: true,
				showClearDate: true
			})}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(DateRangeReadme), () => (
		<DateRangeRSDefault
			title={text("title", "Date Range")}
			numberOfMonths={number("numberOfMonths", 2)}
			allowAllDates={boolean("allowAllDates", true)}
			extra={object("extra", {
				withFullScreenPortal: true,
				showClearDate: true
			})}
			queryFormat={select("queryFormat", {"epoch_millis":"epoch_millis","epoch_seconds":"epoch_seconds","date":"date","date_time":"date_time","date_time_no_millis":"date_time_no_millis","basic_date":"basic_date","basic_date_time":"basic_date_time","basic_date_time_no_millis":"basic_date_time_no_millis","basic_time":"basic_time","basic_time_no_millis":"basic_time_no_millis"}, "epoch_millis")}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Date range")}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/RangeSlider", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault />
	)))
	.add("With title", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault title={text("title", "RangeSlider: Prices")} />
	)))
	.add("With Default Selected", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			defaultSelected={object("defaultSelected", {
				start: 10,
				end: 50
			})}
		/>
	)))
	.add("Without histogram", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			showHistogram={boolean("showHistogram", false)}
		/>
	)))
	.add("With custom histogram interval", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault interval={number("interval", 50)} />
	)))
	.add("With Range Labels", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			rangeLabels={object("rangeLabels", {
				start: "$10",
				end: "$250"
			})}
		/>
	)))
	.add("With URLParams", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(RangeSliderReadme), () => (
		<RangeSliderRSDefault
			title={text("title", "RangeSlider: Prices")}
			range={object("range", {
				start: 10,
				end: 250
			})}
			stepValue={number("stepValue", 10)}
			interval={number("interval", 20)}
			defaultSelected={object("defaultSelected", {
				start: 10,
				end: 50
			})}
			rangeLabels={object("rangeLabels", {
				start: "$10",
				end: "$250"
			})}
			showHistogram={boolean("showHistogram", true)}
			URLParams={boolean("URLParams (not visible on storybook)", false)}
		/>
	)));

storiesOf("search/DataController", module)
	.addDecorator(withKnobs)
	.add("Basic", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault showFilter={false} />
	)))
	.add("With defaultSelected", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault defaultSelected={text("defaultSelected", "Audi")} />
	)))
	.add("With UI", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault
			title="DataController"
			visible={true}
			dataLabel={
				<p>★ A customizable UI widget ★</p>
			}
			showFilter={false}
		/>
	)))
	.add("With filter", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault showFilter={boolean("showFilter", true)} filterLabel={text("filterLabel", "Custom Filter Name")} />
	)))
	.add("With URLParams", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault showFilter={false} URLParams={boolean("URLParams (not visible on storybook)", true)} />
	)))
	.add("Playground", withReadme(removeFirstLine(DataControllerReadme), () => (
		<DataControllerRSDefault
			title={text("title", "DataController")}
			visible={boolean("visible", true)}
			dataLabel={text("dataLabel", "★  A customizable UI widget ★")}
			defaultSelected={text("defaultSelected", "default")}
			componentStyle={object("componentStyle", { "paddingBottom": "10px" })}
			showFilter={boolean("showFilter", true)}
			filterLabel={text("filterLabel", "Custom Filter Name")}
			URLParams={boolean("URLParams (not visible on storybook)", true)}
		/>
	)));
