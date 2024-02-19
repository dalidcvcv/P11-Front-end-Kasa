import React from 'react'
import { useState } from 'react'
import './Caroussel.css'
import VectorLeft from '../assets/Arrowleft.svg'
import VectorRight from '../assets/Arrowright.svg'

function Caroussel({ pictures }) {
  const [index, setIndex] = useState(0)

  function showPrev() {
    const newIndex = index === 0 ? pictures.length - 1 : index - 1
    setIndex(newIndex)
  }

  function showNext() {
    const newIndex = index === pictures.length - 1 ? 0 : index + 1
    setIndex(newIndex)
  }

  return (
    <div className='caroussel'>
      {pictures.length > 1 && (
        <button onClick={showPrev} aria-label="Previous" className='btn_previous'>
          <img src={VectorLeft} alt="Previous" />
        </button>
      )}

      <img src={pictures[index]} alt="Carousel" className="carousel-img" />

      {pictures.length > 1 && (
        <div className="carousel-counter">{`${index + 1}/${pictures.length}`}</div>
      )}

      {pictures.length > 1 && (
        <button onClick={showNext} aria-label="Next" className='btn_next'>
          <img src={VectorRight} alt="Next" />
        </button>
      )}
    </div>
  )
}

export default Caroussel
