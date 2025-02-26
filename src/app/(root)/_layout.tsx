import React from "react"
import { Redirect, Slot } from "expo-router"
import { useUser } from "@/hooks/useUser"
import { ActivityIndicator, SafeAreaView } from "react-native"

const AppLayout = () => {
	const { user, loading } = useUser()

	if (loading) {
		return (
			<SafeAreaView className="bg-white h-full flex justify-center items-center">
				<ActivityIndicator
					className="text-primary-300"
					size="large"
				/>
			</SafeAreaView>
		)
	}

	if (!user.id) {
		return <Redirect href="/authHome" />
	}
	return <Slot />
}
export default AppLayout
