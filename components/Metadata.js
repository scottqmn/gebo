import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Metadata = ({
  title,
  description,
  url,
  imgUrl,
  ogType = 'website',
  twitterCard = 'summary',
}) => {
  return (
    <Head>
      {/* Regular */}
      {title && <title>{title}</title>}
      <link rel='icon' href='/favicon.ico' />
      <meta charset='utf-8' />
      {description && <meta name='description' content={description} />}
      {url && <link rel='canonical' href={url} />}
      {/* Open Graph/Facebook */}
      {title && <meta property='og:title' content={title} />}
      {description && <meta property='og:description' content={description} />}
      {imgUrl && <meta property='og:image' content={imgUrl} />}
      {url && <meta property='og:url' content={url} />}
      <meta property='og:type' content={ogType} />
      {/* Twitter */}
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {imgUrl && <meta name='twitter:image' content={imgUrl} />}
      <meta name='twitter:card' content={twitterCard} />
    </Head>
  )
}

Metadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  imgUrl: PropTypes.string,
  ogType: PropTypes.string,
  twitterCard: PropTypes.string,
}

Metadata.defaultProps = {
  title: '',
  description: '',
  url: '',
  imgUrl: '',
  ogType: 'website',
  twitterCard: 'summary',
}

export default Metadata
