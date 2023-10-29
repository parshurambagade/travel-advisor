import React from 'react'
import "./placeDetails.scss"
import { Rate } from "antd";
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const PlaceDetails = ({ place, id }) => {
  return (
    <div className='card'>

      <div className='card-img'>
        <img src={place.photo ? place.photo.images.large.url : "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"} alt={place ? place.name : "image"} />
      </div>

      <div className='card-body'>

        <div className='card-title'>{id + 1}. {place.name && place.name}</div>

        {place.rating && place.num_reviews &&
          <div className="card-text">
            <Rate allowHalf disabled defaultValue={place.rating} count={5} style={{ fontSize: '1.1rem', margin:'0 .5rem'}} />

            {`${ place.num_reviews} reviews`}
          </div>
        }

        <br />

      {place.subtype ?
        <div className='card-text'>
          {place.subtype[0].name}
        </div> : null
      }

      <br />

      {place.ranking && <div className='card-text'><strong>Rank</strong> {place.ranking}</div>}

      <br />

      {place.cuisine ? <div className='cuisine-container'>
        {place?.cuisine?.map(({ name }) => (
          <span key={name} className="cuisine">{name}</span>
        ))}
      </div> : null}

      <br />

      {place.parent_display_name ? <span style={{ color: 'gray' }} className='card-text'> <MdLocationOn /> {place.parent_display_name}</span> : place.location_string ? <span style={{ color: 'gray' }} className='card-text'> <MdLocationOn /> {place.location_string}</span> : null}

      <br />


      {place.phone && <span className='card-text'><BsFillTelephoneFill /> {place.phone}</span>}

      <br />

      <div className='link-container'>
        {place.web_url && <a className='card-link' href={place.web_url} >Trip Advisor</a>}

        {place.website && <a className='card-link' href={place.website}>Website</a>}
      </div>
    </div>
  </div>
  )
}

export default PlaceDetails