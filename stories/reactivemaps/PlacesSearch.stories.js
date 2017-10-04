import { default as React, Component } from "react";
import {
	ReactiveBase,
	ReactiveMap,
	PlacesSearch,
	SelectedFilters,
} from "@appbaseio/reactivemaps";

export default class PlacesSearchDefault extends Component {
	constructor(props) {
		super(props);
		this.onIdle = this.onIdle.bind(this);
		this.mapRef = null;
	}

	onIdle(res) {
		this.mapRef = res.props.map;
	}

	render() {
		return (
			<div className="row m-0 h-100">
			  <ReactiveBase
				app="reactivemap_demo"
				credentials="y4pVxY2Ok:c92481e2-c07f-4473-8326-082919282c18"
				type="meetupdata1"
			  >
					<div className="col s6 col-xs-6">
					  <SelectedFilters />
					  <PlacesSearch
						dataField={this.props.mapping.location}
						componentId="PlacesSensor"
						placeholder="Search Place"
						title="Places Search"
					  />
					</div>
				  <div className="col s6 col-xs-6">
					<ReactiveMap
					  dataField={this.props.mapping.location}
					  react={{
						and: "PlacesSensor"
					  }}
					  historicalData
					  setMarkerCluster={false}
					  defaultMapStyle="Light Monochrome"
					  autoMapRender={false}
					  autoCenter
					  showSearchAsMove
					  showMapStyles
					  title="Reactive Maps"
					  onIdle={this.onIdle}
					  defaultZoom={13}
					  size={100}
					/>
				  </div>
			  </ReactiveBase>
			</div>
		);
	}
}

PlacesSearchDefault.defaultProps = {
	mapping: {
		venue: "venue_name_ngrams",
		location: "location"
	}
};
