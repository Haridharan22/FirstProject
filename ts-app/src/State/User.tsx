import React from 'react'
import { useState } from 'react'

type authUser = {
    name: string
    email: string
}
//use state use simple state values

export const User = () => {
    const [user, setUser]=useState<authUser | null>(null)
    //const [user, setUser]=useState<authUser>({} as authUser)
    const handleLoggedIn = () => {
        setUser({
            name: 'hari',
            email: 'haridharan@gmail.com'
        })
    }
    const handleLoggedOut =() => {
        setUser(null)
    }
    //authuser use pannum pothu ? use panna value print agum illana error adikkum this advantage of ts null kodutha acess panna
  return (
    <div>U<button onClick={handleLoggedIn}>Login</button>
    <button onClick={handleLoggedOut}>Logout</button>
    
    <div>User name is {user?.name}</div>
    <div>email is{user?.email}</div></div>
  )
}
