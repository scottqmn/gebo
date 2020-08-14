import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Metadata = ({ url, pageTitle, description, imgUrl, summary }) => {
  return (
    <Head>
      {/* Regular */}
      <title>{pageTitle}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta charset='utf-8' />
      <meta name='description' content={description} />
      <link rel='canonical' href={url} />
      {/* Facebook */}
      <meta property='og:title' content={pageTitle} />
      <meta property='og:type' content='article' />
      <meta property='og:image' content={imgUrl} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      {/* Twitter */}
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imgUrl} />
      <meta name='twitter:card' content={summary} />
    </Head>
  )
}

Metadata.propTypes = {
  url: PropTypes.string,
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  summary: PropTypes.string,
}
