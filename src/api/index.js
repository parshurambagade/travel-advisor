import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';


export const getPlacesData = async (type, sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type.type}/list-in-boundary`;
    /* The code block you provided is an asynchronous function that makes an HTTP GET request to the
    specified URL using the axios library. */
    try{
        const { data : { data } } = await axios.get(URL, { params: {
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            bl_latitude: sw.lat,
          },
          headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }catch(e){
        console.log(e);
    }
}

