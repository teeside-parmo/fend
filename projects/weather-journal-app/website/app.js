setTimeout(() =>{
    document.querySelector("body").style.opacity = '1';
  },300);

/* Global Variables */

const generate = document.querySelector("#generate");
const country = document.getElementById('country');
const zip = document.getElementById('zip-code');
const feelings = document.getElementById('feelings');
const coming = document.querySelector(".coming");
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const city = document.getElementById('city');
const weather = document.getElementById('weather');
const date = document.getElementById('date');
const key = "&appid=d7b21d5df03208b0779e2537d120825f&units=imperial";
const errorMessage = document.getElementById('message');
const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
const requestForm = "https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}";
let d = new Date();
let newDate = d.toDateString();

const getData = async (url) =>{
    try {   
           const response = await fetch(url);
            const result = await response.json();
            if(result.cod != 200){
                return result;
                
            }
            return result;
        }catch(e) {
        console.log(e.message);
    }
};

const projectData = async(data)=>{
    try{
        if(data.cod != 200){
            return data;
        }
        
            const info = {
                date: newDate,
                temp: Math.round(data.main.temp),
                content: feelings.value,
                city: data.name,
                weather: data.weather[0].description,
                country: data.sys.country,
             };
             return info;
        
    }catch(e){
        console.log(e);
    }
};

const postData = async (url='', data={})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials:"same-origin",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    }catch (err) {
        console.error(err);
    }
};

const retrieveData = async (url) => {
   const response = await fetch(url);
   try{
       const result = await response.json();
       return result;
   }catch (err) {
       console.error(err);
   }
};

const updateUI = async (info) => {
    if(!info.message){
        city.innerHTML = info.city + ", " + info.country;
        weather.innerHTML = info.weather;
        temp.innerHTML = `${info.temp}&#176`;
        content.innerHTML = info.content? info.content  : "How do you feel &#128517;";
        date.innerHTML = info.date;
        message.innerHTML = "";
        document.querySelector(".weather-info").style.opacity = "1";
        setTimeout(async ()=> {
        document.querySelector(".api-input").style.opacity = "1";
            document.querySelector(".api-input").style.display="flex";
            document.querySelector(".api-input").scrollIntoView();
        }, 1000);
        if(info.temp < 32){
            document.querySelector("img").setAttribute("src", "/images/snow.png");
        }else if(info.temp>80){
            document.querySelector("img").setAttribute("src", "/images/hot.png");
        }else{
            document.querySelector("img").setAttribute("src", "/images/cloudy.png");
        }
    }else{
        document.querySelector(".weather-info").style.opacity = "1";
        setTimeout(async ()=> {
        document.querySelector(".api-input").style.opacity = "0";
            document.querySelector(".api-input").style.display="none";
            message.innerHTML = info.message;
        },1000);
   
    }
};

generate.addEventListener("click", (e)=>{
    e.preventDefault();
    const madeURL = `${baseURI}${zip.value},${country.value}${key}`;
    //fetch the url and get the data the needs to be sliced
    getData(madeURL).
    then((data)=>{
    //get the info we want from the coming data of the weather
    projectData(data).
    then((info)=>{
    //post the data to a url called "/add" 
    postData("/add", info).
    then((data)=>{
    //retrieve the data sent to the server from "/add" post 
        retrieveData("/all").
        then(data=>{
    // now am able to update the ui with the data i got
        updateUI(data);
        });
    });
    });
    
    });
});