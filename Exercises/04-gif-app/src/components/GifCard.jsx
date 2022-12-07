import React from 'react'
import PropTypes from 'prop-types';

export const GifCard = ( {title, url, id} ) => {

console.log(title, url, id)

  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
        </div>

  )
}


GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

