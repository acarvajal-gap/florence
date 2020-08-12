import React from 'react'
import './Image.scss'
import CrossFadeImage from "react-crossfade-image";

function Image ({ selectedMattress }) {
  const { imageFileName } = selectedMattress

  return (
    <CrossFadeImage src={`https://raw.githubusercontent.com/acarvajal-gap/florence/master/src/images/${imageFileName}`} />
  )
}

export default Image
