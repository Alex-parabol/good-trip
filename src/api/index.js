import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {

      params: {
        /* bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359', */
        //how is supposed to be
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '61ec8ff567msh8628137f983d9efp127d4bjsnfaf503f50cc3'
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}