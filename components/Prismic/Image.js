import React from 'react'
// import Image from 'next/image'
import t from 'typy'
import { prismicImagePropType } from '../../constants/prop-types'

const PrismicImage = ({ content, ...props }) =>
  t(content, 'url').isDefined && (
    <img {...props} src={content.url} alt={content.alt} />
  )

PrismicImage.propTypes = { content: prismicImagePropType }

export default PrismicImage
