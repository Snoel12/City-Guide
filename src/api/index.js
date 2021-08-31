import axios from "axios";
const URL = "";

//thunks

export const getPlaces = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "f7bd92a7damsh5307b5504d700dep1a0315jsnd5c9eea864c4",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
