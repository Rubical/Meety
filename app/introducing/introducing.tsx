import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import icons from "@/constants/icons"
import { router } from "expo-router"
import images from "@/constants/images"
import Pagination from "@/components/Pagination"

const Introducing = () => {
	return (
		<SafeAreaView className="bg-white h-full">
			<View className="h-full flex relative p-8">
				<TouchableOpacity
					onPress={() => {
						router.replace("/")
					}}
				>
					<Text className="self-end font-poppins-semibold text-primary-300 text-xl">Skip</Text>
				</TouchableOpacity>
				<Image
					source={images.connect}
					className="w-full h-1/2 mt-20 ml-1"
					resizeMode="contain"
				/>

				<Text className="font-poppins-bold text-4xl text-center mb-4">
					Connect With Your Soul <Text className="text-primary-300">Mate</Text>
				</Text>
				<Text className="text-black-200 font-poppins-semibold text-lg text-center mb-8">
					Click continue to learn more about the app or skip to get started.
				</Text>
				<View className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
					<Pagination
						pages={3}
						currentPage={0}
					/>
					<TouchableOpacity
						onPress={() => {
							router.push("/introducing/appIdea")
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
export default Introducing
