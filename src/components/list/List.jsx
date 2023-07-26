import React from 'react';
import "./list.scss";
import PlaceDetails from '../placeDetails/PlaceDetails';
import { CirclesWithBar } from 'react-loader-spinner';

const List = ({ places, loading, distance, setDistance, type }) => {
  return (
    <div className='list-container'>
      <div className='range-container'>
        <div className='range-label'>
          <span>Distance</span>
          <span>{distance}</span>
        </div>
        <input type="range" min="0" max="5" value={distance} className="slider" id="myRange" onChange={(e) => setDistance(e.target.value)} />
      </div>

      {
        loading ? (
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{ margin: "auto" }}
            wrapperClass=""
            visible={true}
            outerCircleColor="blue"
            innerCircleColor="yellow"
            barColor="blue"
            ariaLabel='circles-with-bar-loading'
          />
        ) : (
          places && places.length > 0 ? (
            <>
              <div className="list-title">
                <h5>{`We found ${places.length} ${type.title}'s around you:`}</h5>
              </div>
              {places.map((place, i) => (
                <PlaceDetails place={place} key={i} id={i} />
              ))}
            </>
          ) : (
            <div className="list-title">
              <h5>{`No ${type.title} found.`}</h5>
            </div>
          )
        )
      }
    </div>
  );
}

export default List;
