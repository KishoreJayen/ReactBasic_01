import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from "react"
import axios from 'axios';
import LoginPage from './LoginPage';


function App() {
  const [city, setCity]= useState(null)
  const[lat, setLat]= useState(null)
  const [long, setLong]= useState(null)

useEffect(()=>{
   apiCall();
},[]);


const apiCall = async()=>{
  try{
  const url= "http://api.geonames.org/findNearByWeatherJSON?lat=10.921389325&lng=77.30262575&username=arun"
  const response = await axios.get(url)
 const data = response.data
 console.log(data)
 setCity( data.weatherObservation.stationName)
 setLat(data.weatherObservation.lat)
 setLong(data.weatherObservation.lng)

}
catch(error){
  console.log(error)
}
}





  return (
    <div className="App">
     <h1>City: {city}</h1>
      <i>Latitude: {lat}</i> <br></br>
      <i>Longitude: {long}</i>
    <LoginPage/>
    </div>
  );
}

export default App;


























// console.log("1. Init")


// //State
// let [name, setName]= useState("Kishore")

// useEffect(()=>{
// console.log("3. Useeffect- ComponentdidMount() & componentdidUpdate()")



// //API 1
// const weatherApi = async()=>{
// let config={
// method:'get',
// url:  "http://api.geonames.org/findNearbyPlaceNameJSON?lat=47.3&lng=9&username=krish",
// headers:{ }
// };


// axios.request(config)
// .then((response) =>{
// console.log(JSON.stringify(response.data));
// })
// .catch((error)=>{
// console.log(error);
// });

// //API call type2 recommended


// try{
// const response = await axios.get("http://api.geonames.org/findNearbyPlaceNameJSON?lat=47.3&lng=9&username=krish",
// {/*header(optional)*/}, {/*params(optional)*/});
// console.log(response);
// setName(JSON.stringify(response))
// }
// catch(error){
//   console.log(error)
// }
// }
// weatherApi();
// })
