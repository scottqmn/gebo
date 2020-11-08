import React from 'react'
import { RichText as PrismicRichText } from '../Prismic'
import { prismicRichTextPropType } from '../../constants/prop-types'

const RichText = ({ content }) => (
  <div className='rte'>
    <PrismicRichText content={content} />
  </div>
)

RichText.propTypes = {
  content: prismicRichTextPropType,
}

export default RichText
