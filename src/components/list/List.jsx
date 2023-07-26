import React,{useState, useEffect} from 'react';
import "./list.scss";
import PlaceDetails from '../placeDetails/PlaceDetails';
import { CirclesWithBar } from 'react-loader-spinner';

const List = ({ places, loading, distance, setDistance, type }) => {

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const trackStyles = {
    '--distance': `calc(${distance}% / 100 * 100)`,
  };

  useEffect(() => {
    // Check if places is defined and not empty
    if (Array.isArray(places) && places.length > 0) {
      // Filter places based on the selected distance
      const filtered = places.filter((place) => place.distance <= distance);
      setFilteredPlaces(filtered);
    }
  }, [places, distance]);
  
  return (
    <div className='list-container'>
      <div className='range-container'>
        <div className='range-label'>
          <span>Distance</span>
          <span>{distance}</span>
        </div>
        <input type="range" min="0" max="5" value={distance} className="slider" id="my-range" onChange={(e) => setDistance(e.target.value)} style={trackStyles} />
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
                <h5>{`We found ${filteredPlaces.length} ${type.title}'s around you:`}</h5>
              </div>
              {filteredPlaces.map((place, i) => (
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
