import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const fetchSuperHero = ()=>{
    return axios.get('http://localhost:4000/superheroes')}

const addSuperHEro = (hero) => {
    return axios.post('http://localhost:4000/superheroes',hero)
}

export const useSuperHero = (onSuccess, onError)=> {
    useQuery('super-heroes',
    fetchSuperHero,
    {
      onSuccess,
      onError,
     // select:(data)=>{
       // const superHeroNames= data.data.map(hero=>hero.name)
        //return superHeroNames
      // }
    }
  )
}
export const useAddSuperHeroData = () => {
    const queryClient= useQueryClient()
    return useMutation(addSuperHEro, {
        onSuccess: (data)=>{
            //queryClient.invalidateQueries('super-heroes')
            queryClient.setQueryData('super-heroes',(oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData, data.data]
                }
            })
        },
    })
}