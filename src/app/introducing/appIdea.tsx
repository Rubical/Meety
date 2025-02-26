import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { router } from "expo-router"
import images from "@/constants/images"
import icons from "@/constants/icons"
import Pagination from "@/components/Pagination"

const AppIdea = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full flex relative p-8">
				<TouchableOpacity
					onPress={() => {
						router.replace("/onboarding/onboarding")
					}}
				>
					<Text className="self-end font-poppins-semibold text-primary-300 text-xl">Skip</Text>
				</TouchableOpacity>

				<Text className="font-poppins-bold text-4xl text-center mt-16 mb-4">
					Find your first <Text className="text-primary-300">meta</Text> matches
				</Text>
				<Text className="text-black-200 font-poppins-semibold text-lg text-center mb-8">
					Is it possible to perceive appearance differently when you like a person mentally?
					Certainly!
				</Text>
				<Image
					source={images.matches}
					className="w-full h-1/2"
					resizeMode="contain"
				/>
				<View className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
					<Pagination
						pages={3}
						currentPage={1}
					/>
					<TouchableOpacity
						onPress={() => {
							router.push("/introducing/appFeatures")
						}}
						className="absolute bottom-0 right-8"
					>
						<Image
							source={icons.forward}
							resizeMode="contain"
							className="size-14"
							tintColor="#6960F7"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}
export default AppIdea
