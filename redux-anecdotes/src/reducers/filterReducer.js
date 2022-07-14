import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const noteSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setFilter(state, action) {
        const content = action.payload
        // console.log('content:', content)
        return content
      }
    },
  })

export const { setFilter } = noteSlice.actions
export default noteSlice.reducer
