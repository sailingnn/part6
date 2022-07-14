import { createNote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux' 

const NewNote = (props) => {  
    const addNote =  async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        props.createNote(content)
        props.setNotification(`new anecdote '${content}'`, 5)
      }
  
    return (         
        <form onSubmit={addNote}>
        <div><input name="note" /></div>
        <button type="submit">create</button>
        </form>
    )
}
  
export default connect(
    null, 
    { createNote, setNotification }
  )(NewNote)