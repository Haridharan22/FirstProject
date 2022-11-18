import React, { Component } from 'react'

type CounterProps = {
    message: string
}

type StateProps = {
    count: number
}
export class Counter extends Component <CounterProps, StateProps>{
    state = {
        count: 0,
    }
    handleClick =()=>{
        this.setState((prevState)=>({count: prevState.count +1}))
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message}
        {this.state.count}
      </div>
    )
  }
}
