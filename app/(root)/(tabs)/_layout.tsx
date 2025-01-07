import React from "react"
import { Tabs } from "expo-router"
import { Image, View } from "react-native"
import icons from "@/constants/icons"

const TabIcon = ({ focused, icon }: { focused: boolean; icon: any }) => (
	<View className="flex-1 mt-3 flex flex-col items-center">
		<Image
			source={icon}
			tintColor={focused ? "#6960F7" : "#9597a3"}
			resizeMode="contain"
			className="size-8"
		/>
	</View>
)

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: "white",
					borderTopWidth: 0,
					minHeight: 70,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}
			}}
		>
			<Tabs.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.home}
						/>
					)
				}}
				name="search"
			/>
			<Tabs.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.heart}
						/>
					)
				}}
				name="matches"
			/>
			<Tabs.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.message}
						/>
					)
				}}
				name="index"
			/>

			<Tabs.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.profile}
						/>
					)
				}}
				name="profile"
			/>
		</Tabs>
	)
}
export default TabsLayout
