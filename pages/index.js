import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

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
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>AluraQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(evento) => {
              evento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(evento) => {
                  setName(evento.target.value);
                }}
                placeholder="diz seu nome aí"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
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
      <GitHubCorner projectUrl="https://github.com/AlNuN/aluraquiz" />
    </QuizBackground>
  );
}
