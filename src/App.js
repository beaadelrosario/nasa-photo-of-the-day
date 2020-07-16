import React, {useState , useEffect} from "react";
import axios from "axios"
import "./App.css";
import ImageOTD from "./components/Body/ImageOTD"
import Header from "./components/Header/Header"
// import header from "./components/Header/Header"
import styled from "styled-components"

const StyledDetails = styled.div`
    margin: 1%;
`
const apiKey = "qWBm0JTrgkmxNrlTEWDwktfUoG6GeQJLfvzo3Jvt"

function App() {
  const [imageOTD , setimageOTD] = useState({})
  // const [date , setDate] = useState()
  // const [title , setTitle] = useState()
  // const [description , setDescription] = useState()

  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-07-16`)
      .then( (response) => {
        console.log(response)
        setimageOTD(response.data)
        // setDate(response.data.date)
        // setTitle(response.data.title)
        // setDescription(response.data.explanation)

      })
      .catch( (error) => {
        console.log(error)
      })
  },[]) 
  return (
    <StyledDetails className="App">
      <Header />
      <ImageOTD imageOTD={imageOTD}/>
    </StyledDetails>
  );
}

export default App;
