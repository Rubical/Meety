import { createSlice } from "@reduxjs/toolkit"

interface UserState {
	id: string
	country: string
}

const initialState: UserState = {
	id: "",
	country: ""
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload
		},
		clearUser: (state) => {
			state.id = ""
			state.country = ""
		}
	}
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
