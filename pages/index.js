/* eslint-disable react/prop-types */
import React from 'react'
import { Client } from '../prismic-configuration'
import Cult from '../templates/Cult'
import GeboGame from '../components/GeboGame'

const Homepage = ({ homepageData }) => {
  const gameData = homepageData.data.body.find(
    ({ slice_type }) => slice_type === 'game'
  )

  console.log(gameData)
  const { audio, caption, content, frame } =
    gameData?.primary?.game_data?.data || {}
  return (
    <GeboGame audio={audio} frame={frame} content={content} caption={caption} />
  )
}

export async function getServerSideProps(context) {
  const { req } = context

  const queryOptions = {
    fetchLinks: [
      'gebo_game.audio',
      'gebo_game.frame',
      'gebo_game.content',
      'gebo_game.caption',
    ],
  }
  const homepageData = await Client(req).getSingle('homepage', queryOptions)

  return {
    props: { homepageData },
  }
}

export default Homepage
