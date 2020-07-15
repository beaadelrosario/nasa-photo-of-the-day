import React, {useState , useEffect} from "react";
import axios from "axios"
import "./App.css";
import ImageOTD from "./components/Body/ImageOTD"
// import header from "./components/Header/Header"

function App() {
  // console.log('hi sam')

  const [imageOTD , setimageOTD] = useState()
  
  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( (response) => {
        console.log(response)
        setimageOTD(response.data.url)
      })
      .catch( (error) => {
        console.log(error)
      })
  },[]) 
  return (
    <div className="App">
      <ImageOTD imageOTD={imageOTD} />
    </div>
  );
}

export default App;
