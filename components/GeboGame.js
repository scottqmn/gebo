import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import t from 'typy'
import styles from '../styles/GeboGame.module.css'
import { PrismicImage, PrismicAudio } from '../constants/PropTypes'

const GeboGame = ({ audio = {}, frame = {}, content = {}, caption }) => {
  const [on, setOn] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (on) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [on])

  return (
    <div className={styles.geboGame}>
      <button type='button' onClick={() => setOn(!on)}>
        <figure className={styles.container}>
          <img className={styles.frame} src={frame.url} alt={frame.alt} />
          <div className={styles.contentWrap}>
            {on && <img className={styles.content} src={content.url} alt={content.alt} />}
          </div>
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      </button>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} loop>
        {audio.url && <source src={audio.url} type='audio/mpeg' />}
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

GeboGame.propTypes = {
  audio: PrismicAudio,
  frame: PrismicImage,
  content: PrismicImage,
  caption: PropTypes.string.isRequired,
}

GeboGame.defaultProps = {
  audio: {},
  frame: {},
  content: {},
}

export default GeboGame
