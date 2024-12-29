import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import images from "@/constants/images"
import { Link } from "expo-router"

const AuthHome = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full p-10 flex relative">
				<Text className="font-poppins-bold text-primary-300 text-4xl mb-3">Welcome</Text>
				<Text className="font-poppins-semibold text-lg mb-10">
					Please login or sign up to continue using our app.
				</Text>

				<Image
					source={images.authGuy}
					className="w-full h-3/5 "
					resizeMode="contain"
				/>
				<View className="absolute bottom-8 left-0 right-0 items-center">
					<Link
						href={"/signUp"}
						className="w-3/5 h-12 bg-primary-300 text-center pt-2 rounded-xl mb-6"
					>
						<Text className="text-white font-poppins-semibold text-lg">Sign up</Text>
					</Link>
					<View className="flex flex-row gap-1">
						<Text className="font-poppins-semibold">You already have an account? </Text>
						<TouchableOpacity>
							<Link
								href={"/signIn"}
								className="font-poppins-semibold text-primary-300"
							>
								Login
							</Link>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default AuthHome
