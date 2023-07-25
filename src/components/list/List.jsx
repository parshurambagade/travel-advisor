import React from 'react'
import "./list.scss"
import PlaceDetails from '../placeDetails/PlaceDetails'

import {CirclesWithBar} from 'react-loader-spinner'

const List = ({places, loading}) => {

  return (
    <div className='list-container'>
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