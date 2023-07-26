import { getPlacesData } from './api'
import React, {useState, useEffect} from 'react'
import Header from "./components/header/Header"
import Map from "./components/map/Map"
import List from "./components/list/List"
import "./style.scss"
import './app.scss';

const App = () => {
  const [places, setPlaces] = useState([]);

  const [distance, setDistance] = useState(5);
  
  const [loading, setLoading] = useState(false);  

  const [coordinates, setCoordinates] = useState({});

  const [bounds, setBounds] = useState({});

  const [type, setType] = useState({
    type: "attractions",
    title: "Attractions"
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => { 
      setCoordinates({lat: latitude, lng: longitude});
      console.log(latitude, longitude);
    })
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlacesData( type, bounds.sw , bounds.ne )
      .then((data) => {
        console.log(data);
        setPlaces(data);
        setLoading(false);
      })
  }, [type, coordinates, bounds]);

  console.log("Places data in App:", places);


  return (
    <div className='app-container'>
      <div className='header-container'>
      <Header type={type} setType={setType} />
      </div>
      <div className='list-map-container'>
        <div className='list-container'>
          <List places={places} loading={loading} distance={distance} setDistance={setDistance} type={type} />
        </div>
        <div className="map-container">
          <Map setBounds={setBounds} setCoordinates={setCoordinates} coordinates={coordinates} places={places} />
        </div>
      </div>
    </div>
  )
}

export default App