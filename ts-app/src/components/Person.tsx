import React from 'react'
//object props
type PersonProps = {
    name: {
        first: string
        last: string
    }
}

export const Person = (props: PersonProps) => {
  return (
    <div>My first name is {props.name.first}, My last name is {props.name.last}</div>
  )
}
