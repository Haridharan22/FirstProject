import React from 'react'
//array props
type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {props.names.map(name => {
            return(
                <h2>My first name {name.first} My last name {name.last}</h2>
            )
        })}
        

    </div>
  )
}
