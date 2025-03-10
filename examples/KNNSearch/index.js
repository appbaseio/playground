import React from "react";
import {
  ReactiveBase,
  SearchBox,
  MultiList,
  ReactiveList,
} from "@appbaseio/reactivesearch";
import styled from "@emotion/styled";
import { FaUsers, FaBuilding } from "react-icons/fa";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Layout = styled.div`
  display: flex;
  gap: 2rem;
`;

const FacetContainer = styled.div`
  width: 250px;
`;

const ResultsContainer = styled.div`
  flex: 1;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 1rem;
`;

const Info = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const OneLiner = styled.p`
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #555;
`;

const Tags = styled.div`
  margin: 0.5rem 0;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const KNNWithFaceting = () => {
  return (
    <ReactiveBase
      app="yc-companies-dataset"
      url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
      credentials="a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61"
    >
      <Container>
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
        <Layout>
          <FacetContainer>
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
          </FacetContainer>
          <ResultsContainer>
            <ReactiveList
              componentId="results"
              dataField="_score"
              vectorDataField="vector_data"
              candidates={20}
              size={20}
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
                      <ResultItem key={company._id}>
                        <Logo
                          src={company.small_logo_thumb_url}
                          alt={`${company.name} logo`}
                        />
                        <Info>
                          <CompanyName>{company.name}</CompanyName>
                          <OneLiner>
                            {company.one_liner || company.long_description}
                          </OneLiner>
                          <Meta>
                            <span>
                              <FaUsers /> {company.team_size}
                            </span>
                            <span>
                              <FaBuilding /> {company.stage}
                            </span>
                          </Meta>
                          <Tags>
                            {company.industries &&
                              company.industries.map((ind) => (
                                <Tag key={ind}>{ind}</Tag>
                              ))}
                          </Tags>
                          <Link
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit website
                          </Link>
                        </Info>
                      </ResultItem>
                    );
                  })}
                </>
              )}
              renderNoResults={() => <div>No results found</div>}
            />
          </ResultsContainer>
        </Layout>
      </Container>
    </ReactiveBase>
  );
};

export default KNNWithFaceting;