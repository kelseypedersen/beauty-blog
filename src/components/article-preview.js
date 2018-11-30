import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

const PreviewTitle = styled.h3`
  font-size: 1.5rem;
`

const Tag = styled.div`
  border-radius: 2px;
  border: 1px solid #A0A0A0;
  color: #A0A0A0;
  display: inline-block;
  line-height: 1;
  margin-right: .5em;
  padding: .33333rem .5rem;
  text-decoration: none;
`

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" sizes={article.heroImage.sizes} />
    <PreviewTitle>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </PreviewTitle>
    <Tag>{article.tags}</Tag>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
