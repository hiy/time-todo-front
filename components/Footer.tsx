import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa"

const FooterContent = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const GithubLink = styled.span`
  margin-right: 1rem;
`
const IconWrapper = styled.div`
  // margin-top: .7rem;
`


const Footer: React.FC = () => {
  return (
    <FooterContent>
                <IconWrapper>
          <Link href="https://github.com/hiy/time-todo">
            <GithubLink><FaGithub size={40}/></GithubLink>
          </Link>
          </IconWrapper>
    </FooterContent>
  )
}

export default Footer