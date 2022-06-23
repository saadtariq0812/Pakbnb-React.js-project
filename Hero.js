 
 import React from 'react'
 

 

function Hero(props) {

  let badgeText

  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeText = "ONLINE"
  }

  return (

    
    
    <div className='hero'>
      
      {badgeText && <div className='hero--badge'>{badgeText}</ div>}
      
      
      <div className='hero--imgContainer'>
        <img src = {`./${props.img}`} alt = 'not found' className='hero--img'/>
      </div>

      <div className='hero--info'>
        <span className='hero--title'>{props.title}</span>
        <span className = 'gray1'>Taught by: {props.instructor}</span>
        <p className = 'price'>Rs <span className='bold-text'>{props.price} / person</span></p>
      </div>
        
    </div>
    
  )
}

export default Hero
