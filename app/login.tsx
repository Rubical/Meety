import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native"
import React from "react"
import images from "@/constants/images"
import { Link, router } from "expo-router"

const Login = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full flex relative p-8">
				<TouchableOpacity
					onPress={() => {
						router.back()
					}}
					className="size-12"
				>
					<Image
						source={images.back}
						resizeMode="contain"
						className="size-12"
					/>
				</TouchableOpacity>

				<Image
					source={images.loginGuy}
					className="w-full h-2/5"
					resizeMode="contain"
				/>
				<View className="absolute px-10 bottom-8 left-0 right-0 flex items-center justify-center gap-1">
					<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-5">
						<TextInput
							className="text-black font-poppins"
							placeholder={"Enter your email address"}
							placeholderTextColor="gray"
						/>
					</View>
					<View className="w-full p-4 flex justify-center align-center border-2 border-gray-500 rounded-xl mb-8">
						<TextInput
							className="text-black font-poppins"
							placeholder={"Enter the password"}
							placeholderTextColor="gray"
						/>
					</View>
					<TouchableOpacity className="w-full h-14 bg-primary-300 text-center flex justify-center items-center rounded-3xl mb-6">
						<Text className="text-white font-poppins-semibold text-xl">Login</Text>
					</TouchableOpacity>
					<View className="flex flex-row justify-center align-center gap-6 mb-14">
						<TouchableOpacity className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]">
							<Image
								source={images.google}
								className="w-11 h-11"
							/>
						</TouchableOpacity>
						<TouchableOpacity className="w-16 h-16 flex bg-white justify-center items-center rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.2),0px_2px_4px_rgba(0,0,255,0.4)]">
							<Image
								source={images.facebook}
								className="w-12 h-12"
							/>
						</TouchableOpacity>
					</View>
					<View className="flex flex-row items-center justify-center gap-1">
						<Text className="font-poppins-semibold">Don't have an account? </Text>
						<TouchableOpacity>
							<Link
								href={"/signUp"}
								className="font-poppins-semibold text-primary-300"
							>
								Sign up
							</Link>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default Login
