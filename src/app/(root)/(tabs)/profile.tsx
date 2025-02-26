import { Button, SafeAreaView, ScrollView } from "react-native"
import React from "react"
import { signOut } from "@/src/shared/libs/appwrite"
import { useActions } from "@/src/shared/hooks/useActions"
import { router } from "expo-router"

const Profile = () => {
	const { clearUser } = useActions()

	async function handleLogout() {
		const result = await signOut()
		if (result) {
			clearUser()
			router.replace("/authHome")
		}
	}

	return (
		<SafeAreaView className="bg-white h-full">
			<ScrollView>
				<Button
					title={"Logout"}
					onPress={handleLogout}
				></Button>
			</ScrollView>
		</SafeAreaView>
	)
}
export default Profile
