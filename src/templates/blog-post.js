import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

/* @media(min-width: 600px) {
  .heroDetails {
    font-size: 16px;
  }
}

@media(min-width: 1000px) {
  .heroDetails {
    font-size: 20px;
  }
}
*/

const BlogPost = styled.div`
  background: #fff;
`

const Hero = styled.div`
  background: #000;
  color: #fff;
  position: relative;
  text-align: center;
`

const HeroImage = styled.div`
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 61.8vh;
  max-height: 400px;
`

const HeroDetails = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 14px;
  padding: 0 0.5em;
`

const HeroHeadline = styled.div`
  margin: 0;
`

const HeroTitle = styled.div`
  margin: 0;
  font-size: 1.125em;
  font-weight: bold;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <BlogPost>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <Hero>
            <Img className={heroStyles.heroImage} alt={post.title} sizes={post.heroImage.sizes} />
          </Hero>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
            style={{
              display: 'block',
            }}
            >
            {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </BlogPost>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
