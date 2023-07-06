import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { uid: '', photoURL: '', displayName: '' }
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = {
        uid: '',
        photoURL: '',
        displayName: ''
      }
    },
    updateUserProfile: (state, action) => {
      state.user.displayName = action.payload.displayName
      state.user.photoURL = action.payload.photoURL
    }
  },
})

export const { login, logout, updateUserProfile } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer