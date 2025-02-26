import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import images from "@/src/shared/constants/images"
import { router } from "expo-router"
import { signInWithOAuth, signUp } from "@/src/shared/libs/appwrite"
import { useActions } from "@/src/shared/hooks/useActions"
import icons from "@/src/shared/constants/icons"
import { useUser } from "@/src/shared/hooks/useUser"
import Loader from "@/src/shared/ui/Loader"

const SignUp = () => {
	const { loading } = useUser()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { setUser, setLoading } = useActions()

	const handleEmailChange = (text: string) => {
		setEmail(text)
	}
	const handlePasswordChange = (text: string) => {
		setPassword(text)
	}

	async function handleOAuthSignUp(provider: "google" | "facebook") {
		setLoading(true)

		const session = await signInWithOAuth(provider)
		if (session) {
			setUser({ id: session.userId })
			setLoading(false)
			router.replace("/introducing/introducing")
		}
	}

	async function handleSignUp() {
		const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
		if (!emailTest) {
			Alert.alert("Enter the valid email address")
			return false
		}

		const passwordTest = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password)
		if (!passwordTest) {
			Alert.alert("Password should be at least 8 characters with both symbols and numbers")
			return false
		}
		setLoading(true)
		try {
			const session = await signUp(email, password)
			if (session) {
				setUser({ id: session.userId })
				while (router.canGoBack()) {
					router.back()
				}
				router.replace("/introducing/introducing")
			} else {
				Alert.alert("Oops. Email already exists!")
			}
		} catch (error) {
			Alert.alert("Sign up failed", "Please try again.")
		} finally {
			setLoading(false)
		}
	}

	if (loading) {
		return <Loader />
	}

	return (
		<SafeAreaView className="bg-white h-full relative">
			<View className="h-full flex">
				<Image
					source={images.signUpGuy}
					className="w-full pl-10 h-2/5"
					resizeMode="stretch"
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
					<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-8">
						<TextInput
							value={password}
							onChangeText={handlePasswordChange}
							className="text-black font-poppins"
							placeholder={"Enter the password"}
							placeholderTextColor="gray"
						/>
					</View>
					<TouchableOpacity
						onPress={handleSignUp}
						className="w-full h-14 bg-primary-300 text-center flex justify-center items-center rounded-3xl mb-6"
					>
						<Text className="text-white font-poppins-semibold text-xl">Sign up</Text>
					</TouchableOpacity>
					<View className="flex flex-row justify-center align-center gap-6 mb-14">
						<TouchableOpacity
							onPress={() => handleOAuthSignUp("google")}
							className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]"
						>
							<Image
								source={icons.google}
								className="w-11 h-11"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => handleOAuthSignUp("facebook")}
							className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]"
						>
							<Image
								source={icons.facebook}
								className="w-12 h-12"
							/>
						</TouchableOpacity>
					</View>
					<View className="flex flex-row items-center justify-center gap-1">
						<Text className="font-poppins-semibold">You already have an account? </Text>
						<TouchableOpacity
							onPress={() => {
								router.replace("/signIn")
							}}
						>
							<Text className="font-poppins-semibold text-primary-300">Sign in</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default SignUp
