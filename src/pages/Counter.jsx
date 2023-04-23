import { useDispatch, useSelector } from 'react-redux'


export const Counter = () => {
  const dispatch = useDispatch()
  const  {count}  = useSelector(state => state)

  const Increment = () => {
    dispatch({
      type: 'Increment'
    })
  }
  const Decrement = () => {
   
    dispatch({
      type: 'Decrement'    
    })
  }
  return (

    <div>
      <button  onClick={Increment}>Increment</button>
      <p>{count}</p>
      <button onClick={Decrement} >Decrement</button>
    </div>
  )
}
