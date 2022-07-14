import { voteOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
      </div>
    )
}
  
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.notes)
    const filterWord = useSelector(state => state.filter)
    // console.log('anecdotes:', anecdotes)

    return(
        <ul>
        {anecdotes.slice()
        .filter(anecdote => filterWord?anecdote.content.toLowerCase().indexOf(filterWord.toLowerCase()) >= 0:anecdote)
        .sort((a, b) => a.votes < b.votes ? 1 : -1)
        .map(anecdote =>
            <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => {
              dispatch(voteOf(anecdote.id))
              dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
            }
            }
            />
        )}
        </ul>
    )
}

export default AnecdoteList