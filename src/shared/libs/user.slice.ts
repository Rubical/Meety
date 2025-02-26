import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
	id?: string
	name?: string
	enrollment?: "introducing" | "onboarding"
	email?: string
	gender?: string
	location?: string
	age?: number
	agePreference?: [number, number]
	about?: string
	interests?: string[]
	education?: string
	occupation?: string
	livingIn?: string
	matches?: {
		id: string
	}
}

const initialState: { user: UserState; loading: boolean } = {
	user: {},
	loading: false
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			state.user = action.payload
		},
		clearUser: (state) => {
			state.user = {}
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		}
	}
})

export const { setUser, clearUser, setLoading } = userSlice.actions
export default userSlice.reducer
