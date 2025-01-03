import { useTypedSelector } from "@/hooks/useTypedSelector"

export const useUser = () => {
	const user = useTypedSelector((state) => state.user)
	return user
}
