/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'
import { Client } from '../prismic-configuration'
import Layout from '../components/Layout'
// import AudioPlayer from '../components/AudioPlayer'
// import ImageDisplay from '../components/ImageDisplay'
import GeboGame from '../components/GeboGame'

const Homepage = ({ homepage, geboGame }) => {
  console.log(homepage, geboGame)

  const { audio, caption, content, frame } = geboGame.data
  return (
    <>
      <Head>
        <title>Gebo Life</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {/* <ImageDisplay image={props.doc.data.main} />
        <AudioPlayer files={props.doc.data.audio} /> */}
        <GeboGame audio={audio} caption={caption} content={content} frame={frame} />
      </Layout>
    </>
  )
}

export default Homepage

export async function getServerSideProps(context) {
  const { req } = context
  const homepage = await Client(req).getSingle('homepage')
  const geboGame = await Client(req).getSingle('gebo_game')
  return {
    props: {
      homepage,
      geboGame,
    },
  }
}
