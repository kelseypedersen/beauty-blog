import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

const PreviewTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
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

const SidebarImage = styled.div`
  width: 30%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`

export default ({ article }) => (
  <Card>
    <SidebarImage>
    <Img alt="" sizes={article.heroImage.sizes} />
    </SidebarImage>
    <PreviewTitle>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </PreviewTitle>
  </Card>
)
