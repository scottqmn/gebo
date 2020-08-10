import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import t from "typy"
import styles from "../styles/AudioPlayer.module.css"

const AudioPlayer = ({ files = [] }) => {
  const [audioSrc, setAudioSrc] = useState(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * files.length)
    if (t(files[randomIndex], "audio_file.url")) {
      setAudioSrc(files[randomIndex].audio_file.url)
    }
  }, [files, setAudioSrc])

  return (
    <div className={styles.container}>
      {/* Autoplay hack */}
      <iframe
        src="https://olafwempe.com/mp3/silence/silence.mp3"
        type="audio/mp3"
        allow="autoplay"
        id="audio"
        style={{ display: "none" }}
      />
      <audio controls autoPlay>
        {audioSrc && <source src={audioSrc} type="audio/mpeg" />}
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

AudioPlayer.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      audio_file: PropTypes.shape({
        url: PropTypes.string,
      }),
    })
  ),
}

export default AudioPlayer
