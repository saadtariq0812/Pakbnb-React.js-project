import React from 'react'

function Card(props) {
  return (
    
    <div className = 'card'>
        
        <img className='card--img' src = {`./${props.img}`} alt = 'not found' />
        <div className = 'card--stats'>
            <img className = 'card--ratingLogo' src = './rating-logo.png' alt = 'not found' />
            <span>{props.rating}</span>
            <span className = 'gray1'>({props.reviewCount})</span>
            <span className = 'gray2'> {props.city}</span>
        </div>
        <p className='price'><span className = 'bold-text'>Rs {props.price}</span>/month</p>
    
    </div>
  )
}

export default Card