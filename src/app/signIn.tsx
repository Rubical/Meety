import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import images from "@/src/shared/constants/images"
import { router } from "expo-router"
import { signIn, signInWithOAuth, signOut } from "@/src/shared/libs/appwrite"
import { useActions } from "@/src/shared/hooks/useActions"
import icons from "@/src/shared/constants/icons"
import Loader from "@/src/shared/ui/Loader"
import { useUser } from "@/src/shared/hooks/useUser"

const SignIn = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { loading } = useUser()
	const { setUser, setLoading } = useActions()

	const handleEmailChange = (text: string) => {
		setEmail(text)
	}
	const handlePasswordChange = (text: string) => {
		setPassword(text)
	}

	async function handleOAuthSignIn(provider: "google" | "facebook") {
		setLoading(true)

		const session = await signInWithOAuth(provider)
		if (session) {
			setUser({ id: session.userId })
			setLoading(false)
			router.replace("/")
		}
	}

	async function handleSignIn() {
		try {
			const session = await signIn(email, password)
			if (session) {
				setUser({ id: session.userId })
				console.log(session.userId)
				router.replace("/")
			} else {
				Alert.alert("Enter valid email and password!")
			}
		} catch (error) {
			Alert.alert("Sign in failed", "Please try again.")
		} finally {
			setLoading(false)
		}
	}

	if (loading) {
		return <Loader />
	}

	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full flex relative p-8">
				<Image
					source={images.loginGuy}
					className="w-full h-2/5 mt-5"
					resizeMode="contain"
				/>
				<View className="absolute px-10 bottom-8 left-0 right-0 flex items-center justify-center gap-1">
					<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-5">
						<TextInput
							value={email}
							onChangeText={handleEmailChange}
							className="text-black font-poppins"
							placeholder={"Enter your email address"}
							placeholderTextColor="gray"
						/>
					</View>
					<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-2">
						<TextInput
							value={password}
							onChangeText={handlePasswordChange}
							className="text-black font-poppins"
							placeholder={"Enter the password"}
							placeholderTextColor="gray"
						/>
					</View>
					<TouchableOpacity
						onPress={signOut}
						className="mb-8 self-end"
					>
						<Text className="font-poppins-semibold">Forgot your password?</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleSignIn}
						className="w-full h-14 bg-primary-300 text-center flex justify-center items-center rounded-3xl mb-8"
					>
						<Text className="text-white font-poppins-semibold text-xl">Sign in</Text>
					</TouchableOpacity>

					<View className="flex flex-row justify-center align-center gap-6 mb-14">
						<TouchableOpacity
							onPress={() => handleOAuthSignIn("google")}
							className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]"
						>
							<Image
								source={icons.google}
								className="w-11 h-11"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => handleOAuthSignIn("facebook")}
							className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]"
						>
							<Image
								source={icons.facebook}
								className="w-12 h-12"
							/>
						</TouchableOpacity>
					</View>
					<View className="flex flex-row items-center justify-center gap-1">
						<Text className="font-poppins-semibold">Don't have an account? </Text>
						<TouchableOpacity
							onPress={() => {
								router.replace("/signUp")
							}}
						>
							<Text className="font-poppins-semibold text-primary-300">Sign up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default SignIn
