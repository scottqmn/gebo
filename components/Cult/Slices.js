import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'
import RichText from './RichText'
// import HowItWorks from './HowItWorks'

const Slices = ({ slices }) =>
  slices.map(({ slice_type, primary }, index) => {
    let Component
    switch (slice_type) {
      case 'logo':
        Component = () => <Logo logo={primary.image} />
        break
      case 'rich_text':
        Component = () => <RichText content={primary.content} />
        break
      // case 'how_it_works':
      //   Component = () => <HowItWorks />
      //   break
      default:
    }

    return (
      <div key={`cult-slice-${index}`}>
        <Component />
      </div>
    )
  })

Slices.propTypes = {
  slices: PropTypes.array,
}

export default Slices
