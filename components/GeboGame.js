import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/GeboGame.module.css'
import { PrismicImage, PrismicAudio } from '../constants/PropTypes'

const GeboGame = ({ audio = {}, frame = {}, content = {}, caption }) => {
  const [on, setOn] = useState(false)
  const audioRef = useRef(null)
  const buttonRef = useRef(null)

  const buttonClickHandler = useCallback(() => {
    const aRC = audioRef.current
    const newState = !on
    setOn(newState)
    if (newState) {
      aRC.play()
    } else {
      aRC.pause()
    }
  }, [on])

  useEffect(() => {
    const bRC = buttonRef.current
    bRC.addEventListener('click', buttonClickHandler)
    return () => {
      bRC.removeEventListener('click', buttonClickHandler)
    }
  }, [buttonClickHandler])

  return (
    <div className={styles.geboGame}>
      <button ref={buttonRef} type='button' className={styles.buttonWrap}>
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
