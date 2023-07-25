import React from 'react'
import "./placeDetails.scss"
import Card from 'react-bootstrap/Card';
import { Rate } from "antd";
import {MdLocationOn} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';

const PlaceDetails = ({ place, id}) => {
  return (
    <Card style={{ width: '100%', display: 'flex', flexDirection: 'row',border:'none', borderBottom:'1px solid #DDDDDD', padding:'2rem', height:'max-content'}}>
      <Card.Img variant="top" src={place.photo ? place.photo.images.large.url : "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"} style={{ width: '30%', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold', fontSize:'1.5rem'}}>{id+1}. {place.name && place.name}</Card.Title>

        <Card.Text style={{fontSize:'1.2rem'}}>

          {place.rating &&
          <span className="card-text">
            <Rate allowHalf disabled defaultValue={place.rating} count={5} style={{fontSize:'1.5rem'}}/> {place.num_reviews} reviews 
          </span>}

          <br/>


          {place.subtype ?
          <span className='card-text'>
            {place.subtype[0].name}
          </span> : null
        }
          
          <br/>

          {place.ranking && <span className='card-text'><strong>Rank</strong> {place.ranking}</span>}

       <br/>

        {place.cuisine ? <div className='cuisine-container'>
          {place?.cuisine?.map(({name}) => (
        <span key={name} className="cuisine">{name}</span>
       ))}
        </div> : null}

        <br/>

        {place.parent_display_name && <span style={{color:'gray'}} className='card-text'> <MdLocationOn /> {place.parent_display_name}</span>}
   
        <br/>


        {place.phone && <span className='card-text'><BsFillTelephoneFill /> {place.phone}</span>}

        <br/>


        {place.web_url && <a className='place-link' variant='' href={place.web_url} style={{border:'none', height:'max-content', padding:'.5rem 0', textDecoration:'none'}}>Trip Advisor</a>}
        {place.website && <a className='place-link' variant='' href={place.website} style={{border:'none', height:'max-content', padding:'.5rem 0', textDecoration:'none'}}>Website</a>}

        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PlaceDetails