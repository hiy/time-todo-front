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
const GithubLink = styled.span`
  margin-right: 1rem;
`
const IconWrapper = styled.div`
  margin-top: .7rem;
`

const Nav: React.FC = (props) => {
  return (
    <NavContent>
      <NavInner className='pure-menu pure-menu-horizontal pure-menu-fixed'>
        <h1 className='pure-menu-heading'><Link href="/">TimerTodo</Link></h1>
        <div>
          {props.children}
          <IconWrapper>
          <Link href="https://github.com/hiy/time-todo">
            <GithubLink><FaGithub size={40}/></GithubLink>
          </Link>
          </IconWrapper>
        </div>
      </NavInner>
    </NavContent>)
}

export default Nav