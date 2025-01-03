import { userSlice } from "@/store/user.slice"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { useMemo } from "react"

const rootActions = {
	...userSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
