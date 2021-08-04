import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa"

const FooterContent = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GithubLink = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
`

const Footer: React.FC = () => {
  return (
    <FooterContent>
      <Link href="https://github.com/hiy/time-todo">
        <GithubLink><FaGithub /> GitHub</GithubLink>
      </Link>
    </FooterContent>
  )
}

export default Footer