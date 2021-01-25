import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
        <meta name="title" content="AluraQuiz" />
        <meta name="description" content="Quiz about something" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.alnun.vercel.app/" />
        <meta property="og:title" content="AluraQuiz" />
        <meta property="og:description" content="Quiz about something" />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.alnun.vercel.app/" />
        <meta property="twitter:title" content="AluraQuiz" />
        <meta property="twitter:description" content="Quiz about something" />
        <meta property="twitter:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>AluraQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet ...</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>lorem ipsum dolor sit amet ...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AlNuN" />
    </QuizBackground>
  )
}
