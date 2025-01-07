import React, { useEffect } from "react"
import "./globals.css"
import { router, SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { store } from "@/store/store"
import { Provider } from "react-redux"
import { StatusBar } from "expo-status-bar"
import { getUser } from "@/libs/appwrite"
import { useUser } from "@/hooks/useUser"
import { useActions } from "@/hooks/useActions"

SplashScreen.preventAutoHideAsync()

const StackLayout = () => {
	const { setLoading, setUser } = useActions()
	const { user, loading } = useUser()
	const [fontsLoaded] = useFonts({
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf")
	})

	useEffect(() => {
		setLoading(true)

		if (!fontsLoaded) return

		async function initializeApp() {
			const currUser = await getUser()

			if (!currUser) {
				router.replace("/authHome")
			} else {
				/*Делаем запрос по айди юзера на каком этапе реги он находится, получаем этап, сетим в состояние и редиректим на стр исходя их этого этапа*/
				setUser({ ...user, id: currUser.$id })
				while (router.canGoBack()) {
					router.back()
				}
				router.replace("/")
			}
		}

		initializeApp().then(() => {
			setLoading(false)
			setTimeout(() => {
				SplashScreen.hideAsync()
			}, 500)
		})
	}, [fontsLoaded])

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="authHome" />
			<Stack.Screen
				name="signIn"
				options={{ presentation: "card" }}
			/>
			<Stack.Screen
				name="signUp"
				options={{ presentation: "card" }}
			/>
			<Stack.Screen name="introducing/introducing" />
			<Stack.Screen
				name="introducing/appIdea"
				options={{ presentation: "card" }}
			/>
			<Stack.Screen
				name="introducing/appFeatures"
				options={{ presentation: "card" }}
			/>
			<Stack.Screen name="onboarding/onboarding" />
		</Stack>
	)
}

const RootLayout = () => {
	return (
		<Provider store={store}>
			<StatusBar style="dark" />
			<StackLayout />
		</Provider>
	)
}
export default RootLayout
