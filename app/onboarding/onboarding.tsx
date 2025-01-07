import { SafeAreaView, Text, TextInput, View } from "react-native"
import React from "react"
import { useUser } from "@/hooks/useUser"
import { useActions } from "@/hooks/useActions"

const Onboarding = () => {
	const user = useUser()
	const { setUser } = useActions()
	const handleNameChange = (value: string) => {
		setUser({ ...user, name: value })
		console.log(user)
	}

	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full flex relative p-8">
				<Text className="font-poppins-bold text-3xl text-center mb-8">Tell us about yourself!</Text>
				<Text className="font-poppins-bold text-xl text-center mb-4">Your name</Text>
				<TextInput
					value={user.name}
					onChangeText={handleNameChange}
					className="text-black font-poppins"
					placeholder={"Enter your email address"}
					placeholderTextColor="gray"
				/>
			</View>
		</SafeAreaView>
	)
}
export default Onboarding
