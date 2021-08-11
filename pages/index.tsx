import Link from 'next/link'
import styled from 'styled-components'
import HtmlHead from '../components/Head';
import Footer from '../components/Footer'
import Nav from '../components/Nav'

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

export default function Home() {
  return (
    <Container>
      <HtmlHead title={'Timer TODO'} />

      <Nav>
        <h1><Link href="/">TimerTodo</Link></h1>
      </Nav>


      <Main>
        <div>
          [説明]
          <p>
            Time-TODOは日々のタスク消費時間を手軽に計測できるサービスです。
            使い方は日々のタスクを登録してタスク開始時にstartボタン、タスク完了時にstopボタンをクリックするだけです。
            例えば英語の勉強というタスクの場合、英語の勉強のタスク開始時にstartボタンをクリックして完了時にstopボタンを押すだけです。
            毎日のタスクは自動で計測され月別に可視化されます。
          </p>
          <Link href="/todoList">使ってみる</Link>
        </div>

        <div>
          [サインアップ・サインイン]
          <p>
            未登録でも3ヶ月までのデータを保存できます。
            サインアップすることで3ヶ月以上のデータを保存することができます。
          </p>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}
