/* eslint-disable react/prop-types */
import React from 'react'
import { Client } from '../prismic-configuration'
import Cult from '../templates/Cult'

const Homepage = ({ cultData }) => {
  return <Cult data={cultData.data} />
}

export async function getServerSideProps(context) {
  const { req } = context
  const cultData = await Client(req).getSingle('cult')

  return {
    props: { cultData },
  }
}

export default Homepage
