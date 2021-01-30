/* eslint-disable semi */
import React from 'react'
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input'
import Button from '../src/components/Button'

/*
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  display: flex;
  flex: 1;
  background-size: cover;
  background-position: center;
`
*/

const ButtonStyle = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: center;
`;

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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Rock Quiz</title>
        <meta name="title" content="Rock Quiz" />
        <meta
          name="description"
          content="Teste os seus conhecimentos sobre bandas de rock e vamos ver quantas caixas de som você vai quebrar."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rockquiz.vercel.app" />
        <meta property="og:title" content="Rock Quiz" />
        <meta
          property="og:description"
          content="Teste os seus conhecimentos sobre bandas de rock e vamos ver quantas caixas de som você vai quebrar."
        />
        <meta
          property="og:image"
          content="http://authorityalchemy.com/wp-content/uploads/2015/11/sex-pistols-5041ff2ab1b3c.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rockquiz.vercel.app/" />
        <meta property="twitter:title" content="Rock Quiz" />
        <meta
          property="twitter:description"
          content="Teste os seus conhecimentos sobre bandas de rock e vamos ver quantas caixas de som você vai quebrar."
        />
        <meta
          property="twitter:image"
          content="http://authorityalchemy.com/wp-content/uploads/2015/11/sex-pistols-5041ff2ab1b3c.jpg"
        />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do react');
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz aí seu nome"
                value={name}
              />
              <ButtonStyle>
                <Button type="submit" disable={name.length === 0}>
                  Jogar {name}
                </Button>
              </ButtonStyle>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>The legend of Zelda</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/kayehol/rockquiz" />
    </QuizBackground>
  );
}
