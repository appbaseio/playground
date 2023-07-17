import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select,
  object,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import GeoDistanceSliderGoogleMap from "./reactivemaps/GeoDistanceSliderGoogleMap.stories";
import GeoDistanceDropdownGoogleMap from "./reactivemaps/GeoDistanceDropdownGoogleMap.stories";
import GeoDistanceDropDownOpenStreetMap from "./reactivemaps/GeoDistanceDropDownOpenStreetMap.stories";
import ReactiveGoogleMapDefault from "./reactivemaps/ReactiveGoogleMap.stories";
import ReactiveOpenStreetMapDefault from "./reactivemaps/ReactiveOpenStreetMapDefault.stories";
import GeoDistanceSliderOpenStreetMap from "./reactivemaps/GeoDistanceSliderOpenStreetMap.stories";

// import READMEs for each component
// List Components
import SingleListReadme from "docs/content/docs/reactivesearch/react/list/singlelist.md";
import MultiListReadme from "docs/content/docs/reactivesearch/react/list/multilist.md";
import SingleDataListReadme from "docs/content/docs/reactivesearch/react/list/singledatalist.md";
import MultiDataListReadme from "docs/content/docs/reactivesearch/react/list/multidatalist.md";
import SingleDropdownListReadme from "docs/content/docs/reactivesearch/react/list/singledropdownlist.md";
import MultiDropdownListReadme from "docs/content/docs/reactivesearch/react/list/multidropdownlist.md";
import TagCloudReadme from "docs/content/docs/reactivesearch/react/list/tagcloud.md";
import ToggleButtonReadme from "docs/content/docs/reactivesearch/react/list/togglebutton.md";

// import NestedListReadme from "@appbaseio/reactive-manual-v3/content/docs/list-components/NestedList.md";
// import NestedMultiListReadme from "@appbaseio/reactive-manual-v3/content/docs/list-components/NestedMultiList.md";
// Range Components
import SingleRangeReadme from "docs/content/docs/reactivesearch/react/range/singlerange.md";
import MultiRangeReadme from "docs/content/docs/reactivesearch/react/range/multirange.md";
import SingleDropdownRangeReadme from "docs/content/docs/reactivesearch/react/range/singledropdownrange.md";
import MultiDropdownRangeReadme from "docs/content/docs/reactivesearch/react/range/multidropdownrange.md";
import RangeSliderReadme from "docs/content/docs/reactivesearch/react/range/rangeslider.md";
import RangeInputReadme from "docs/content/docs/reactivesearch/react/range/rangeinput.md";
import DynamicRangeSliderReadme from "docs/content/docs/reactivesearch/react/range/dynamicrangeslider.md";
import RatingsFilterReadme from "docs/content/docs/reactivesearch/react/range/ratingsfilter.md";
import NumberBoxReadme from "docs/content/docs/reactivesearch/react/range/numberbox.md";
import DatePickerReadme from "docs/content/docs/reactivesearch/react/range/datepicker.md";
import DateRangeReadme from "docs/content/docs/reactivesearch/react/range/daterange.md";

// Search Components
import SearchBoxReadme from "docs/content/docs/reactivesearch/react/search/searchbox.md";

// Result Components
import ResultCardReadme from "docs/content/docs/reactivesearch/react/result/resultcard.md";
import ResultListReadme from "docs/content/docs/reactivesearch/react/result/resultlist.md";
import ReactiveListReadme from "docs/content/docs/reactivesearch/react/result/reactivelist.md";

// Map Components
import GeoDistanceSliderReadme from "docs/content/docs/reactivesearch/react/map/geodistanceslider.md";
import GeoDistanceDropdownReadme from "docs/content/docs/reactivesearch/react/map/geodistancedropdown.md";
import ReactiveMapReadme from "docs/content/docs/reactivesearch/react/map/reactivegooglemap.md";
import OpenstreetMapReadme from "docs/content/docs/reactivesearch/react/map/reactiveopenstreetmap.md";
// base components
// import SelectedFiltersReadme from "@appbaseio/reactive-manual-v3/content/docs/base-components/SelectedFilters.md";
// Advanced components
import ReactiveComponentReadme from "docs/content/docs/reactivesearch/react/advanced/reactivecomponent.md";
// import reactivesearch components
// import NestedListDefault from "./reactivesearch/NestedList.stories";
// import NestedMultiListDefault from "./reactivesearch/NestedMultiList.stories";
import DynamicRangeSliderDefault from "./reactivesearch/DynamicRangeSlider.stories";
import TagCloudDefault from "./reactivesearch/TagCloud.stories";
import RatingsFilterDefault from "./reactivesearch/RatingsFilter.stories";
import ResultCardDefault from "./reactivesearch/ResultCard.stories";
import ReactiveListDefault from "./reactivesearch/ReactiveList.stories";
import ResultListDefault from "./reactivesearch/ResultList.stories";
import SingleDataListRSDefault from "./reactivesearch/SingleDataList.stories";
import TabDataListDefault from "./reactivesearch/TabDataList.stories";
import MultiDataListRSDefault from "./reactivesearch/MultiDataList.stories";
import SearchBoxRSDefault from "./reactivesearch/SearchBox.stories";
import NumberBoxRSDefault from "./reactivesearch/NumberBox.stories";
import SingleListRSDefault from "./reactivesearch/SingleList.stories";
import MultiListRSDefault from "./reactivesearch/MultiList.stories";
import TreeListRSDefault from "./reactivesearch/TreeList.stories";
import TreeListCustomRenderer from './reactivesearch/TreeListCustomRenderer.stories';
import TreeListCustomSelectedFilters from './reactivesearch/TreeListCustomSelectedFilters.stories';
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
import ReactiveComponentStory from "./reactivesearch/ReactiveComponent.stories";
import CustomRecentIcon from './reactivesearch/CustomRecentIcon';
import CustomPopularIcon from './reactivesearch/CustomPopularIcon';
import ReactiveComponentWithDistinctFieldProp from './reactivesearch/ReactiveComponentWithDistinctFieldProp';
import SearchBoxWithIndexProp from './reactivesearch/SearchBoxWithIndexProp';
import MultiListWithIndexProp from './reactivesearch/MultiListWithIndexProp';
import AIAnswerDefault from "./reactivesearch/AIAnswer.stories";
// import ReactiveElement from "./reactivesearch/ReactiveElement";

import DarkStory from "./reactivesearch/Dark.stories";
import DarkCard from "./reactivesearch/DarkCard.stories";
import TagCloudDark from "./reactivesearch/TagCloudDark.stories";
import DatePickerDark from "./reactivesearch/DatePickerDark.stories";
import DateRangeDark from "./reactivesearch/DateRangeDark.stories";
import ErrorBoundaryDefault from "./reactivesearch/ErrorBoundary.stories";
import SearchBoxWithCustomAIRender from "./reactivesearch/SearchBoxWithCustomAIRender.stories";

require("./styles.css");

function removeFirstLine(str, number = 1) {
  while (number--) {
    str = str.substring(str.indexOf("\n") + 1);
  }
  return str;
}

// The function removes lines starting with // which crashes storybook
const removeCommentsLine = str => str.replace(/^.*    \/\/.*$/gm, "");

storiesOf("Base components/ReactiveComponent", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(ReactiveComponentReadme, 15),
    },
  })
  .add("A custom component", () => <ReactiveComponentStory />)
  .add("with onData", () => (
    <ReactiveComponentStory onData={action("Data Changed")} />
  ))
	.add(
    "With distinctField prop",
   () => (
      <ReactiveComponentWithDistinctFieldProp />
    )
  );

storiesOf("Base components/ErrorBoundary", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(ReactiveComponentReadme, 15),
    },
  })
  .add("default with DynamicRangeSlider", () => <ErrorBoundaryDefault />)
  .add("with renderError", ()=> <ErrorBoundaryDefault
          renderError={error => (
						<div>
							<h1>Oops! Error occured.</h1>
							<p>{error.message}</p>
						</div>
					)}/>)

// Reactivemaps components

storiesOf("Map Components/GeoDistanceSlider", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(GeoDistanceSliderReadme, 12),
    },
  })
  .add(
    "Basic",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          distance: 50
        }}
        unit="mi"
        placeholder="Search Location"
      />
    )
  )
  .add(
    "With title",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          distance: 50
        }}
        unit="mi"
        title={text("title", "Geo Distance Slider")}
        placeholder="Search Location"
      />
    )
  )
  .add(
    "With placeholder",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          distance: 50
        }}
        unit="mi"
        placeholder={text("placeholder", "Search Location")}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          distance: 50
        }}
        unit="mi"
        placeholder="Search Location"
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "GeoDistance filter")}
      />
    )
  )
  .add(
    "With Range Labels",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
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
    )
  )
  .add(
    "With Country Restrictions",
    () => (
      <GeoDistanceSliderGoogleMap
        placeholder="Search Location"
        dataField="location"
        unit="mi"
        range={{
          start: 10,
          end: 300
        }}
        countries={object("countries", ["us"])}
      />
    )
  )
  .add(
    "With defaultValue",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
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
    )
  )
  .add(
    "With autoLocation off",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          distance: 50
        }}
        unit="mi"
        title={text("title", "Geo Distance Slider")}
        placeholder="Search Location"
        autoLocation={boolean("autoLocation", false)}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          distance: 50
        }}
        unit="mi"
        placeholder="Search Location"
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With tooltipTrigger",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          distance: 50
        }}
        style={{ marginTop: "10px" }}
        unit="mi"
        placeholder="Search Location"
        tooltipTrigger={text("tooltipTrigger", "focus")}
      />
    )
  )
  .add(
    "Playground with Google Map",
    () => (
      <GeoDistanceSliderGoogleMap
        defaultValue={{
          location: "London",
          distance: 5
        }}
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
        countries={object("countries", ["uk"])}
      />
    )
  )
  .add(
    "Playground with OpenStreet Map",
    () => (
      <GeoDistanceSliderOpenStreetMap
        defaultValue={{
          location: "London",
          distance: 5
        }}
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
        countries={object("countries", ["uk"])}
      />
    )
  );

storiesOf("Map Components/GeoDistanceDropdown", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(GeoDistanceDropdownReadme, 12),
    },
  })
  .add(
    "Basic",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        placeholder="Search Location"
      />
    )
  )
  .add(
    "With title",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        title={text("title", "Geo Distance Slider")}
        placeholder="Search Location"
      />
    )
  )
  .add(
    "With Country Restrictions",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        title="Geo Distance Slider"
        placeholder="Search Location"
        countries={object("countries", ["us"])}
      />
    )
  )
  .add(
    "With placeholder",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        placeholder={text("placeholder", "Search Location")}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        placeholder="Search Location"
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "GeoDistance filter")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        defaultValue={{
          label: "Under 100 miles",
          location: "London"
        }}
        title="Geo Distance Search"
        placeholder="Search Location"
      />
    )
  )
  .add(
    "Without autoLocation",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        placeholder="Search Location"
        autoLocation={boolean("autoLocation", false)}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <GeoDistanceDropdownGoogleMap
        unit="mi"
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        placeholder="Search Location"
        URLParams={boolean("URLParams (not visible in storybook)", true)}
      />
    )
  )
  .add(
    "Playground with Google map",
    () => (
      <GeoDistanceDropdownGoogleMap
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        unit={select(
          "unit",
          {
            mi: "mi",
            miles: "miles",
            yd: "yd",
            yards: "yards",
            ft: "ft",
            feet: "feet",
            in: "in",
            inch: "inch",
            km: "km",
            kilometers: "kilometers",
            m: "m",
            meters: "meters",
            cm: "cm",
            centimeters: "centimeters",
            mm: "mm",
            millimeters: "millimeters",
            NM: "NM",
            nmi: "nmi",
            nauticalmiles: "nauticalmiles"
          },
          "mi"
        )}
        title={text("title", "Geo Distance Slider")}
        defaultValue={{
          label: "Under 100 miles",
          location: "London"
        }}
        placeholder={text("placeholder", "Search Location")}
        placeholderDropdown={text("placeholderDropdown", "Select radius")}
        autoLocation={boolean("autoLocation", true)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "GeoDistance filter")}
        URLParams={boolean("URLParams (not visible in storybook)", true)}
        countries={object("countries", ["uk"])}
      />
    )
  )
  .add(
    "Playground with OpenStreet map",
    () => (
      <GeoDistanceDropDownOpenStreetMap
        data={[
          { distance: 100, label: "Under 100 miles" },
          { distance: 200, label: "Under 200 miles" },
          { distance: 500, label: "Under 500 miles" },
          { distance: 1000, label: "Under 1000 miles" }
        ]}
        unit={select(
          "unit",
          {
            mi: "mi",
            miles: "miles",
            yd: "yd",
            yards: "yards",
            ft: "ft",
            feet: "feet",
            in: "in",
            inch: "inch",
            km: "km",
            kilometers: "kilometers",
            m: "m",
            meters: "meters",
            cm: "cm",
            centimeters: "centimeters",
            mm: "mm",
            millimeters: "millimeters",
            NM: "NM",
            nmi: "nmi",
            nauticalmiles: "nauticalmiles"
          },
          "mi"
        )}
        title={text("title", "Geo Distance Slider")}
        defaultValue={{
          label: "Under 100 miles",
          location: "London"
        }}
        placeholder={text("placeholder", "Search Location")}
        placeholderDropdown={text("placeholderDropdown", "Select radius")}
        autoLocation={boolean("autoLocation", true)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "GeoDistance filter")}
        URLParams={boolean("URLParams (not visible in storybook)", true)}
        countries={object("countries", ["uk"])}
      />
    )
  );

storiesOf("Map Components/ReactiveGoogleMap", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(ReactiveMapReadme, 12),
    },
  })
  .add(
    "Basic",
      () => <ReactiveGoogleMapDefault showMarkerClusters={false} />
  )
  .add(
    "With showMarkerClusters",
      () => (
        <ReactiveGoogleMapDefault
          showMarkers
          showMarkerClusters={boolean("showMarkerClusters", true)}
        />
      )
  )
  .add(
    "With autoCenter",
      () => (
        <ReactiveGoogleMapDefault autoCenter={boolean("autoCenter", true)} />
      )
  )
  .add(
    "With showSearchAsMove",
      () => (
        <ReactiveGoogleMapDefault
          showSearchAsMove={boolean("showSearchAsMove", true)}
        />
      )
  )
  .add(
    "With searchAsMove",
      () => (
        <ReactiveGoogleMapDefault
          searchAsMove={boolean("searchAsMove", false)}
        />
      )
	)
	.add(
    "With loader",
      () => (
        <ReactiveGoogleMapDefault
          loader={text("loader", "Loading ...")}
        />
      )
  )
  .add(
    "With showMapStyles",
      () => (
        <ReactiveGoogleMapDefault
          showMapStyles={boolean("showMapStyles", true)}
        />
      )
  )
  .add(
    "With defaultMapStyle",
      () => (
        <ReactiveGoogleMapDefault
          defaultMapStyle={select(
            "defaultMapStyle",
            {
              Standard: "Standard",
              "Blue Essence": "Blue Essence",
              "Blue Water": "Blue Water",
              "Flat Map": "Flat Map",
              "Light Monochrome": "Light Monochrome",
              "Midnight Commander": "Midnight Commander",
              "Unsaturated Browns": "Unsaturated Browns"
            },
            "Standard"
          )}
        />
      )
  )
  .add(
    "With size",
      () => <ReactiveGoogleMapDefault size={number("size", 100)} />
  )
  .add(
    "With defaultZoom",
      () => <ReactiveGoogleMapDefault defaultZoom={number("defaultZoom", 13)} />
  )
  .add(
    "With onError",
      () => <ReactiveGoogleMapDefault onError={action("onError")} />
  )
  .add(
    "With renderError",
      () => (
        <ReactiveGoogleMapDefault
          renderError={() => (
            <div style={{ color: "red" }}>Something went wrong!</div>
          )}
        />
      )
  )
  .add(
    "With defaultCenter",
      () => (
        <ReactiveGoogleMapDefault
          defaultCenter={object("defaultCenter", {
            lat: 37.74,
            lng: -122.45
          })}
        />
    )
  )
  .add(
    "Playground",
      () => (
        <ReactiveGoogleMapDefault
          title={text("title", "Reactive maps")}
          showMarkerCluster={boolean("showMarkerCluster", true)}
          autoCenter={boolean("autoCenter", true)}
          showSearchAsMove={boolean("showSearchAsMove", true)}
          searchAsMove={boolean("searchAsMove", false)}
          showMapStyles={boolean("showMapStyles", false)}
          defaultMapStyle={select(
            "defaultMapStyle",
            {
              Standard: "Standard",
              "Blue Essence": "Blue Essence",
              "Blue Water": "Blue Water",
              "Flat Map": "Flat Map",
              "Light Monochrome": "Light Monochrome",
              "Midnight Commander": "Midnight Commander",
              "Unsaturated Browns": "Unsaturated Browns"
            },
            "Standard"
          )}
          size={number("size", 100)}
          defaultZoom={number("defaultZoom", 13)}
          defaultCenter={object("defaultCenter", {
            lat: 37.74,
            lng: -122.45
          })}
        />
    )
  );

// Stories for OpenStreet Map
storiesOf("Map Components/ReactiveOpenStreetMap", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(OpenstreetMapReadme, 12),
    },
  })
  .add(
    "Basic",
      () => <ReactiveOpenStreetMapDefault />
  )
  .add(
    "With autoCenter",
      () => (
        <ReactiveOpenStreetMapDefault
          autoCenter={boolean("autoCenter", true)}
        />
      )
	)
	.add(
    "With loader",
      () => (
        <ReactiveOpenStreetMapDefault
          loader={text("loader", "Loading ...")}
        />
      )
  )
  .add(
    "With onError",
      () => <ReactiveOpenStreetMapDefault onError={action("onError")} />
  )
  .add(
    "With renderError",
      () => (
        <ReactiveOpenStreetMapDefault
          renderError={() => (
            <div style={{ color: "red" }}>Something went wrong!</div>
          )}
        />
      )
  )
  .add(
    "With size",
      () => <ReactiveOpenStreetMapDefault size={number("size", 100)} />
  )
  .add(
    "With showSearchAsMove",
      () => (
        <ReactiveOpenStreetMapDefault
          showSearchAsMove={boolean("showSearchAsMove", true)}
        />
      )
  )
  .add(
    "With searchAsMove",
      () => (
        <ReactiveOpenStreetMapDefault
          searchAsMove={boolean("searchAsMove", false)}
        />
      )
  )
  .add(
    "With defaultZoom",
      () => (
        <ReactiveOpenStreetMapDefault defaultZoom={number("defaultZoom", 13)} />
      )
  )
  .add(
    "With defaultCenter",
      () => (
        <ReactiveOpenStreetMapDefault
          defaultCenter={object("defaultCenter", {
            lat: 37.74,
            lng: -122.45
          })}
        />
    )
  )
  .add(
    "Playground",
      () => (
        <ReactiveOpenStreetMapDefault
          title={text("title", "Reactive maps")}
          showMarkerCluster={boolean("showMarkerCluster", true)}
          autoCenter={boolean("autoCenter", true)}
          size={number("size", 100)}
          defaultZoom={number("defaultZoom", 13)}
          defaultCenter={object("defaultCenter", {
            lat: 37.74,
            lng: -122.45
          })}
        />
    )
  );

// Reactivesearch components

// storiesOf("search/NestedList", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title=""
//
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title={text("title", "Car Category")}
//
// 		/>
// 	)))
// 	.add("Default selection", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			defaultValue={array("defaultValue", ["bmw", "x series"])}
//
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
//
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(NestedListReadme), () => (
// 		<NestedListDefault
// 			title={text("title", "NestedList: Car Filter")}
// 			size={number("size", 100)}
// 			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
// 			defaultValue={array("defaultValue", ["bmw", "x series"])}
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
//
// 		/>
// 	)))
// 	.add("With title", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title={text("title", "Car Category")}
//
// 		/>
// 	)))
// 	.add("Default selection", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			defaultValue={array("defaultValue", ["bmw", "x series"])}
//
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
//
// 		/>
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(NestedMultiListReadme), () => (
// 		<NestedMultiListDefault
// 			title={text("title", "NestedMultiList: Car Filter")}
// 			size={number("size", 100)}
// 			sortBy={select("sortBy", { asc: "asc", desc: "desc", count: "count" }, "count")}
// 			defaultValue={array("defaultValue", ["bmw", "x series"])}
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
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(DynamicRangeSliderReadme, 15),
    },
  })
  .add(
    "Basic",
   () => (
      <DynamicRangeSliderDefault />
    )
  )
  .add(
    "With title",
   () => (
      <DynamicRangeSliderDefault
        title={text("title", "Books")}
      />
    )
  )
  .add(
    "With labels",
   () => (
      <DynamicRangeSliderDefault
        title={text("title", "Books")}
        rangeLabels={(min, max) => ({
          start: min + " book",
          end: max + " books"
        })}
      />
    )
  )
  .add(
    "With custom stepValue",
   () => (
      <DynamicRangeSliderDefault
        stepValue={number("stepValue", 1)}
      />
    )
  )
  .add(
    "Without histogram",
   () => (
      <DynamicRangeSliderDefault
        showHistogram={boolean("showHistogram", false)}
      />
    )
  )
  .add(
    "With filters",
   () => (
      <DynamicRangeSliderDefault showFilter={boolean("showFilter", true)} />
    )
  )
  .add(
    "With defaultValue",
   () => (
      <DynamicRangeSliderDefault
        defaultValue={() => ({
          start: 500,
          end: 2000
        })}
      />
    )
  )
  .add(
    "With onDrag",
    () => (
      <DynamicRangeSliderDefault
        defaultValue={() => ({
          start: 500,
          end: 2000
        })}
        onDrag={(selected, boundary) => {
          console.log(selected, boundary);
        }}
      />
    )
  )
  .add(
    "With URLParams",
   () => (
      <DynamicRangeSliderDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With tooltipTrigger",
   () => (
      <DynamicRangeSliderDefault
        tooltipTrigger={text("tooltipTrigger", "always")}
      />
    )
  )
  .add(
    "With loader",
   () => (
      <DynamicRangeSliderDefault loader="Loading..." />
    )
  )
  .add(
    "With date support",
    () => (
      <DynamicRangeSliderDefault
        dataField="timestamp"
        title="Date Range Example"
        queryFormat="date"
      />
    )
  )
  .add(
    "With URLParams (date type)",
    () => (
      <DynamicRangeSliderDefault
        dataField="timestamp"
        title="Date Range Example with URLParams prop"
        queryFormat="date"
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With queryFormat (supported for date type)",
    () => (
      <DynamicRangeSliderDefault
        dataField="timestamp"
        title="Date Range Example with queryFormat prop"
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
      />
    )
  )
  .add(
    "With calendarInterval (supported for date type)",
    () => (
      <DynamicRangeSliderDefault
        dataField="timestamp"
        title="Date Range Example with calendarInterval prop"
        showHistogram={boolean('showHistogram', true)}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
        calendarInterval={select('calendarInterval', ['year','quarter','month', 'week','day','hour','minute'],'quarter')}
      />
    )
  )
  .add(
    "Playground",
   () => (
      <DynamicRangeSliderDefault
        title={text("title", "DynamicRangeSlider: Books")}
        showFilter={boolean("showFilter", true)}
        dataField={select(
          "dataField",
          ["books_count", "original_publication_year", "ratings_count",'timestamp'],
          "books_count"
        )}
        defaultValue={(min, max) => ({
          start: min,
          end: max
        })}
        stepValue={number("stepValue", 1)}
        showHistogram={boolean("showHistogram", true)}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
        calendarInterval={select('calendarInterval', ['year','quarter','month', 'week','day','hour','minute'],'month')}
      />
    )
  );

storiesOf("Base components/TagCloud", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(TagCloudReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <TagCloudDefault />
    )
  )
  .add(
    "With title",
    () => (
      <TagCloudDefault title={text("title", "Cities")} />
    )
  )
  .add(
    "With showCount",
    () => (
      <TagCloudDefault
        showCount={boolean("showCount", true)}
      />
    )
  )
  .add(
    "With custom filter",
    () => (
      <TagCloudDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Cities filter")}
      />
    )
  )
  .add(
    "With multiSelect",
    () => (
      <TagCloudDefault
        multiSelect={boolean("multiSelect", true)}
      />
    )
  )
  .add(
    "With defaultValue",
    () => (
      <TagCloudDefault
        defaultValue={["Auckland"]}
      />
    )
  )
  .add(
    "With multiSelect on and defaultValue",
    () => (
      <TagCloudDefault
        multiSelect
        defaultValue={["Auckland", "Amsterdam"]}
      />
    )
  )
  .add(
    "With multiSelect off and defaultValue",
    () => (
      <TagCloudDefault defaultValue={["Auckland"]} />
    )
  )
  .add(
    "With sortBy",
    () => (
      <TagCloudDefault
        sortBy={select("sortBy", ["asc", "desc"], "asc")}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <TagCloudDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With loader",
    () => (
      <TagCloudDefault loader="Loading..." />
    )
  )
  .add(
    "Playground",
    () => (
      <TagCloudDefault
        title={text("title", "TagCloud: City Filter")}
        dataField={select(
          "dataField",
          ["group.group_city.keyword", "group.group_topics.topic_name_raw.keyword"],
          "group.group_city.keyword"
        )}
        size={number("size", 100)}
        multiSelect
        defaultValue={["Auckland"]}
        showCount={boolean("showCount", true)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Cities filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );

storiesOf("Range components/RatingsFilter", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(RatingsFilterReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <RatingsFilterDefault />
    )
  )
  .add(
    "With title",
    () => (
      <RatingsFilterDefault
        title={text("title", "Ratings")}
      />
    )
  )
  .add(
    "With defaultValue",
    () => (
      <RatingsFilterDefault
        defaultValue={{ start: 2, end: 5 }}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <RatingsFilterDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <RatingsFilterDefault
        title={text("title", "RatingsFilter")}
        data={object("data", [
          { start: 4, end: 5, label: "4 stars and up" },
          { start: 3, end: 5, label: "3 stars and up" },
          { start: 2, end: 5, label: "2 stars and up" },
          { start: 1, end: 5, label: "> 1 stars" }
        ])}
        defaultValue={{ start: 2, end: 5 }}
        filterLabel={text("filterLabel", "Ratings filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );


storiesOf("Result components/ReactiveList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(ReactiveListReadme, 15),
    },
  })
  .add(
    "Basic",
   () => (
      <ReactiveListDefault />
    )
  )
  .add(
    "With pagination",
   () => (
      <ReactiveListDefault
        pagination={boolean("pagination", true)}
        paginationAt={select(
          "paginationAt",
          { bottom: "bottom", top: "top", both: "both" },
          "bottom"
        )}
				pages={number("pages", 5)}
				showEndPage={boolean("showEndPage", false)}
        title="Meetups"
      />
    )
  )
  .add(
    "With infinite loading",
   () => (
      <ReactiveListDefault pagination={false} />
    )
  )
  .add(
    "With scrollTarget",
   () => (
      <ReactiveListDefault
        pagination={false}
        scrollTarget={text("scrollTarget", "results")}
        scrollTargetStory
      />
    )
  )
  .add(
    "With custom sort order",
   () => (
      <ReactiveListDefault
        sortBy={select("sortBy", { asc: "asc", desc: "desc" }, "asc")}
      />
    )
  )
  .add(
    "With Sort Options",
   () => (
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
    )
  )
  .add(
    "With onQueryChange",
   () => (
      <ReactiveListDefault onQueryChange={action("Query Changed")} />
    )
  )
  .add(
    "With onData",
   () => (
      <ReactiveListDefault onData={action("Data Changed")} />
    )
  )
  .add(
    "With renderResultStats",
   () => (
      <ReactiveListDefault
				pagination
        renderResultStats={({
          numberOfResults,
          numberOfPages,
          time,
          currentPage,
					...rest
        }) => {
					return (
						<span>
							<h3 style={{ color: 'green' }}>
								{numberOfResults} found in {time}.
							</h3>{' '}
							<h4>
								Page {(currentPage+1)}/{numberOfPages}
							</h4>
						</span>
					)
				}}
      />
    )
  )
	.add(
    "With distinctField prop",
   () => (
      <ReactiveListDefault
				distinctField="authors.keyword"
				distinctFieldConfig={{
					inner_hits: {
						name: 'most_recent',
						size: 5,
						sort: [{ timestamp: 'asc' }],
					},
					max_concurrent_group_searches: 4,
				}}
			/>
    )
  )
	.add(
    "With renderNoResults prop",
   () => (
      <ReactiveListDefault
       dataField=""
       renderNoResults={() => <p>No Results Found!</p>}
			/>
    )
  )
	.add(
    "With renderItem prop",
   () => (
      <ReactiveListDefault
       renderItem={
        (data) => {
            return (
              <div style={{ display: 'flex', flexDirection: "column", width: "250px", padding: "1rem", margin:"5px", boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)", background: "white" }} key={data._id}>
                <img src={data.image} alt="Book Cover" style={{ height: "220px", width: "100%", objectFit: 'cover', marginBottom: ".5rem" }} />
                <div style={{}}>
                  <h3 style={{ margin: "0" }} className="book-header">{data.original_title}</h3>
                  <div className="flex column justify-space-between">
                    <div>
                      <div>
                        by <span style={{ color: "#9d9d9d" }} >{data.authors}</span>
                      </div>
                      <div style={{ padding: "10px 0" }}>
                        <span className="stars">
                          {Array(data.average_rating_rounded)
                            .fill('x')
                            .map((item, index) => (
                              <span>⭐</span>
                            )) // eslint-disable-line
                          }
                        </span>
                        <span style={{ marginLeft: '5px', color: "#6b6b6b" }}>({data.average_rating} avg)</span>
                      </div>
                    </div>
                    <span>Pub {data.original_publication_year}</span>
                  </div>
                </div>
              </div>
            );
          }
       }
			/>
    )
  )
  .add(
    "Playground",
   () => (
      <ReactiveListDefault
        title={text("title", "ReactiveList: Results")}
        dataField={select(
          "dataField",
          ["original_title.keyword", "authors.keyword", "original_series.keyword"],
          "original_title.keyword"
        )}
        placeholder={text("placeholder", "Select from list")}
        // initialLoader={text("initialLoader", "Loading results..")}
        // noResults={text("noResults", "No results found!")}
        showResultStats={boolean("showResultStats", true)}
        onData={action("Data Changed")}
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
        includeFields={array("includeFields", ["*"])}
        excludeFields={array("excludeFields", [])}
        // stream={boolean("stream", false)}
        sortBy={select("sortBy", { asc: "asc", desc: "desc" }, "asc")}
      />
    )
  );

storiesOf("Result components/ResultCard", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(ResultCardReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <ResultCardDefault index="good-books-clone" />
    )
  )
  .add(
    "With size",
    () => (
      <ResultCardDefault size={number("size", 12)} />
    )
  )
  .add(
    "Hide resultStats",
    () => (
      <ResultCardDefault showResultStats={boolean("showResultStats", false)} />
    )
  )
  .add(
    "With infinite loading",
    () => (
      <ResultCardDefault pagination={false} />
    )
  )
  .add(
    "With pagination",
    () => (
      <ResultCardDefault
        pagination={boolean("pagination", true)}
        paginationAt={text("paginationAt", "bottom")}
      />
    )
  )
  .add(
    "With onQueryChange",
    () => (
      <ResultCardDefault onQueryChange={action("Query Changed")} />
    )
  )
  .add(
    "With Sort Options",
    () => (
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
    )
  )
  .add(
    "With onData",
    () => (
      <ResultCardDefault onData={action("Data Changed")} />
  ))
  .add(
    "Playground",
    () => (
      <ResultCardDefault
        size={number("size", 12)}
        dataField={select(
          "dataField",
          ["original_title.raw", "authors.raw", "original_series.raw"],
          "original_title.raw"
        )}
        showResultStats={boolean("showResultStats", true)}
        onData={action("Data Changed")}
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
        includeFields={array("includeFields", ["*"])}
        excludeFields={array("excludeFields", [])}
      />
    )
  );

storiesOf("Result components/ResultList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(ResultListReadme, 15),
    },
  })
  .add(
    "Basic",
   () => (
      <ResultListDefault />
    )
  )
  .add(
    "With size",
   () => (
      <ResultListDefault size={text("size", 5)} />
    )
  )
  .add(
    "Hide resultStats",
   () => (
      <ResultListDefault showResultStats={boolean("showResultStats", false)} />
    )
  )
  .add(
    "With infinite loading",
   () => (
      <ResultListDefault size={10} pagination={false} />
    )
  )
  .add(
    "With pagination",
   () => (
      <ResultListDefault
        pagination={boolean("pagination", true)}
        paginationAt={text("paginationAt", "bottom")}
      />
    )
  )
  .add(
    "With onQueryChange",
   () => (
      <ResultListDefault onQueryChange={action("Query Changed")} />
    )
  )
  .add(
    "With Sort Options",
   () => (
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
    )
  )
  .add(
    "With onData",
    () => (
      <ResultCardDefault onData={action("Data Changed")} />
    )
  )
  .add(
    "Playground",
   () => (
      <ResultListDefault
        title={text("title", "Cars result")}
        dataField={select(
          "dataField",
          ["original_title.keyword", "authors.keyword", "original_series.keyword"],
          "original_title.keyword"
        )}
        size={number("size", 5)}
        showResultStats={boolean("showResultStats", true)}
        onData={action("Data Changed")}
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
        includeFields={array("includeFields", ["*"])}
        excludeFields={array("excludeFields", [])}
        paginationAt={text("paginationAt", "bottom")}
      />
    )
  );

storiesOf("Search components/AIAnswer", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(SearchBoxReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <AIAnswerDefault />
    )
  )
  .add("With showVoiceInput", () => (
    <AIAnswerDefault showVoiceInput={boolean("showVoiceInput", true)} />
  ))
  .add("With showIcon", () => (
    <AIAnswerDefault showIcon={boolean("showIcon", true)} />
  ))
  .add("With iconPosition", () => (
    <AIAnswerDefault
      iconPosition={select("iconPosition", ["left", "right"], "left")}
    />
  ))
  .add("With placeholder", () => (
    <AIAnswerDefault
      placeholder={text("placeholder", "Ask something...")}
    />))
  .add(
    "with custom icon",
    () => (
      <AIAnswerDefault
        icon={<div>📚</div>}
      />
    )
  )
  .add("With showInput", () => (
    <AIAnswerDefault showInput={boolean("showInput", true)} />
  ))
  .add("With enterButton", () => (
    <AIAnswerDefault enterButton={boolean("enterButton", true)} />
  ))
  .add("With renderEnterButton", () => (
    <AIAnswerDefault renderEnterButton={(cb) => <button style={{height: "100%"}} onClick={cb}>📚</button>} />
  ))
  .add("With title", () => (
    <AIAnswerDefault
      title={text("title", "AI ChatBox")}
    />))
  .add("With themePreset", () => (
    <AIAnswerDefault
      themePreset={select("themePreset", ["light", "dark"], "dark")}
    />))
  .add("With render prop", () => (
    <AIAnswerDefault
      render={({ loading, data, error, rawData }) => {
					if (loading) {
						return 'loading...';
					}
					if (error) {
						return <div style={{overflowWrap:"anywhere"}}>{JSON.stringify(error)}</div>;
					}
					if (data && Array.isArray(data)) {
						return (
							<div style={{ width: '80%', margin: '0 auto', padding: '20px' }}>
								{data.map((message, index) => {
									const isSender = message.role === 'user';
									const messageStyle = {
										backgroundColor: isSender ? '#cce5ff' : '#f8f9fa',
										padding: '10px',
										borderRadius: '7px',
										marginBottom: '10px',
										maxWidth: '80%',
										alignSelf: isSender ? 'flex-end' : 'flex-start',
										display: 'inline-block',
										border: '1px solid',
										color: isSender ? '#004085' : '#383d41',
										position: 'relative',
										whiteSpace: 'pre-wrap',
									};
									return (
										<div
											key={index}
											style={{
												display: 'flex',
												justifyContent: isSender
													? 'flex-end'
													: 'flex-start',
											}}
										>
											<div style={messageStyle}>{message.content}</div>
										</div>
									);
								})}
							</div>
						);
					}
	      }}
    />))
  .add("With showSourceDocuments", () => (
    <AIAnswerDefault showSourceDocuments={boolean("showSourceDocuments", true)} />
  ))
  .add("With renderSourceDocument", () => (
    <AIAnswerDefault
      showSourceDocuments={true}
      renderSourceDocument={(obj) => {
        return <span>❤️ {obj.original_title}</span>;
        }
      }
    />
  ))
  .add("With triggerOn", () => (
    <AIAnswerDefault
      triggerOn={select("themePtriggerOnreset", ["manual", "question", "always"], "manual")}
    />
  ))
  .add("With renderTriggerMessage", () => (
    <AIAnswerDefault
      triggerOn={select("triggerOn", ["manual", "question", "always"], "manual")}
      renderTriggerMessage={<div>Click to trigger AI answer!!</div>}
    />
  ))



storiesOf("Search components/SearchBox", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(SearchBoxReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <SearchBoxRSDefault placeholder="Search Books..." />
    )
  )
  .add(
    "With enableAI",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        enableAI={boolean("enableAI", true)}
      />
    )
  )
  .add(
    "With enableAI + askButton + enterButton",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        enableAI={true}
        AIUIConfig={{
          askButton: boolean("askButton", true)
        }}
        enterButton={ boolean("enterButton", true)}
      />
    )
  )
  .add(
    "With triggerOn",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        enableAI={true}
        AIUIConfig={{
          triggerOn: select("mode", ["manual", "question"], "manual"),
          askButton: true
        }}
      />
    )
  )
  .add(
    "With triggerOn + renderTriggerMessage",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        enableAI={true}
        AIUIConfig={{
          triggerOn: select("mode", ["manual", "question"], "manual"),
          renderTriggerMessage: <div>Click to trigger AIAnswer</div>,
          askButton: true
        }}
      />
    )
  )
  .add(
    "With renderAIAnswer prop",
    () => (
      <SearchBoxWithCustomAIRender
        placeholder="Search Books..."
        enableAI={boolean("enableAI", true)}
      />
    )
  )
  .add(
    "With mode prop",
    () => (
      <SearchBoxRSDefault
        mode={select("mode", ["tag", "select"], "tag")}
        placeholder="Search Books..."
      />
    )
  )
  .add(
    "With title",
    () => (
      <SearchBoxRSDefault
        title={text("title", "Books Search")}
        placeholder="Search Books..."
      />
    )
  )
  .add(
    "wihout search icon",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        showIcon={boolean("showIcon", false)}
      />
    )
  )
  .add(
    "with iconPosition",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        iconPosition={select("iconPosition", ["left", "right"], "left")}
      />
    )
  )
  .add(
    "with custom icon",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        icon={<div>📚</div>}
        iconPosition={select("iconPosition", ["left", "right"], "left")}
      />
    )
  )
  .add(
    "with showClear",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        showClear={boolean("showClear", true)}
      />
    )
  )
  .add(
    "with custom clearIcon",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        showClear={boolean("showClear", true)}
        clearIcon={<div>❌</div>}
      />
    )
  )
  .add(
    "with custom suggestions icon",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        enablePopularSuggestions
        enableRecentSuggestions
        innerClass={{
          'recent-search-icon': 'recent-icon',
          'popular-search-icon': 'popular-icon',
        }}
        recentSearchesIcon={<CustomRecentIcon />}
        popularSearchesIcon={<CustomPopularIcon />}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
      />
    )
  )
  .add(
    "with debounce",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        debounce={number("debounce", 300)}
      />
    )
  )
  .add(
    "With strictSelection",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        strictSelection={boolean("strictSelection", true)}
      />
    )
	)
	.add(
    "with searchOperators",
    () => (
      <SearchBoxRSDefault searchOperators={boolean("searchOperators", true)} placeholder="Search Books..." />
    )
	)
	.add(
    "with showVoiceSearch",
    () => (
      <SearchBoxRSDefault showVoiceSearch={boolean("showVoiceSearch", true)} placeholder="Search Books..." />
    )
  )
  .add(
    "Without autosuggest",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        autosuggest={boolean("autosuggest", false)}
      />
    )
  )
  .add(
    "With enablePredictiveSuggestions",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        enablePredictiveSuggestions={boolean("enablePredictiveSuggestions", true)}
      />
    )
  )
  .add(
    "With custom renderer",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        render={({
          value,
          data,
          downshiftProps: { isOpen, getItemProps, highlightedIndex }
        }) =>
          isOpen &&
          Boolean(value && value.length) && (
            <div
              style={{
                position: "absolute",
                padding: 10,
                color: "#424242",
                fontSize: "0.9rem",
                border: "1px solid #ddd",
                borderRadius: 4,
                marginTop: 10,
                width: "100%"
              }}
            >
              {
                <div>
                  {data.slice(0, 5).map((suggestion, index) => (
                    <div
                      style={{
                        padding: 10,
                        background:
                          index === highlightedIndex ? "#eee" : "transparent"
                      }}
                      key={suggestion.value}
                      {...getItemProps({ item: suggestion })}
                    >
                      {suggestion.value}
                    </div>
                  ))}
                  {Boolean(value.length) && (
                    <div
                      style={{
                        color: "dodgerblue",
                        padding: 10,
                        cursor: "pointer",
                        background:
                          highlightedIndex === data.slice(0, 5).length
                            ? "#eee"
                            : "transparent"
                      }}
                      {...getItemProps({
                        item: { label: value, value: value }
                      })}
                    >
                      Show all results for "{value}"
                    </div>
                  )}
                </div>
              }
            </div>
          )
        }
      />
    )
  )
  .add(
    "With onData",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        onData={action("Data Updated", (props)=>{console.log(props)})}
      />
    )
  )
  .add(
    "With defaultValue",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        defaultValue={text("defaultValue", "Harry Potter")}
      />
    )
  )
  .add(
    "With defaultSuggestions",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        defaultSuggestions={[
          { label: "Sherlock Holmes", value: "Sherlock Holmes" },
          { label: "The Lord of the Rings", value: "The Lord of the Rings" }
        ]}
      />
    )
  )
  .add(
    "With fuzziness as a number",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        fuzziness={number("fuzziness", 1)}
      />
    )
  )
  .add(
    "With fuzziness as AUTO",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        fuzziness="AUTO"
      />
    )
  )
  .add(
    "With highlight",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        highlight={boolean("highlight", true)}
      />
    )
  )
  .add(
    "With queryFormat",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
      />
    )
  )
  .add(
    "With onValueSelected",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        onValueSelected={action("onValueSelected", (valueSelected, cause) => { console.log(valueSelected, cause);})}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With renderNoSuggestion",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        renderNoSuggestion="No suggestions found."
      />
    )
  )
  .add(
    "With loader",
    () => (
      <SearchBoxRSDefault
        placeholder="Search Books..."
        loader="Loading suggestions..."
      />
    )
  )
	.add(
		"With enablePopularSuggestions & popularSuggestionsConfig",
		() => (
			<SearchBoxRSDefault
        enablePopularSuggestions={boolean('enablePopularSuggestions', true)}
        popularSuggestionsConfig={object("popularSuggestionsConfig", {
          size: 3,
					minChars:  3,
          index: 'good-books-ds',
          showGlobal: false
        })}
			/>
		)
  )
  .add(
		"With enableRecentSuggestions & recentSuggestionsConfig",
		() => (
			<SearchBoxRSDefault
        enableRecentSuggestions={boolean('enableRecentSuggestions', true)}
        recentSuggestionsConfig={object("recentSuggestionsConfig", {
          size: 3,
          minChars: 3,
          minHits:  2,
          index: 'good-books-ds'
        })}
			/>
		)
  )
  .add(
		"With applyStopwords prop",
		() => (
			<SearchBoxRSDefault
        applyStopwords={boolean("applyStopwords", true)}
			/>
		)
  )
  .add(
		"With customStopwords prop",
		() => (
			<SearchBoxRSDefault
        customStopwords={array("customStopwords", ['and','the'])}
			/>
		)
	)
	.add(
    "With distinctField prop",
   () => (
      <SearchBoxRSDefault
				title="DataSearch"
				dataField={['original_title', 'original_title.search']}
				distinctField="authors.keyword"
				distinctFieldConfig={{
					inner_hits: {
						name: 'most_recent',
						size: 5,
						sort: [{ timestamp: 'asc' }],
					},
					max_concurrent_group_searches: 4,
				}}
				componentId="BookSensor"
			/>
    )
  )
	.add(
    "With index prop",
   () => (
      <SearchBoxWithIndexProp />
		)
	)
  	.add(
    "With autoFocus prop",
   () => (
      <SearchBoxRSDefault
				autoFocus
			/>
    )
  )
  	.add(
    "With focusShortcuts prop",
   () => (
      <SearchBoxRSDefault
				focusShortcuts={['r']}
				placeholder='Press "r" to focus the searchbox'
			/>
    )
  )
    	.add(
    "With addonBefore prop",
   () => (
      <SearchBoxRSDefault
				addonBefore={<h3> Before</h3>}
			/>
    )
  )
    	.add(
    "With addonAfter prop",
   () => (
      <SearchBoxRSDefault
				addonAfter={<h3> After</h3>}
			/>
    )
  )
    	.add(
    "With addonBefore & addonAfter prop",
   () => (
      <SearchBoxRSDefault
	   			addonBefore={<h3> Before</h3>}
				addonAfter={<h3> After</h3>}
			/>
    )
  )
    	.add(
    "With expandSuggestionsContainer prop",
   () => (
      <SearchBoxRSDefault
	   			addonBefore={<h3> Before</h3>}
				addonAfter={<h3> After</h3>}
	   			expandSuggestionsContainer={boolean("expandSuggestionsContainer",false)}
			/>
    )
  )
  .add(
    "Playground",
    () => (
      <SearchBoxRSDefault
        title={text("title", "DataSearch: Books...")}
        dataField={array("dataField", [{field:"original_title", weight:3}, {field:"original_title.search", weight:1}])}
        placeholder={text("placeholder", "Search Books...")}
        autosuggest={boolean("autosuggest", true)}
        defaultValue={text("defaultValue", "")}
        strictSelection={boolean("strictSelection", false)}
        fuzziness={number("fuzziness", 1)}
        queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
        showClear={boolean("showClear", true)}
        showFilter={boolean("showFilter", true)}
        iconPosition={select("iconPosition", ["left", "right"], "left")}
        filterLabel={text("filterLabel", "Books filter")}
        highlight={boolean("highlight", false)}
        URLParams={boolean("URLParams (not visible on storybook)", true)}
        onValueSelected={action("onValueSelected called with", (value, cause)=>{console.log(value,cause)})}
	      autoFocus={boolean('autoFocus', true)}
        focusShortcuts={array('focusShortcuts', ['/', 'r', 't'])}
        addonBefore={text('addonBefore', 'Before')}
        addonAfter={text('addonAfter', 'After')}
        expandSuggestionsContainer={boolean('expandSuggestionsContainer', true)}
        enablePredictiveSuggestions={boolean('enablePredictiveSuggestions', true)}
        enablePopularSuggestions={boolean('enablePopularSuggestions', true)}
        popularSuggestionsConfig={object("popularSuggestionsConfig", {
          size: 3,
          minChars:  3,
          index: 'good-books-ds',
          showGlobal: false
        })}
        enableRecentSuggestions={boolean('enableRecentSuggestions', true)}
        recentSuggestionsConfig={object("recentSuggestionsConfig", {
          size: 3,
          minChars: 3,
          minHits:  2,
          index: 'good-books-ds'
        })}
        applyStopwords={boolean("applyStopwords", true)}
        customStopwords={array("customStopwords", ['and','the'])}
      />
    )
  );

storiesOf("Range components/NumberBox", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(NumberBoxReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <NumberBoxRSDefault
        defaultValue={2}
        data={{
          label: "Book Rating",
          start: 2,
          end: 5
        }}
        labelPosition="left"
      />
    )
  )
  .add(
    "With title",
    () => (
      <NumberBoxRSDefault
        defaultValue={2}
        data={{
          label: "Book Rating",
          start: 2,
          end: 5
        }}
        labelPosition="left"
        title={text("title", "Average Rating")}
      />
    )
  )
  .add(
    "With labelPosition",
    () => (
      <NumberBoxRSDefault
        defaultValue={2}
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
    )
  )
  .add(
    "With data",
    () => (
      <NumberBoxRSDefault
        defaultValue={2}
        data={object("data", {
          label: "Book Ratings",
          start: 2,
          end: 5
        })}
        labelPosition="right"
      />
    )
  )
  .add(
    "With defaultValue",
    () => (
      <NumberBoxRSDefault
        defaultValue={2}
        data={{
          label: "Book Rating",
          start: 2,
          end: 5
        }}
      />
    )
  )
  .add(
    "With queryFormat",
    () => (
      <NumberBoxRSDefault
        defaultValue={2}
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
    )
  )
  .add(
    "With URLParams",
    () => (
      <NumberBoxRSDefault
        defaultValue={2}
        data={{
          label: "Book Rating",
          start: 2,
          end: 5
        }}
        labelPosition="left"
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <NumberBoxRSDefault
        title={text("title", "Books")}
        dataField={select(
          "dataField",
          ["average_rating_rounded", "books_count"],
          "average_rating_rounded"
        )}
        defaultValue={3}
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
    )
  );

storiesOf("List components/SingleList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(SingleListReadme, 15),
    },
  })
  .add(
    "Basic",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
      />
    )
  )
  .add(
    "With title",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        title={text("title", "Good Books")}
      />
    )
  )
  .add(
    "With size",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        size={number("size", 10)}
      />
    )
  )
  .add(
    "Without count",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        showCount={boolean("showCount", false)}
      />
    )
  )
  .add(
    "With renderItem",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        renderItem={(label, count) => (
          <div>
            {label}
            <span style={{ marginLeft: 5, color: "dodgerblue" }}>{count}</span>
          </div>
        )}
      />
    )
  )
  .add(
    "With custom renderer",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
      >
        {({ data, handleChange }) =>
          data.map(item => (
            <div onClick={() => handleChange(item.key)}>
              {item.key}
              <span style={{ marginLeft: 5, color: "dodgerblue" }}>
                {item.doc_count}
              </span>
            </div>
          ))
        }
      </SingleListRSDefault>
    )
  )
  .add(
    "Without Search",
   () => (
      <SingleListRSDefault
        showSearch={boolean("showSearch", false)}
        placeholder="Search Books"
      />
    )
  )
  .add(
    "With filter",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
      />
    )
  )
  .add(
    "Wihout radio buttons",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        showRadio={boolean("showRadio", false)}
      />
    )
  )
  .add(
    "Default Selected",
   () => (
      <SingleListRSDefault
        showSearch
        defaultValue="A Beautiful Dark"
        placeholder="Search Books"
      />
    )
  )
  .add(
    "Custom Sort",
   () => (
      <SingleListRSDefault
        title="SingleList: Custom Sort"
        showSearch
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "asc"
        )}
        placeholder="Search Books"
      />
    )
  )
  .add(
    "With Select All",
   () => (
      <SingleListRSDefault
        showSearch
        selectAllLabel={text("selectAllLabel", "All Books")}
        placeholder="Search Books"
      />
    )
  )
  .add(
    "With URLParams",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With loader",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        loader="Loading..."
      />
    )
  )
  .add(
    "extending onValueChange",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        onValueChange={action("SingleList Value Changed")}
      />
    )
  )
	.add(
    "With enableStrictSelection",
   () => (
      <SingleListRSDefault
        showSearch
        placeholder="Search Books"
        enableStrictSelection
      />
    )
  )
  .add(
    "with renderNoResults",
    () => (
      <SingleListRSDefault
        dataField=""
        renderNoResults={() => <p>No Results Found!</p>} />
    )
  )
  .add(
    "Playground",
   () => (
      <SingleListRSDefault
        title={text("title", "SingleList: Books Filter")}
        dataField={select(
          "dataField",
          ["original_series.keyword", "authors.keyword", "language_code.keyword"],
          "original_series.keyword"
        )}
        size={number("size", 100)}
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "count"
        )}
        defaultValue="Artemis Fowl"
        showCount={boolean("showCount", true)}
        showSearch={boolean("showSearch", true)}
        placeholder={text("placeholder", "Search Books")}
        selectAllLabel={text("selectAllLabel", "All books")}
        showRadio={boolean("showRadio", true)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );

storiesOf("List components/MultiList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(MultiListReadme, 15),
    },
  })
  .add(
    "Basic",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
      />
    )
  )
  .add(
    "With title",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        title={text("title", "MultiList: Books Filter")}
      />
    )
  )
  .add(
    "With size",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        size={number("size", 10)}
      />
    )
  )
  .add(
    "With filter",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
      />
    )
  )
  .add(
    "With queryFormat",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
      />
    )
  )
  .add(
    "Without count",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        showCount={boolean("showCount", false)}
      />
    )
  )
  .add(
    "With renderItem",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        renderItem={(label, count) => (
          <div>
            {label}
            <span style={{ marginLeft: 5, color: "dodgerblue" }}>{count}</span>
          </div>
        )}
      />
    )
  )
  .add(
    "With custom renderer",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
      >
        {({ data, handleChange }) =>
          data.map(item => (
            <div onClick={() => handleChange(item.key)}>
              {item.key}
              <span style={{ marginLeft: 5, color: "dodgerblue" }}>
                {item.doc_count}
              </span>
            </div>
          ))
        }
      </MultiListRSDefault>
    )
  )
  .add(
    "Without Search",
   () => (
      <MultiListRSDefault
        showSearch={boolean("showSearch", false)}
        placeholder="Search Books"
      />
    )
  )
  .add(
    "Without checkbox",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        showCheckbox={boolean("showCheckbox", false)}
      />
    )
  )
  .add(
    "Default Selected",
   () => (
      <MultiListRSDefault
        showSearch
        defaultValue={["Hercule Poirot", "Anita Blake"]}
        placeholder="Search Books"
      />
    )
  )
  .add(
    "Custom Sort",
   () => (
      <MultiListRSDefault
        title="MultiList: Custom Sort"
        showSearch
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "asc"
        )}
        placeholder="Search Books"
      />
    )
  )
  .add(
    "With Select All",
   () => (
      <MultiListRSDefault
        showSearch
        selectAllLabel={text("selectAllLabel", "All Books")}
        placeholder="Search Books"
      />
    )
  )
  .add(
    "With URLParams",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "extending with onValueChange",
   () => (
      <MultiListRSDefault
        showSearch
        placeholder="Search Books"
        onValueChange={action("MultiList Value Changed")}
      />
    )
  )
  .add(
    "with loader",
   () => (
      <MultiListRSDefault />
    )
  )
	.add(
    "with index prop",
   () => (
      <MultiListWithIndexProp
        showSearch
        placeholder="Search Books"
        loader="Loading..."
      />
    )
  )
  .add(
    "with renderNoResults",
    () => (
      <MultiListRSDefault
        dataField=""
        renderNoResults={() => <p>No Results Found!</p>} />
    )
  )
  .add(
    "Playground",
   () => (
      <MultiListRSDefault
        title={text("title", "MultiList: Books Filter")}
        dataField={select(
          "dataField",
          ["original_series.keyword", "authors.keyword", "language_code.keyword"],
          "original_series.keyword"
        )}
        size={number("size", 10)}
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "count"
        )}
        defaultValue={[
          "Harry Potter",
          "Artemis Fowl"
        ]}
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
    )
  );

storiesOf("List components/SingleDropdownList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(SingleDropdownListReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <SingleDropdownListRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <SingleDropdownListRSDefault
        title={text("title", "Book list")}
      />
    )
  )
  .add(
    "With size",
    () => (
      <SingleDropdownListRSDefault
        size={number("size", 10)}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <SingleDropdownListRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Book filter")}
      />
    )
  )
  .add(
    "With custom sort",
    () => (
      <SingleDropdownListRSDefault
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "asc"
        )}
      />
    )
  )
  .add(
    "Without count",
    () => (
      <SingleDropdownListRSDefault
        showCount={boolean("showCount", false)}
      />
    )
  )
  .add(
    "With search",
    () => (
      <SingleDropdownListRSDefault
        showSearch={boolean("showSearch", true)}
      />
    )
  )
  .add(
    "With search and clear icon",
    () => (
      <SingleDropdownListRSDefault
        showSearch={boolean("showSearch", true)}
        showClear={boolean("showClear", true)}
      />
    )
  )
  .add(
    "With renderItem",
    () => (
      <SingleDropdownListRSDefault
        renderItem={(label, count) => (
          <div>
            {label}
            <span style={{ marginLeft: 5, color: "dodgerblue" }}>{count}</span>
          </div>
        )}
      />
    )
  )
  .add(
    "With custom renderer",
    () => (
      <SingleDropdownListRSDefault showCount>
        {({ data, handleChange }) =>
          data.map(item => (
            <div
              onClick={() => handleChange(item.key)}
              key={item.key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <span>{item.key}</span>
              {item.doc_count && <span>{item.doc_count}</span>}
            </div>
          ))
        }
      </SingleDropdownListRSDefault>
    )
  )
  .add(
    "With Select All",
    () => (
      <SingleDropdownListRSDefault
        selectAllLabel={text("selectAllLabel", "All Books")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <SingleDropdownListRSDefault
        selectAllLabel="All Cities"
        defaultValue="A Beautiful Dark"
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <SingleDropdownListRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With loader",
    () => (
      <SingleDropdownListRSDefault loader="Loading..." />
    )
  )
  .add(
    "with  renderNoResults",
    () => (
      <SingleDropdownListRSDefault
        dataField=""
        renderNoResults={() => <p>No Results Found!</p>}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <SingleDropdownListRSDefault
        title={text("title", "SingleDropdownList")}
        dataField={select(
          "dataField",
          ["original_series.keyword", "authors.keyword", "language_code.keyword"],
          "original_series.keyword"
        )}
        size={number("size", 100)}
        showCount={boolean("showCount", true)}
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "count"
        )}
        selectAllLabel={text("selectAllLabel", "All Books")}
        defaultValue="Harry Potter"
        placeholder={text("placeholder", "Select a Book")}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Book filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        showSearch={boolean("showSearch", true)}
        showClear={boolean("showClear", true)}
      />
    )
  );

storiesOf("List components/MultiDropdownList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(MultiDropdownListReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <MultiDropdownListRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <MultiDropdownListRSDefault
        title={text("title", "Books list")}
      />
    )
  )
  .add(
    "With Placeholder",
    () => (
      <MultiDropdownListRSDefault
        placeholder={text("placeholder", "Select Books")}
      />
    )
  )
  .add(
    "With size",
    () => (
      <MultiDropdownListRSDefault
        size={number("size", 10)}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <MultiDropdownListRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
      />
    )
  )
  .add(
    "Without count",
    () => (
      <MultiDropdownListRSDefault
        showCount={boolean("showCount", false)}
      />
    )
  )
  .add(
    "With search",
    () => (
      <MultiDropdownListRSDefault
        showSearch={boolean("showSearch", true)}
      />
    )
  )
  .add(
    "With search and clear icon",
    () => (
      <MultiDropdownListRSDefault
        showSearch={boolean("showSearch", true)}
        showClear={boolean("showClear", true)}
      />
    )
  )
  .add(
    "With custom sort",
    () => (
      <MultiDropdownListRSDefault
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "asc"
        )}
      />
    )
  )
  .add(
    "With queryFormat",
    () => (
      <MultiDropdownListRSDefault
        queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
      />
    )
  )
  .add(
    "With Select All",
    () => (
      <MultiDropdownListRSDefault
        placeholder="Select Books"
        selectAllLabel={text("selectAllLabel", "All Books")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <MultiDropdownListRSDefault
        placeholder="Select Books"
        size={100}
        sortBy="count"
				defaultValue={["A Beautiful Dark", "44 Scotland Street"]}
			/>
    )
  )
  .add(
    "With renderItem",
    () => (
      <MultiDropdownListRSDefault
        placeholder="Select Books"
        size={100}
        sortBy="count"
        renderItem={(label, count) => (
          <div>
            {label}
            <span style={{ marginLeft: 5, color: "dodgerblue" }}>{count}</span>
          </div>
        )}
      />
    )
  )
  .add(
    "With custom renderer",
    () => (
      <MultiDropdownListRSDefault showCount>
        {({ data, handleChange }) =>
          data.map(item => (
            <div
              onClick={() => handleChange(item.key)}
              key={item.key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <span>{item.key}</span>
              {item.doc_count && <span>{item.doc_count}</span>}
            </div>
          ))
        }
      </MultiDropdownListRSDefault>
    )
  )
  .add(
    "With URLParams",
    () => (
      <MultiDropdownListRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "with loader",
    () => (
      <MultiDropdownListRSDefault loader="Loading..." />
    )
  )
  .add(
    "extending onValueChange",
    () => (
      <MultiDropdownListRSDefault
        onValueChange={action("MultiDropdownList Value Changed")}
      />
    )
  )
  .add(
    "with  renderNoResults",
    () => (
      <MultiDropdownListRSDefault
        dataField=""
        renderNoResults={() => <p>No Results Found!</p>}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <MultiDropdownListRSDefault
        title={text("title", "MultiDropdownList")}
        dataField={select(
          "dataField",
          ["original_series.keyword", "authors.keyword", "language_code.keyword"],
          "original_series.keyword"
        )}
        size={number("size", 100)}
        showCount={boolean("showCount", true)}
        sortBy={select(
          "sortBy",
          { asc: "asc", desc: "desc", count: "count" },
          "count"
        )}
        queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
        selectAllLabel={text("selectAllLabel", "All Books")}
        defaultValue={["Hercule Poirot"]}
        placeholder={text("placeholder", "Select Books")}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        showSearch={boolean("showSearch", true)}
        showClear={boolean("showClear", true)}
      />
    )
  );

storiesOf("List components/SingleDataList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(SingleDataListReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <SingleDataListRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <SingleDataListRSDefault
        title={text("title", "Topics")}
      />
    )
  )
  .add(
    "With defaultValue",
    () => (
      <SingleDataListRSDefault
        defaultValue="Social"
      />
    )
  )
  .add(
    "With showSearch",
    () => (
      <SingleDataListRSDefault
        showSearch={boolean("showSearch", true)}
        placeholder={text("placeholder", "Search topics")}
      />
    )
  )
  .add(
    "Without Radio",
    () => (
      <SingleDataListRSDefault
        showRadio={boolean("showRadio", false)}
      />
    )
  )
  .add(
    "With selectAllLabel",
    () => (
      <SingleDataListRSDefault
        selectAllLabel={text("selectAllLabel", "Select All")}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <SingleDataListRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Custom Filter Name")}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <SingleDataListRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With count",
    () => (
      <SingleDataListRSDefault showCount={boolean("displayAsVertical", false)} />
    )
  )
  .add(
    "With vertical display",
    () => (
      <SingleDataListRSDefault displayAsVertical={boolean("displayAsVertical", true)} />
    )
  )
  .add(
    "With renderItem",
    () => (
      <SingleDataListRSDefault
        showCount
        renderItem={(label, count) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <span>{label}</span>
            {count && <span>{count}</span>}
          </div>
        )}
      />
    )
  )
  .add(
    "With custom renderer",
    () => (
      <SingleDataListRSDefault showCount>
        {({ data, handleChange }) =>
          data.map(item => (
            <div
              onClick={() => handleChange(item.label)}
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <span>{item.label}</span>
              {item.count && <span>{item.count}</span>}
            </div>
          ))
        }
      </SingleDataListRSDefault>
    )
  )
	.add(
    "With enableStrictSelection",
    () => (
      <SingleDataListRSDefault enableStrictSelection />
    )
  )
  .add(
    "Playground",
    () => (
      <SingleDataListRSDefault
        title={text("title", "Topics")}
        dataField={text("dataField", "group.group_topics.topic_name_raw.keyword")}
        defaultValue="Social"
        showSearch={boolean("showSearch", true)}
        placeholder={text("placeholder", "Search topics")}
        showRadio={boolean("showRadio", true)}
        selectAllLabel={text("selectAllLabel", "Select All")}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Custom Filter Name")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        displayAsVertical={boolean("displayAsVertical")}
      />
    )
  );

storiesOf("List components/MultiDataList", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(MultiDataListReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <MultiDataListRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <MultiDataListRSDefault
        title={text("title", "Topics")}
      />
    )
  )
  .add(
    "With defaultValue",
    () => (
      <MultiDataListRSDefault
        defaultValue={["Social", "Music"]}
      />
    )
  )
  .add(
    "With showSearch",
    () => (
      <MultiDataListRSDefault
        showSearch={boolean("showSearch", true)}
        placeholder={text("placeholder", "Search topics")}
      />
    )
  )
  .add(
    "Without Checkbox",
    () => (
      <MultiDataListRSDefault
        showCheckbox={boolean("showCheckbox", false)}
      />
    )
  )
  .add(
    "With selectAllLabel",
    () => (
      <MultiDataListRSDefault
        selectAllLabel={text("selectAllLabel", "Select All")}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <MultiDataListRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Custom Filter Name")}
      />
    )
  )
  .add(
    "With queryFormat",
    () => (
      <MultiDataListRSDefault
        queryFormat={select("queryFormat", { and: "and", or: "or" }, "and")}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <MultiDataListRSDefault
        showCount
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With count",
    () => (
      <MultiDataListRSDefault
        showCount={boolean("With count", true)}
      />
    )
  )
  .add(
    "With renderItem",
    () => (
      <MultiDataListRSDefault
        renderItem={(label, count) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <span>{label}</span>
            {count && <span>{count}</span>}
          </div>
        )}
      />
    )
  )
  .add(
    "With custom renderer",
    () => (
      <MultiDataListRSDefault>
        {({ data, handleChange }) =>
          data.map(item => (
            <div
              onClick={() => handleChange(item.label)}
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <span>{item.label}</span>
              {item.count && <span>{item.count}</span>}
            </div>
          ))
        }
      </MultiDataListRSDefault>
    )
  )
  .add(
    "Playground",
    () => (
      <MultiDataListRSDefault
        title={text("title", "Topics")}
        dataField={text("dataField", "group.group_topics.topic_name_raw.keyword")}
        defaultValue={["Social", "Music"]}
        showSearch={boolean("showSearch", true)}
        placeholder={text("placeholder", "Search topics")}
        showCheckbox={boolean("showCheckbox", true)}
        selectAllLabel={text("selectAllLabel", "Select All")}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Custom Filter Name")}
        queryFormat={select("queryFormat", { and: "and", or: "or" }, "or")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );
storiesOf("List components/TabDataList", module)
	.addDecorator(withKnobs)
  .add(
    "Basic",
    () => (
      <TabDataListDefault
        showRadio={boolean("showRadio", false)}
        showCount={boolean("showCount", false)}
        showSearch={boolean("showSearch", false)}
        displayAsVertical={boolean("displayAsVertical", false)}
      />
    )
  )
  .add(
    "With showCount",
    () => (
      <TabDataListDefault
        showCount={boolean("showCount", true)}
      />
    )
    )
  .add(
    "With showRadio",
    () => (
      <TabDataListDefault
        showRadio={boolean("showRadio", true)}
      />
    )
  )
  .add(
    "With showSearch",
    () => (
      <TabDataListDefault
        showSearch={boolean("showSearch", true)}
      />
    )
  )
  .add(
    "With displayAsVertical",
    () => (
      <TabDataListDefault
        displayAsVertical={boolean("displayAsVertical", true)}
      />
    )
  )
  .add(
        "With Select All",
        () => (
          <TabDataListDefault
            selectAllLabel={text("selectAllLabel","All")}
          />
        )
  )

storiesOf("List components/TreeList", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => (
      <TreeListRSDefault />
    )
  )
  .add(
    "with title",
    () => (
      <TreeListRSDefault title={text("title", "Tree List ")} />
    )
  )
  .add(
    "Single Select Mode",
    () => (
      <TreeListRSDefault mode={select("mode", { single: "single", multiple: "multiple" }, "single")} />
    )
  )
  .add(
    "With showCount",
    () => (
      <TreeListRSDefault
        showCount={boolean("showCount", true)}
      />
    )
  )
  .add(
    "With showRadio",
    () => (
      <TreeListRSDefault
        showRadio={boolean("showRadio", true)}
        mode="single"
      />
    )
  )
  .add(
    "With showCheckbox",
    () => (
      <TreeListRSDefault
        showCheckbox={boolean("showCheckbox", true)}
        mode="multiple"
      />
    )
  )
  .add(
    "With showIcon",
    () => (
      <TreeListRSDefault
        showIcon={boolean("showIcon", true)}
      />
    )
  )
  .add(
    "With showLeafIcon",
    () => (
      <TreeListRSDefault
        showLeafIcon={boolean("showLeafIcon", true)}
      />
    )
  )
  .add(
    "With showSwitcherIcon",
    () => (
      <TreeListRSDefault
        showSwitcherIcon={boolean("showSwitcherIcon", true)}
      />
    )
  )
  .add(
    "With showLine",
    () => (
      <TreeListRSDefault
        showLine={boolean("showLine", true)}
      />
    )
  )
  .add(
    "With showSearch",
    () => (
      <TreeListRSDefault
        showSearch={boolean("showSearch", true)}
      />
    )
  )
  .add(
    "With custom icon(non-leaf nodes)",
    () => (
      <TreeListRSDefault
        showIcon
        icon={
			  	<span role="img" aria-label="folder-icon">
			  		🦷
			  	</span>
			  }
      />
    )
  )
  .add(
    "With custom leafIcon",
    () => (
      <TreeListRSDefault
        showLeafIcon
			  leafIcon={
			  	<span role="img" aria-label="leaf-icon">
			  		☘️
			  	</span>
			  }
      />
    )
  )
  .add(
    "With custom switcherIcon",
    () => (
      <TreeListRSDefault
        showSwitcherIcon
			  switcherIcon={bool =>
					(bool ? <span> &#8592;</span> : <span> &#8598;</span>)
				}
      />
    )
  )
  .add(
    "With renderItem",
    () => (
      <TreeListRSDefault
        renderItem={(label, count, isSelected) => (
					<span style={isSelected ? { background: 'green' } : {}}>
						{label} - {count}
					</span>
				)}
      />
    )
  )
  .add(
    "With custom renderer",
    () => (
      <TreeListCustomRenderer />
    )
  )
  .add(
    "With custom SelectedFilters",
    () => (
      <TreeListCustomSelectedFilters />
    )
  )

storiesOf("Range components/SingleRange", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(SingleRangeReadme, 15),
    },
  })
  .add(
    "Basic",
   () => (
      <SingleRangeRSDefault />
    )
  )
  .add(
    "With title",
   () => (
      <SingleRangeRSDefault
        title={text("title", "SingleRange: Books Filter")}
      />
    )
  )
  .add(
    "With Default Selected",
   () => (
      <SingleRangeRSDefault
        defaultValue="Rating 3 to 4"
      />
    )
  )
  .add(
    "With filter",
   () => (
      <SingleRangeRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
      />
    )
  )
  .add(
    "Without radio buttons",
   () => (
      <SingleRangeRSDefault
        showRadio={boolean("showRadio", false)}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <SingleRangeRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
   () => (
      <SingleRangeRSDefault
        title={text("title", "SingleRange: Books Filter")}
        defaultValue="Cheap"
        showRadio={boolean("showRadio", true)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );

storiesOf("Range components/MultiRange", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(MultiRangeReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <MultiRangeRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <MultiRangeRSDefault
        title={text("title", "MultiRange: Books Filter")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <MultiRangeRSDefault
        defaultValue={["Rating 3 to 4"]}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <MultiRangeRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
      />
    )
  )
  .add(
    "Without checkbox",
    () => (
      <MultiRangeRSDefault
        showCheckbox={boolean("showCheckbox", false)}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <MultiRangeRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <MultiRangeRSDefault
        title={text("title", "MultiRange: Books Filter")}
        defaultValue={["Rating 3 to 4"]}
        showCheckbox={boolean("showCheckbox", true)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );

storiesOf("Range components/SingleDropdownRange", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(SingleDropdownRangeReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <SingleDropdownRangeRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <SingleDropdownRangeRSDefault
        title={text("title", "SingleDropdownRange: Books Filter")}
      />
    )
  )
  .add(
    "With placeholder",
    () => (
      <SingleDropdownRangeRSDefault
        placeholder={text("placeholder", "Search books")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <SingleDropdownRangeRSDefault
        defaultValue="Rating 3 to 4"
      />
    )
  )
  .add(
    "With filter",
    () => (
      <SingleDropdownRangeRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books")}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <SingleDropdownRangeRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <SingleDropdownRangeRSDefault
        title={text("title", "SingleDropdownRange: Books Filter")}
        placeholder={text("placeholder", "Search books")}
        defaultValue="Rating 3 to 4"
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books")}
      />
    )
  );

storiesOf("Range components/MultiDropdownRange", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(MultiDropdownRangeReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <MultiDropdownRangeRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <MultiDropdownRangeRSDefault
        title={text("title", "MultiDropdownRange: Books Filter")}
      />
    )
  )
  .add(
    "With placeholder",
    () => (
      <MultiDropdownRangeRSDefault
        placeholder={text("placeholder", "Search books")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <MultiDropdownRangeRSDefault
        defaultValue={["Rating 3 to 4"]}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <MultiDropdownRangeRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books")}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <MultiDropdownRangeRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <MultiDropdownRangeRSDefault
        title={text("title", "MultiDropdownRange: Books Filter")}
        dataField={text("dataField", "average_rating")}
        defaultValue={["Rating 3 to 4"]}
        placeholder={text("placeholder", "Search books")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Books")}
      />
    )
  );

storiesOf("Base components/ToggleButton", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(ToggleButtonReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <ToggleButtonRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <ToggleButtonRSDefault
        title={text("title", "ToggleButton: Topics")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <ToggleButtonRSDefault
        defaultValue={["Music"]}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <ToggleButtonRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Topics filter")}
      />
    )
  )
  .add(
    "Without multiSelect",
    () => (
      <ToggleButtonRSDefault
        multiSelect={boolean("multiSelect", false)}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <ToggleButtonRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <ToggleButtonRSDefault
        title={text("title", "ToggleButton: Topics")}
        dataField={text("dataField", "group.group_topics.topic_name_raw.keyword")}
        multiSelect={boolean("multiSelect", true)}
        defaultValue={["Social"]}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Category filter")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );

storiesOf("Range components/DatePicker", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(DatePickerReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <DatePickerRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <DatePickerRSDefault
        title={text("title", "Date Picker")}
      />
    )
  )
  .add(
    "With placeholder",
    () => (
      <DatePickerRSDefault
        placeholder={text("placeholder", "Pick date")}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <DatePickerRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Date")}
      />
    )
  )
  .add(
    "With focus",
    () => (
      <DatePickerRSDefault
        focused={boolean("focused", true)}
      />
    )
  )
  .add(
    "Show more than 1 month",
    () => (
      <DatePickerRSDefault
        numberOfMonths={number("numberOfMonths", 2)}
      />
    )
  )
  .add(
    "Default date",
    () => (
      <DatePickerRSDefault
        defaultValue="2017-04-07"
      />
    )
  )
  .add(
    "with initialMonth",
    () => (
      <DatePickerRSDefault
        initialMonth={new Date("2017-04-04")}
      />
    ),
    { info: 'initialMonth accepts a JavaScript object. Here it\'s passed new Date("2017-04-04")' }
  )
  .add(
    "Without clear button",
    () => (
      <DatePickerRSDefault
        showClear={boolean("showClear", false)}
      />
    )
  )
  .add(
    "Without clickUnselectsDay",
    () => (
      <DatePickerRSDefault
        clickUnselectsDay={boolean("clickUnselectsDay", false)}
      />
    )
  )
  .add(
    "With queryFormat",
    () => (
      <DatePickerRSDefault
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
            "epoch_second"
          ],
          "epoch_millis"
        )}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <DatePickerRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
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
            "epoch_second"
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
    )
  );

storiesOf("Range components/DateRange", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(DateRangeReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <DateRangeRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <DateRangeRSDefault
        title={text("title", "Date Range")}
      />
    )
  )
  .add(
    "With placeholder",
    () => (
      <DateRangeRSDefault
        placeholder={object("placeholder", {
          start: "Start Date",
          end: "End Date"
        })}
      />
    )
  )
  .add(
    "without showClear",
    () => (
      <DateRangeRSDefault
        showClear={boolean("showClear", false)}
      />
    )
  )
  .add(
    "With filter",
    () => (
      <DateRangeRSDefault
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Date range")}
      />
    )
  )
  .add(
    "Show more than 1 month",
    () => (
      <DateRangeRSDefault
        numberOfMonths={number("numberOfMonths", 3)}
      />
    )
  )
  .add(
    "Default date",
    () => (
      <DateRangeRSDefault
        defaultValue={{
          start: new Date("2017-04-07"),
          end: new Date("2017-04-14")
        }}
      />
    )
  )
  .add(
    "wihout autoFocusEnd",
    () => (
      <DateRangeRSDefault
        autoFocusEnd={boolean("autoFocusEnd", false)}
      />
    )
  )
  .add(
    "With queryFormat",
    () => (
      <DateRangeRSDefault
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
            "epoch_second"
          ],
          "epoch_millis"
        )}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <DateRangeRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "Playground",
    () => (
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
            "epoch_second"
          ],
          "epoch_millis"
        )}
        showFilter={boolean("showFilter", true)}
        filterLabel={text("filterLabel", "Date range")}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
      />
    )
  );

storiesOf("Range components/RangeInput", module)
	.addDecorator(withKnobs)
	.addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(RangeInputReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <RangeInputRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <RangeInputRSDefault
        title={text("title", "RangeInput: Ratings")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <RangeInputRSDefault
        defaultValue={{
          start: 5000,
          end: 9000
        }}
      />
    )
  )
  .add(
    "Without histogram",
    () => (
      <RangeInputRSDefault
        showHistogram={boolean("showHistogram", false)}
      />
    )
  )
  .add(
    "Without slider",
    () => (
      <RangeInputRSDefault
        showSlider={boolean("showSlider", false)}
      />
    )
  )
  .add(
    "With custom histogram interval",
    () => (
      <RangeInputRSDefault
        interval={number("interval", 1000)}
      />
    )
  )
  .add(
    "With Range Labels",
    () => (
      <RangeInputRSDefault
        rangeLabels={object("rangeLabels", {
          start: "Low",
          end: "High"
        })}
      />
    )
  )
  .add(
    "With filters",
    () => (
      <RangeInputRSDefault showFilter={boolean("showFilter", true)} />
    )
  )
  .add(
    "With onDrag",
    () => (
      <RangeInputRSDefault
        rangeLabels={object("rangeLabels", {
          start: "Low",
          end: "High"
        })}
        onDrag={(selected, boundary) => {
          console.log(selected, boundary);
        }}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <RangeInputRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With tooltipTrigger",
    () => (
      <RangeInputRSDefault
        tooltipTrigger={text("tooltipTrigger", "always")}
      />
    )
  )
  .add(
    "With date support",
    () => (
      <RangeInputRSDefault
        dataField="timestamp"
        title="Date Range Example"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat="date"
      />
    )
  )
  .add(
    "With URLParams (date type)",
    () => (
      <RangeInputRSDefault
        dataField="timestamp"
        title="Date Range Example with URLParams support"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat="date"
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With queryFormat (supported for date type)",
    () => (
      <RangeInputRSDefault
        dataField="timestamp"
        title="Date Range Example with queryFormat prop"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
      />
    )
  )
  .add(
    "With Histogram (date type)",
    () => (
      <RangeInputRSDefault
        dataField="timestamp"
        title="Date Range Example with showHistogram prop"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
        showHistogram={boolean('showHistogram', true)}
      />
    )
  )
  .add(
    "With calendarInterval (supported for date type)",
    () => (
      <RangeInputRSDefault
        dataField="timestamp"
        title="Date Range Example with calendarInterval prop"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        showHistogram={boolean('showHistogram', true)}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
        calendarInterval={select('calendarInterval', ['year','quarter','month', 'week','day','hour','minute'],'week')}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <RangeInputRSDefault
        title={text("title", "RangeSlider: Ratings")}
        dataField={select(
          "dataField",
          ["books_count", "original_publication_year", "ratings_count",'timestamp'],
          "books_count"
        )}
        range={object("range", {
          start: 3000,
          end: 50000
        })}
        showFilter={boolean("showFilter", true)}
        stepValue={number("stepValue", 1)}
        interval={number("interval", 1000)}
        defaultValue={{
          start: 4000,
          end: 10000
        }}
        rangeLabels={object("rangeLabels", {
          start: "Start",
          end: "End"
        })}
        showHistogram={boolean("showHistogram", true)}
        showSlider={boolean("showSlider", true)}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        queryFormat={select('queryFormat (use with date type)', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
        calendarInterval={select('calendarInterval (use with date type)', ['year','quarter','month', 'week','day','hour','minute'],'month')}
      />
    )
  );

storiesOf("Range components/RangeSlider", module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: removeFirstLine(RangeSliderReadme, 15),
    },
  })
  .add(
    "Basic",
    () => (
      <RangeSliderRSDefault />
    )
  )
  .add(
    "With title",
    () => (
      <RangeSliderRSDefault
        title={text("title", "RangeSlider: Ratings")}
      />
    )
  )
  .add(
    "With Default Selected",
    () => (
      <RangeSliderRSDefault
        defaultValue={{
          start: 3000,
          end: 4000
        }}
      />
    )
  )
  .add(
    "With onDrag",
    () => (
      <RangeSliderRSDefault
        defaultValue={{
          start: 3000,
          end: 4000
        }}
        onDrag={(selected, boundary) => {
          console.log(selected, boundary);
        }}
      />
    )
  )
  .add(
    "With histogram",
    () => (
      <RangeSliderRSDefault
        showHistogram={boolean("showHistogram", true)}
      />
    )
  )
  .add(
    "With custom histogram interval",
    () => (
      <RangeSliderRSDefault
        showHistogram={boolean("showHistogram", true)}
        interval={number("interval", 1000)}
      />
    )
  )
  .add(
    "With Range Labels",
    () => (
      <RangeSliderRSDefault
        rangeLabels={object("rangeLabels", {
          start: "Low",
          end: "High"
        })}
      />
    )
  )
  .add(
    "With filters",
    () => (
      <RangeSliderRSDefault
        showFilter={boolean("showFilter", true)}
        rangeLabels={object("rangeLabels", {
          start: "Low",
          end: "High"
        })}
      />
    )
  )
  .add(
    "With URLParams",
    () => (
      <RangeSliderRSDefault
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With tooltipTrigger",
    () => (
      <RangeSliderRSDefault
        tooltipTrigger={text("tooltipTrigger", "always")}
      />
    )
  )
  .add(
    "With date support",
    () => (
      <RangeSliderRSDefault
        dataField="timestamp"
        title="Date Range Example"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat="date"
      />
    )
  )
  .add(
    "With URLParams (date type)",
    () => (
      <RangeSliderRSDefault
        dataField="timestamp"
        title="Date Range Example with URLParams support"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat="date"
        URLParams={boolean("URLParams (not visible on storybook)", true)}
      />
    )
  )
  .add(
    "With queryFormat (supported for date type)",
    () => (
      <RangeSliderRSDefault
        dataField="timestamp"
        title="Date Range Example with queryFormat prop"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
      />
    )
  )
  .add(
    "With Histogram (date type)",
    () => (
      <RangeSliderRSDefault
        dataField="timestamp"
        title="Date Range Example with showHistogram prop"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
        showHistogram={boolean('showHistogram', true)}
      />
    )
  )
  .add(
    "With calendarInterval (supported for date type)",
    () => (
      <RangeSliderRSDefault
        dataField="timestamp"
        title="Date Range Example with calendarInterval prop"
        range={{
          start: new Date('2020-05-05'),
          end: new Date('2021-05-05'),
        }}
        rangeLabels={{
          start: '2020-05-05',
          end: '2021-05-05'
        }}
        showHistogram={boolean('showHistogram', true)}
        queryFormat={select('queryFormat', ['date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],'date')}
        calendarInterval={select('calendarInterval', ['year','quarter','month', 'week','day','hour','minute'],'week')}
      />
    )
  )
  .add(
    "Playground",
    () => (
      <RangeSliderRSDefault
        title={text("title", "RangeSlider: Prices")}
        dataField={select(
          "dataField",
          ["books_count", "original_publication_year", "ratings_count",'timestamp'],
          "ratings_count"
        )}
        range={object("range", {
          start: 3000,
          end: 50000
        })}
        showFilter={boolean("showFilter", true)}
        stepValue={number("stepValue", 1)}
        interval={number("interval", 1000)}
        defaultValue={object("defaultValue", {
          start: 3000,
          end: 45000
        })}
        rangeLabels={object("rangeLabels", {
          start: "Start",
          end: "End"
        })}
        showHistogram={boolean("showHistogram", true)}
        URLParams={boolean("URLParams (not visible on storybook)", false)}
        queryFormat={select('queryFormat (use with date type)', [undefined,'date','basic_date','basic_date_time', 'basic_date_time_no_millis','date_time_no_millis','basic_time','basic_time_no_millis','epoch_millis','epoch_second'],undefined)}
        calendarInterval={select('calendarInterval (use with date type)', [undefined,'year','quarter','month', 'week','day','hour','minute'],undefined)}
      />
    )
  );

// storiesOf("search/SelectedFilters", module)
// 	.addDecorator(withKnobs)
// 	.add("Basic", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultValue={["London"]} />
// 	)))
// 	.add("With no filter", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultValue={["London"]} showFilter={boolean("showFilter", false)} />
// 	)))
// 	.add("With filterLabel", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault showSearch placeholder="Search City" defaultValue={["London"]} filterLabel={text("filterLabel", "City filter")} />
// 	)))
// 	.add("Playground", withReadme(removeFirstLine(SelectedFiltersReadme), () => (
// 		<MultiListRSDefault
// 			defaultValue={["London"]}
// 			showFilter={boolean("showFilter", true)}
// 			filterLabel={text("filterLabel", "City filter")}
// 		/>
// 	)));

storiesOf("theme", module)
  .addDecorator(withKnobs)
  .add("Default (Light Preset)", () => <DarkStory />)
  .add("Dark Preset with ResultList", () => (
    <DarkStory themePreset={select("themePreset", ["light", "dark"], "dark")} />
  ))
  .add("Dark Preset with ResultCard", () => (
    <DarkCard themePreset={select("themePreset", ["light", "dark"], "dark")} />
  ))
  .add("Dark Preset with TagCloud/ToggleButton/Single/MultiDataList", () => (
    <TagCloudDark
      themePreset={select("themePreset", ["light", "dark"], "dark")}
    />
  ))
  .add("Dark Preset with DatePicker", () => (
    <DatePickerDark
      themePreset={select("themePreset", ["light", "dark"], "dark")}
    />
  ))
  .add("Dark Preset with DateRange", () => (
    <DateRangeDark
      themePreset={select("themePreset", ["light", "dark"], "dark")}
    />
  ));
