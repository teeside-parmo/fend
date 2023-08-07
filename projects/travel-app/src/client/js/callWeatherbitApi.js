let weatherbitApi = async (geoData) => {
    const lat = geoData.lat;
    const lng = geoData.lng;
    const weatherbitApiKey = "ee585a37a1084e9788b39fad8928eefd";
    const weatherbitApiReqURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitApiKey}`;
    const res = await fetch(weatherbitApiReqURL);
    let result = {};
    try {
      result = await res.json();
    } catch (error) {
      console.log("error:", error);
    }
    return result;
  };
  
  export { weatherbitApi };