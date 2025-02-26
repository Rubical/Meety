import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { router } from "expo-router"
import images from "@/constants/images"

const AppFeatures = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full flex relative p-8">
				<Image
					source={images.questions}
					className="w-full h-1/2 mt-20 ml-1"
					resizeMode="contain"
				/>

				<Text className="font-poppins-bold text-4xl text-center mb-4">
					See your partner after <Text className="text-primary-300">something</Text>
				</Text>
				<Text className="text-black-200 font-poppins-semibold text-lg  text-center mb-2 ">
					The goal of this app is to match according to personality.
				</Text>
				<Text className="font-poppins-bold text-black-300 mb-8 text-center text-lg">
					You can't see users photos. But...
				</Text>
				<TouchableOpacity
					onPress={() => {
						while (router.canGoBack()) {
							router.back()
						}
						router.replace("/onboarding/onboarding")
					}}
					className="w-full h-14 bg-primary-300 text-center flex justify-center items-center rounded-3xl mb-6 absolute bottom-0 left-0 right-0 mx-8"
				>
					<Text className="text-white font-poppins-semibold text-xl">Get started</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
export default AppFeatures
