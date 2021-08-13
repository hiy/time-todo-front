import Link from 'next/link'
import styled from 'styled-components'
import HtmlHead from '../components/Head';
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Container = styled.div`
  height: 100%;
  padding: 0 1rem;
`

const Splash = styled.div`
  width: 60%;
  height: 50%;
  margin: auto;
  position: absolute;
  top: 100px; left: 0; bottom: 0; right: 0;
  text-align: center;
  text-transform: uppercase;

`

const SplashHead = styled.div`
  font-size: 20px;
  font-weight: bold;
  border: 3px solid gray;
  padding: 1em 1.6em;
  font-weight: 100;
  border-radius: 5px;
  line-height: 1.6em;
  margin-bottom: 3.2rem;
  background: white;
`


const SplashContainer = styled.div`
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed !important;
  background-image: url("/time-todo-front/jikan_tobu.png");
  background-position: bottom;
  background-repeat: repeat-x;
`

const Main = styled.main``;


export default function Home() {
  return (
    <Container>
      <HtmlHead title={'Timer TODO'} />

      <Nav>
      </Nav>

      <Main className=''>
        <SplashContainer>
          <Splash>
            <SplashHead>
              Timer-TODOは日々のタスク消費時間を計測できるサービスです。<br />
              毎日のタスクは自動で月別に可視化されます。
            </SplashHead>

            <Link href="/todoList"><span className="button-large pure-button pure-button-primary">使ってみる</span></Link>

            {/* <Link href="/todoList"><span className="pure-button pure-button-primary">Googleアカウントで登録</span></Link>
            <p>サインアップすることでデータを保存することができます。</p> */}
          </Splash>
        </SplashContainer>
      </Main>
    </Container>
  )
}
