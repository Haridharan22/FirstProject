import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = () => {
    return axios.get('http://localhost:4000/superheroes')
}
const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

export const ParalellPage =() =>{
    useQuery('super-heroes',fetchSuperHero)
    useQuery('friends',fetchFriends)
    return <div>ParalellPage</div>
}