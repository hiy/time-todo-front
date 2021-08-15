import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa"
import Link from 'next/link'

const NavContent = styled.nav`

`

const NavInner = styled.div`
  display: flex;
  justify-content:  space-between;
  align-items: center;
  flex-grow: 1;
  flex-direction: row
`

const RightWrapper = styled.ul`
  padding-top: 0.7rem;
  display: flex;
  align-content: space-around;
  flex-direction: row;
  align-items: center;
  list-style: none;

  li {
    margin: 0 1rem;
  }
`

const Nav: React.FC = (props) => {
  return (
    <NavContent>
      <NavInner className='pure-menu pure-menu-horizontal pure-menu-fixed'>
        <h1 className='pure-menu-heading'><Link href="/">Timer-Todo</Link></h1>
        <RightWrapper>
          {props.children}
        </RightWrapper>
      </NavInner>
    </NavContent>)
}

export default Nav