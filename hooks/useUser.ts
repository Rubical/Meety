import { useTypedSelector } from "@/hooks/useTypedSelector"

export const useUser = () => {
	return useTypedSelector((state) => state.user)
}
