import React from 'react'
import { useAddSuperHeroData, useSuperHero } from '../Hooks/useSuperHero'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// simple with code add iserror and error method


export const RQsuperHeroespage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo]= useState('')


  const onSuccess= () =>{
    console.log('perform well, datafetching successfully')
  }
  const onError= () =>{
    console.log('perform not well, datafetching failed')
  }

  const {isLoading, data, isError, error, isFetching, refetch}= useSuperHero(onSuccess, onError)

  const {mutate: addHero}= useAddSuperHeroData()

  const handleClick= () => {
    console.log({name,alterEgo})
    const hero = {name, alterEgo}
    addHero(hero)
  }

//isfetchin vanthu page reload agum pothu all data ellamey refersh agi irukkum
  console.log({isLoading, isFetching})
  if(isLoading || isFetching){
    return <h2>Loading....</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      <h2>RQsuperHeroespage</h2>
      <div>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type='text' value={alterEgo} onChange={(e)=> setAlterEgo(e.target.value)}/>
        <button onClick={handleClick}>Add here</button>
      </div>
      <button onClick={refetch}>refetch</button>
      {data?.data.map((hero)=>{
        return <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      })}
      {/*{
        data.map((heroName)=> {
          return <div key={heroName}>{heroName}</div>
        })
      }*/}
    </div>
  )
}
