import React from 'react';
// import "./map.scss";
import GoogleMapReact from 'google-map-react';
import { MdLocationOn }  from 'react-icons/md';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {

const Mark = ({ text }) => <span style={{fontSize:'4rem', color:'red'}}>{text}</span>;
  return (
    <div style={{height:'100%', width:"100%", fontSize:'2rem'}}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCZwfhMJrM3qWdT9ePW0YOUbMGQcbvZDdA' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      > */}
        {/* {places &&
          places.map((place, i) => {
            
            return (
            <div
              className='markerContainer'
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              <div style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%', zIndex:'500000' }} />
            </div>
          )})
} */}
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
