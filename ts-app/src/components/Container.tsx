import React from 'react'

type ContainerProps = {
    styles: React.CSSProperties
}
export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>I am Haridharan, How are you</div>
  )
}
