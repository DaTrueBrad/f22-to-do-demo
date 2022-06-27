import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const Details = () => {
  const [data, setData] = useState({})

  const {pokemon} = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => setData(res.data))
  })
  return (
    <div>
      <h1>Details Page</h1>
      <h2>Param received: {pokemon}</h2>
      <h5>we made an axios call to "https://pokeapi.co/api/v2/pokemon/{pokemon}" </h5>
      <h3>Name: {data.name}</h3>
      <h3>ID: {data.id}</h3>
      <img src={data.sprites?.front_default} alt="" />
    </div>
  )
}

export default Details