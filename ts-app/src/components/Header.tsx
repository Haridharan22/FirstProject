import React from 'react'

type HeaderProp = {
    children: string
}

export const Header = (props: HeaderProp) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}
