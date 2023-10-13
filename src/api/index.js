import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';


export const getPlacesData = async (type, sw, ne) => {
  // const URL = `https://travel-advisor.p.rapidapi.com/${type.type}/list-in-boundary`;
  const URL = `http://localhost:3000/test-api/${type.type}.json`;
    

    try{
        const { data : { data } } = await axios.get(URL, { params: {
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            bl_latitude: sw.lat,
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }catch(e){
        console.log(e);
    }
}

