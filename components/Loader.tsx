import React from "react"
import { ActivityIndicator, SafeAreaView } from "react-native"

const Loader = () => {
	return (
		<SafeAreaView className="bg-white h-full flex justify-center items-center">
			<ActivityIndicator
				className="text-primary-300"
				size="large"
			/>
		</SafeAreaView>
	)
}
export default Loader
