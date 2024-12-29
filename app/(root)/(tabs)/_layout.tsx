import React from "react"
import { Tabs } from "expo-router"

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="index" />
			<Tabs.Screen name="profile" />
			<Tabs.Screen name="search" />
		</Tabs>
	)
}
export default TabsLayout
