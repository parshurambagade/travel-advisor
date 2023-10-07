import React from 'react';
import "./map.scss";
import GoogleMapReact from 'google-map-react';
import { MdLocationOn }  from 'react-icons/md';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {

const Mark = ({ text }) => <span style={{fontSize:'3rem', color:'red'}}>{text}</span>;
  return (
    <div className='map-container'>
      
    <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Replace with your Google Maps API key
        defaultCenter={coordinates} // Center the map on the marker's coordinates
        center={coordinates}
        defaultZoom={14} // Set an appropriate zoom level
        margin={[50, 50, 50, 50]}
        options={{
        }} 
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        className='google-map'
      >
    
        {/* {places && places.map((place, i) => (
        <Mark lat={Number(place.latitude)} lng={Number(place.longitude)} text={<GiAchievement />} key={i} />
        ))} */}

        <Mark lat={coordinates.lat} lng={coordinates.lng} text={<MdLocationOn />} />
      

      </GoogleMapReact> 
    </div>
  );
};

export default Map;
