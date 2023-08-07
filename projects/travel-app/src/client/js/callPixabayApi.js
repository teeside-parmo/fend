let pixabayApi = async (cityName) => {
    const pixabayApiKey = "25587758-04641389b53d35819a02a40fa";
    const pixabayApiReqURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${cityName}&image_type=photo`;
    const res = await fetch(pixabayApiReqURL);
    let result = {};
    try {
      result = await res.json();
    } catch (error) {
      console.log("error:", error);
    }
    return result;
  };
  
  export { pixabayApi };