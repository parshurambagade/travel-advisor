import React from 'react'
import "./list.scss"
import PlaceDetails from '../placeDetails/PlaceDetails'
import { Slider, RangeSlider } from 'rsuite';

import {CirclesWithBar} from 'react-loader-spinner'

const List = ({places, loading}) => {

  return (
    <div className='list-container'>
      <div className='slider-container'>
        <RangeSlider defaultValue={[5]} max={5} style={{height:'25rem', width:'25%', color:'black'}} />
      </div>
      { 
        loading ? <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{margin: "auto"}}
        wrapperClass=""
        visible={true}
        outerCircleColor="blue"
        innerCircleColor="yellow"
        barColor="blue"
        ariaLabel='circles-with-bar-loading'
        
      /> :
        places && places.map((place, i) => (
            <PlaceDetails place={place} key={i} id={i}/>
        ))
      }

  </div>
  )
}

export default List