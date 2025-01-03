import { Image, SafeAreaView, Text, View } from "react-native"
import React from "react"
import images from "@/constants/images"
import { Link } from "expo-router"

const AuthHome = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full p-8 flex relative">
				<Text className="font-poppins-bold text-primary-300 text-4xl mb-3">Welcome</Text>
				<Text className="font-poppins-semibold text-lg mb-10">
					Please sign in or sign up to continue using our app.
				</Text>

				<Image
					source={images.authGuy}
					className="w-full h-3/5"
					resizeMode="contain"
				/>
				<View className="absolute bottom-0 left-0 right-0 items-center">
					<Link
						href={"/signUp"}
						className="w-4/5 h-14 bg-primary-300 pt-3 text-center rounded-3xl mb-6"
					>
						<Text className="text-white font-poppins-semibold text-xl">Sign up</Text>
					</Link>
					<Link
						href={"/signIn"}
						className="w-4/5 h-14 bg-primary-300 pt-3 text-center rounded-3xl mb-6"
					>
						<Text className="text-white font-poppins-semibold text-xl">Sign in</Text>
					</Link>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default AuthHome
