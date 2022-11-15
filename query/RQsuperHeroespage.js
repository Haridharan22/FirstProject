import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
//usequery use pannum pothu onlly 3 lines reduce code
export const RQsuperHeroespage = () => {
  const {isLoading, data}= useQuery('super-heroes',()=>{
    return axios.get('http://localhost:4000/superheroes')
  })
  if(isLoading){
    return <h2>Loading....</h2>
  }
  return (
    <div>
      <h2>RQsuperHeroespage</h2>
      {data?.data.map((hero)=>{
        return <div key={hero.name}>{hero.name}</div>
      })}
    </div>
  )
}
