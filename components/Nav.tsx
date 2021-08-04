import React from 'react'
import styled from 'styled-components'

const NavContent = styled.nav`
  width: 100%;
  height: 3rem;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


const Nav: React.FC = (props) => {
  return (<NavContent>
    <NavInner>
      {props.children}
    </NavInner>
  </NavContent>)
}

export default Nav