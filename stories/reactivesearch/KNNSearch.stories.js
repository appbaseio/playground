import React from "react";
import {
  ReactiveBase,
  SearchBox,
  MultiList,
  ReactiveList,
} from "@appbaseio/reactivesearch";

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  layout: {
    display: "flex",
    gap: "2rem",
  },
  facetContainer: {
    width: "250px",
  },
  resultsContainer: {
    flex: 1,
  },
  resultItem: {
    display: "flex",
    alignItems: "flex-start",
    padding: "1rem 0",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    marginRight: "1rem",
  },
  info: {
    flex: 1,
  },
  companyName: {
    margin: 0,
    fontSize: "1.25rem",
  },
  oneLiner: {
    margin: "0.5rem 0",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  meta: {
    display: "flex",
    gap: "1rem",
    fontSize: "0.9rem",
    color: "#555",
  },
  tags: {
    margin: "0.5rem 0",
  },
  tag: {
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    padding: "0.25rem 0.5rem",
    marginRight: "0.5rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

const KNNSearchDefault = (props) => {
  const { candidates, vectorDataField } = props;
  return (
    <ReactiveBase
      app="yc-companies-dataset"
      url="https://reactivesearch-api-9-4-0.onrender.com"
      credentials="d03e6f5f33d5:49124674-554e-4343-9ab2-006b2932f5c0"
      {...props}
    >
      <div style={styles.container}>
        <h2>K-Nearest Neighbors Search with Facets</h2>
        <SearchBox
          componentId="search"
          dataField={["name", "one_liner"]}
          vectorDataField="vector_data"
          placeholder="Semantic search for startup companies"
          autosuggest={false}
          style={{ marginBottom: "1rem" }}
          URLParams
        />
        <div style={styles.layout}>
          <div style={styles.facetContainer}>
            <MultiList
              componentId="industries"
              dataField="industries.keyword"
              title="Industries"
              placeholder="Filter by industries"
              showSearch={false}
              react={{
                and: ["search"],
              }}
              style={{ marginBottom: "1rem" }}
            />
          </div>
          <div style={styles.resultsContainer}>
            <ReactiveList
              componentId="results"
              dataField="_score"
              vectorDataField={vectorDataField}
              candidates={candidates}
              size={candidates}
              pagination={false}
              react={{
                and: ["search", "industries"],
              }}
              includeFields={[
                "name",
                "one_liner",
                "long_description",
                "team_size",
                "stage",
                "industries",
                "website",
                "small_logo_thumb_url",
              ]}
              render={({ data }) => (
                <>
                  {data.map((item) => {
                    const company = item._source || item;
                    return (
                      <div key={company._id} style={styles.resultItem}>
                        <img
                          src={company.small_logo_thumb_url}
                          alt={`${company.name} logo`}
                          style={styles.logo}
                        />
                        <div style={styles.info}>
                          <h3 style={styles.companyName}>{company.name}</h3>
                          <p style={styles.oneLiner}>
                            {company.one_liner || company.long_description}
                          </p>
                          <div style={styles.meta}>
                            <span>Team: {company.team_size}</span>
                            <span>Stage: {company.stage}</span>
                          </div>
                          <div style={styles.tags}>
                            {company.industries &&
                              company.industries.map((ind) => (
                                <span key={ind} style={styles.tag}>
                                  {ind}
                                </span>
                              ))}
                          </div>
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                          >
                            Visit website
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
              renderNoResults={() => <div>No results found</div>}
            />
          </div>
        </div>
      </div>
    </ReactiveBase>
  );
};

export default KNNSearchDefault;
