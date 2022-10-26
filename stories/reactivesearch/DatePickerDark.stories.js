import React, { Component } from "react";
import moment from "moment";
import {
  ReactiveBase,
  DatePicker,
  ReactiveList,
  SelectedFilters,
  ResultCard,
} from "@appbaseio/reactivesearch";
import ResponsiveStory from "./ResponsiveStory";

export default class DatePickerDefault extends Component {
  componentDidMount() {
    ResponsiveStory();
  }

  dateQuery(value, props) {
    let query = null;
    if (value) {
      query = [
        {
          range: {
            [props.dataField]: {
              lte: moment(value).valueOf(),
            },
          },
        },
      ];
    }
    return query ? { query: { bool: { must: query } } } : null;
  }

  render() {
    return (
      <ReactiveBase
        app="airbnb-dev"
        url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
        enableAppbase
        {...this.props}
      >
        <div className={`row ${this.props.themePreset}`}>
          <div className="col">
            <DatePicker
              componentId="DateSensor"
              dataField="available_from"
              customQuery={this.dateQuery}
              initialMonth={
                this.props.defaultSelected ? null : new Date("2021-05-05")
              }
            />
          </div>

          <div className="col">
            <SelectedFilters componentId="DateSensor" />
            <ReactiveList
              componentId="SearchResult"
              dataField="name"
              from={0}
              size={40}
              showPagination={true}
              react={{
                and: ["DateSensor"],
              }}
              {...this.props}
            >
              {({ data }) => (
                <ReactiveList.ResultCardsWrapper>
                  {data.map((item) => (
                    <ResultCard href={item.listing_url} key={item._id}>
                      <ResultCard.Image src={item.picture_url} />
                      <ResultCard.Title
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      />
                      <ResultCard.Description>
                        <div>
                          <div>${item.price}</div>
                          <span
                            style={{
                              backgroundImage: `url(${item.host_image})`,
                            }}
                          ></span>
                          <p>
                            {item.room_type} · {item.accommodates} guests
                          </p>
                        </div>
                      </ResultCard.Description>
                    </ResultCard>
                  ))}
                </ReactiveList.ResultCardsWrapper>
              )}
            </ReactiveList>
          </div>
        </div>
      </ReactiveBase>
    );
  }
}
