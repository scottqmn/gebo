/* eslint-disable react/prop-types */
import React from 'react'
import { Client } from '../prismic-configuration'
import Layout from '../components/Layout'
import Metadata from '../components/Metadata'
import GeboGame from '../components/GeboGame'

const Homepage = ({ geboGame, defaultMetadata }) => {
  const { audio, caption, content, frame } = geboGame.data
  const { title, description, url, image } = defaultMetadata.data
  return (
    <>
      <Metadata title={title} description={description} url={url} imgUrl={image.url} />

      <Layout>
        <GeboGame audio={audio} caption={caption} content={content} frame={frame} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const { req } = context

  const geboGame = await Client(req).getSingle('gebo_game')
  const defaultMetadata = await Client(req).getSingle('metadata')

  return {
    props: {
      geboGame,
      defaultMetadata,
    },
  }
}

export default Homepage
