/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'
import { Client } from '../prismic-configuration'
import Layout from '../components/Layout'
import GeboGame from '../components/GeboGame'

const Homepage = ({ geboGame }) => {
  const { audio, caption, content, frame } = geboGame.data
  return (
    <>
      {/* Temp metadata */}
      <Head>
        {/* Regular */}
        <title>Gebo Life</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charset='utf-8' />
        <meta name='description' content='Just two Gebos doing Gebo things.' />
        <link rel='canonical' href='https://gebo.life/' />
        {/* Facebook */}
        <meta property='og:title' content='Gebo Life' />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={content.url} />
        <meta property='og:description' content='Just two Gebos doing Gebo things.' />
        <meta property='og:url' content='https://gebo.life/' />
        {/* Twitter */}
        <meta name='twitter:title' content='Gebo Life' />
        <meta name='twitter:description' content='Just two Gebos doing Gebo things.' />
        <meta name='twitter:image' content={content.url} />
        <meta name='twitter:card' content='Just two Gebos doing Gebo things.' />
      </Head>

      <Layout>
        <GeboGame audio={audio} caption={caption} content={content} frame={frame} />
      </Layout>
    </>
  )
}

export default Homepage

export async function getServerSideProps(context) {
  const { req } = context

  const geboGame = await Client(req).getSingle('gebo_game')
  return {
    props: {
      geboGame,
    },
  }
}
