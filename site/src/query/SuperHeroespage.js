import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroespage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  //normal error message
  //request failed with status code 404
  const [error,setError]=useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>{ error}</h2>
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div>{hero.name}</div>
      })}
    </>
  )
}