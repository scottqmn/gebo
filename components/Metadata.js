import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import t from 'typy'

const Metadata = ({
  title,
  description,
  url,
  image,
  ogType = 'website',
  twitterCard = 'summary',
}) => {
  const imageUrl = t(image, 'url').safeObject

  return (
    <Head>
      {/* Regular */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {url && <link rel='canonical' href={url} />}
      {/* Open Graph/Facebook */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {imageUrl && <meta property='og:image' content={imageUrl} />}
      {url && <meta property='og:url' content={url} />}
      <meta property='og:type' content={ogType} />
      {/* Twitter */}
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {imageUrl && <meta name='twitter:image' content={imageUrl} />}
      <meta name='twitter:card' content={twitterCard} />
    </Head>
  )
}

Metadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.shape({ url: PropTypes.string }),
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
}

export default Metadata
