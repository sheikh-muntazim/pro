import { Button } from '@mui/material'
import React ,{useState}from 'react'
import Child from './Child'

const Parent = () => {
    const [counter, setCounter] = useState(0)

    const handlerCount=()=>{
        setCounter(counter+1)
    }
  return (
    <div> <Button variant='contained' onClick={handlerCount}>increase {counter}</Button>
        <p>this is parent element</p>
        
        <Child/>
    </div>
   
  )
}

export default Parent