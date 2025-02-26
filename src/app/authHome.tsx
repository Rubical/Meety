import { Image, Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import images from "@/constants/images"
import { router } from "expo-router"

const AuthHome = () => {
	const androidExtraTopPadding = Platform.OS === "android" ? "pt-8" : ""

	return (
		<SafeAreaView className={`bg-white h-full ${androidExtraTopPadding}`}>
			<View className="h-full p-8 flex relative justify-between">
				<View>
					<Text className="font-poppins-bold text-primary-300 text-4xl mb-3">Welcome</Text>
					<Text className="font-poppins-semibold text-lg">
						Please sign in or sign up to continue using our app.
					</Text>
				</View>

				<Image
					source={images.authGuy}
					className="w-full h-2/5"
					resizeMode="contain"
				/>

				<View className="items-center">
					<TouchableOpacity
						onPress={() => router.push("/signUp")}
						className="w-4/5 h-14 bg-primary-300 pt-3 text-center rounded-3xl mb-6"
					>
						<Text className="text-white font-poppins-semibold text-center text-xl">Sign up</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => router.push("/signIn")}
						className="w-4/5 h-14 bg-primary-300 pt-3 text-center rounded-3xl"
					>
						<Text className="text-white font-poppins-semibold text-center text-xl">Sign in</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default AuthHome
