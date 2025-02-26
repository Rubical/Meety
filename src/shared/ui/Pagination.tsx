import { Image, View } from "react-native"
import React from "react"
import icons from "@/src/shared/constants/icons"

const Pagination = ({ pages, currentPage }: { pages: number; currentPage: number }) => {
	return (
		<View className="flex flex-row justify-center items-center absolute bottom-4">
			{Array.from({ length: pages }).map((_, index) => (
				<Image
					key={index}
					source={icons.dot}
					tintColor={currentPage === index ? "#6960F7" : "#9597a3"}
				/>
			))}
		</View>
	)
}
export default Pagination
