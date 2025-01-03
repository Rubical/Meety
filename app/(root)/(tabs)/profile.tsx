import { Button, SafeAreaView, View } from "react-native"
import React from "react"
import { signOut } from "@/libs/appwrite"
import { useActions } from "@/hooks/useActions"
import { useUser } from "@/hooks/useUser"

const Profile = () => {
	const { clearUser } = useActions()
	const { id } = useUser()

	async function handleLogout() {
		const result = await signOut()
		if (result) {
			clearUser()
		}
	}

	return (
		<View>
			<SafeAreaView>
				<Button
					title={"Logout"}
					onPress={handleLogout}
				></Button>
			</SafeAreaView>
		</View>
	)
}
export default Profile
