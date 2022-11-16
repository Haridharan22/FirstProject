import React from 'react'
import { useParams } from 'react-router'
import { useSuperHero } from '../Hooks/useSuperHero'

export const RQsuperHeropage = () => {

    const {heroId} = useParams()
    const {isLoading,data, isError, error}= useSuperHero(heroId)

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
  return (
    <div>{data?.data.name} - {data?.data.alterEgo}</div>
  )
}
