import React from "react"
import { Redirect, Slot } from "expo-router"

const AppLayout = () => {
	if (true) {
		return <Redirect href={"/authHome"} />
	}
	return <Slot />
}
export default AppLayout
