import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import styled from 'styled-components'
import React from 'react'
import HtmlHead from '../components/Head'

const Container = styled.div`
  height: 100%;
  padding: 0 1rem;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Dashboard() {
  return (
    <Container>
      <Main>
        <HtmlHead title={'Timer TODO'} />

        <Nav>
          <h1><Link href="/">TimerTodo</Link></h1>
          <Link href="/todoList">Todoリスト</Link>
        </Nav>

        <div>結果をビジュアライズ</div>
      </Main>
    </Container>
  )
}