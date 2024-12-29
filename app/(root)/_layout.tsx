import React from "react"
import { Redirect, Slot } from "expo-router"

const AppLayout = () => {
	if (false) {
		return <Redirect href={"/sign-in"} />
	}
	return <Slot />
}
export default AppLayout
