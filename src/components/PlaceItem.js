import React from 'react'
import './PlaceItem.css'  
export const PlaceItem = ({id,place}) => {
  return (
    <div className='card carditem'>
    <div className='card-title'>{place.name}</div>
    <div className='card-text'>Type: {place.type}</div>
    <div className='card-text'>Address: {place.address}</div>
    <div className='card-text'>weather</div>
    </div>
  )
}
