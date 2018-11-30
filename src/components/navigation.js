import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Navigation = styled.ul`
  display: flex;
  font-size: 1.25em;
  height: 20vh;
  justify-content: center;
  list-style: none;
  margin: 0;
  max-height: 100px;
  padding: 0;
`

const NavigationItem = styled.li`
  align-items: center;
  display: inline-flex;
  margin: 0 1em;
`

export default () => (
  <nav role="navigation">
    <Navigation>
      <NavigationItem>
        <Link to="/">Menu 1</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/blog/">Menu 2</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/">Menu 3</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/">Menu 4</Link>
      </NavigationItem>
    </Navigation>
  </nav>
)
