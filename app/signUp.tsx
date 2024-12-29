import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import React from "react"
import images from "@/constants/images"
import { Link } from "expo-router"

const SignUp = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full p-10 flex relative">
				<Text className="font-poppins-bold text-primary-300 text-4xl mb-3">Sign up</Text>
				<Text className="font-poppins-semibold text-lg mb-10">
					Please register with email to continue using our app.
				</Text>

				<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-5">
					<TextInput
						className="text-black font-poppins"
						placeholder={"Enter your name"}
						placeholderTextColor="gray"
					/>
				</View>
				<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-5">
					<TextInput
						className="text-black font-poppins"
						placeholder={"Enter your email address"}
						placeholderTextColor="gray"
					/>
				</View>
				<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-5">
					<TextInput
						className="text-black font-poppins"
						placeholder={"Enter the password"}
						placeholderTextColor="gray"
					/>
				</View>
				<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-5">
					<TextInput
						className="text-black font-poppins"
						placeholder={"Confirm the password"}
						placeholderTextColor="gray"
					/>
				</View>
				<TouchableOpacity className="w-3/5 h-12 my-10 bg-primary-300 flex justify-center items-center rounded-xl self-center">
					<Text className="text-white font-poppins-semibold text-lg">Sign up</Text>
				</TouchableOpacity>
				<View className="flex flex-row justify-center align-center gap-6">
					<TouchableOpacity className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]">
						<Image
							source={images.apple}
							className="w-12 h-12"
						/>
					</TouchableOpacity>
					<TouchableOpacity className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]">
						<Image
							source={images.facebook}
							className="w-10 h-10"
						/>
					</TouchableOpacity>
				</View>
				<View className="absolute bottom-8 left-0 right-0 flex flex-row items-center justify-center gap-1">
					<Text className="font-poppins-semibold">You already have an account? </Text>
					<TouchableOpacity>
						<Link
							href={"/signIn"}
							className="font-poppins-semibold text-primary-300"
						>
							Sign in
						</Link>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default SignUp
