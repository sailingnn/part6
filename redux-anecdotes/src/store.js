import noteService from './services/anecdotes'
import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, { setNotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer: {
      notes: anecdoteReducer,
      info: notificationReducer,
      filter: filterReducer,
    }
})

noteService.getAll().then(notes =>
    store.dispatch(setNotes(notes))
)

export default store  