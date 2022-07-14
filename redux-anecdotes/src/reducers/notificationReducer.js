import { createSlice } from '@reduxjs/toolkit'

const initialState = null
let timeoutID

const noteSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
      setNotificationNow(state, action) {
        const content = action.payload
        // console.log('content:', content)
        return content
      },
      deleteNotification(state, action){
        return initialState
      }
    },
  })

export const setNotification = (content, timer) => {
    return dispatch => {
        dispatch(setNotificationNow(content))
        if(timeoutID){
          clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(() => {
            dispatch(deleteNotification())
          }, timer*1000)
    }    
}

export const { setNotificationNow, deleteNotification } = noteSlice.actions
export default noteSlice.reducer