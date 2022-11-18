import React from 'react'


//strongly typed language.once you declared a variable to be a type. doesn't change
//multi data types
type greetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: greetProps) => {
  return (
    <div><h2>
        {props.isLoggedIn ? 'Welcome to {props.name}. You have {props.messageCount} unread messages.'
        : 'welcome Guest'}
        </h2></div>
  )
}
