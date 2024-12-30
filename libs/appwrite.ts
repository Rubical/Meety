import { Account, Client, ID, OAuthProvider } from "react-native-appwrite"
import { openAuthSessionAsync } from "expo-web-browser"
import * as Linking from "expo-linking"

export const config = {
	platform: "com.rubical.meety",
	projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
	endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT
}

const client = new Client()

client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.platform)

export const account = new Account(client)

export async function signUp({ email, password }: { email: string; password: string }) {
	try {
		const result = await account.create(ID.unique(), email, password)
		console.log(result)
	} catch (error) {
		console.error(error)
	}
}

export async function login({ email, password }: { email: string; password: string }) {
	try {
		const result = await account.createEmailPasswordSession(email, password)
		console.log(result)
	} catch (error) {
		console.error(error)
	}
}

export async function logout() {
	try {
		await account.deleteSession("current")
		console.log("Account logged out")
		return true
	} catch (e) {
		console.log(e)
		return false
	}
}

export async function loginWithOAuth({ provider }: { provider: "google" | "facebook" }) {
	try {
		const redirectUri = Linking.createURL("/")
		const appwriteProvider = provider === "google" ? OAuthProvider.Google : OAuthProvider.Facebook

		const response = await account.createOAuth2Token(appwriteProvider, redirectUri)

		if (!response) {
			throw new Error("Failed to login")
		}

		const browserResult = await openAuthSessionAsync(response.toString(), redirectUri)
		if (browserResult.type !== "success") throw new Error("Failed to login")

		const url = new URL(browserResult.url)

		const secret = url.searchParams.get("secret")?.toString()
		const userId = url.searchParams.get("userId")?.toString()

		if (!userId || !secret) {
			throw new Error("Failed to login")
		}

		const session = await account.createSession(userId, secret)

		if (!session) throw new Error("Failed to create session")
		console.log({ userId, secret, response })
		return true
	} catch (e) {
		console.log(e)
		return false
	}
}
