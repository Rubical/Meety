import React from "react"
import { Redirect, Slot } from "expo-router"
import { useUser } from "@/hooks/useUser"

const AppLayout = () => {
	const { id } = useUser()
	if (!id) {
		return <Redirect href="/authHome" />
	}
	return <Slot />
}
export default AppLayout
