import React from 'react'
import styled from 'styled-components'    // Used to include css in this JS
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"

// Ordered by use in the component

const LetsFlex = styled.div`
  display: flex;
  flex-direction: row;
`
const Sidebar = styled.div`
  margin: 1.5rem;
  width: calc(100% / 3 * 1);
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3 * 2);
`
const MostRecentArticles = styled.div`
  margin: 1.5rem;
  width: calc(100% - 10vmin);
`
const SectionHeadline = styled.h2`
  border-bottom: 1px solid #ddd;
  margin: 0 0 5vmin 0;
  padding: 0 0 0.4em 0;
`
const ArticleList = styled.ul`
  display: grid;
  grid-gap: 5vmin;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
`

const RootIndex = () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
            node {
              title
              slug
              publishDate(formatString: "MMMM Do, YYYY")
              tags
              heroImage {
                sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                  ...GatsbyContentfulSizes_tracedSVG
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
        allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
          edges {
            node {
              name
              shortBio {
                shortBio
              }
              title
              heroImage: image {
                sizes(
                  maxWidth: 1180
                  maxHeight: 480
                  resizingBehavior: PAD
                  background: "rgb:000000"
                ) {
                  ...GatsbyContentfulSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <LetsFlex>
          <Main>
            <Helmet title={data.site.siteMetadata.title} />
            <MostRecentArticles>
              <SectionHeadline>The Latest</SectionHeadline>
              <ArticleList>
                { data.allContentfulBlogPost.edges.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                })}
              </ArticleList>
            </MostRecentArticles>
          </Main>
          <Sidebar>
            { data.allContentfulBlogPost.edges.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </Sidebar>
        </LetsFlex>
      </Layout>
    )}
  />
)

export default RootIndex

