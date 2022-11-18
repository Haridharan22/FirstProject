import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {increment,decrement, isLogged} from './actions'

function App() {
  const counter=useSelector((state)=> state.counter)
  const logged= useSelector((state)=> state.login)
  //actiona trigger panna dispatch use panni irukkom
  const dispatch=useDispatch()

  let signin_status="";
  if(logged=== false){
    signin_status = "Login";
  }
  else{
    signin_status = "Logout";
  }
  return (
    <div>
    <h2>Counter; {counter}</h2>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(isLogged())}>{signin_status}</button>
    {logged ? <p>Welcome to our login form</p> : <h1>Please login your page</h1>}
    </div>
     )
}

export default App