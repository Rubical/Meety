import React, { useEffect } from "react"
import "./globals.css"
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"

const RootLayout = () => {
	const [fontsLoaded] = useFonts({
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf")
	})

	useEffect(() => {
		if (fontsLoaded) {
			setTimeout(() => {
				SplashScreen.hideAsync()
			}, 5000)
		}
	}, [fontsLoaded])

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="authHome" />
			<Stack.Screen
				name="signIn"
				options={{ presentation: "fullScreenModal" }}
			/>
			<Stack.Screen
				name="signUp"
				options={{ presentation: "fullScreenModal" }}
			/>
		</Stack>
	)
}
export default RootLayout
