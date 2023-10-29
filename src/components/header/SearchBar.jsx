import React, {useRef} from 'react'
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api'

const SearchBar = ({setCoordinates}) => {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if(place){
      console.log(place.formatted_address);
      // console.log("Palus");
      // console.log(place.geometry.location.lat());
      // console.log(place.geometry.location.lng()); 
      setCoordinates({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()});
    }else{
      console.log("No place found");
    }
  };


  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={["places"]}>

      <StandaloneSearchBox onLoad={ref => inputRef.current = ref} onPlacesChanged={handlePlaceChanged}>
        <input
          type="text"
          placeholder="Enter an address"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `40vw`,
            padding: `.6rem`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `1rem`,
            outline: `none`,
            textOverflow: `ellipses`,
            // position: "absolute",
            // left: "50%",
            // marginLeft: "-120px",
            marginTop: "0"
          }}
        />
        </StandaloneSearchBox>
    </LoadScript>
  )
}

export default SearchBar