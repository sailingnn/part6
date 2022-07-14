import { useEffect } from 'react'
import NewNote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeNotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes()) 
  }, [dispatch])
  return (
    <div>
      <h2>Anecdotes</h2>   
      <Notification />  
      <Filter /> 
      <AnecdoteList />
      <h2>create new</h2>
      <NewNote />
    </div>
  )
}

export default App