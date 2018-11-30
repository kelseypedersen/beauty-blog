import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Header = styled.header`
  background: #f3f6f6;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`

const HeaderLink = styled.a`
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
`

export default () => (
  <Header>
    <HeaderLink>
      <Link to="/">Dryftwell</Link>
    </HeaderLink>
  </Header>
)
