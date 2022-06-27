import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomeScreen = () => {
const navigate = useNavigate()
  const handleClick = () => {
    alert("We are going to a dynamic route called details. We are sending a parameter taht we can use to get info from an API. For this, we will use the PokeAPI, and we want details about Pikachu. Sending the parameter: Pikachu")
    navigate('/details/pikachu')
  }
  return (
    <div>
      <h1>Welcome Home</h1>
      <p>This page is strictly for landing. However, on a home page, you may want to navigate someone to another page via a button click, or at the end of a function (akin to logging in). Try the button below, read the alert, and off you go to another page!</p>
      <button onClick={handleClick}>Travel Elsewhere</button>
    </div>
  )
}

export default HomeScreen