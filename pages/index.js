import React from 'react'
import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Head from 'next/head'
import { useRouter } from 'next/router'

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
`

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
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Rock Quiz</title>
        <meta name="title" content="Rock Quiz" />
        <meta name="description" content="Teste os seus conhecimentos sobre bandas de rock e vamos ver quantas caixas de som você vai quebrar."/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Rock Quiz" />
        <meta property="og:description" content="Teste os seus conhecimentos sobre bandas de rock e vamos ver quantas caixas de som você vai quebrar."/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Rock Quiz" />
        <meta property="twitter:description" content="Teste os seus conhecimentos sobre bandas de rock e vamos ver quantas caixas de som você vai quebrar."/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function(infosDoEvento){
                  infosDoEvento.preventDefault()
                  router.push(`/quiz?name=${name}`)
                  console.log('Fazendo uma submissão por meio do react')
                }}>
                <input 
                  onChange={function(infosDoEvento) {
                    console.log(infosDoEvento.target.value)
                    //state
                    setName(infosDoEvento.target.value)
                  }} 
                  placeholder='Diz aí seu nome' 
                />
                <ButtonStyle>
                  <button type='submit' disable={name.length === 0}>
                    Jogar {name}
                  </button>
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
      <GitHubCorner projectUrl="https://github.com/kayehol" />
    </QuizBackground>
  );
}
