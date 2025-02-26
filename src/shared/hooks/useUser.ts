import { useTypedSelector } from "@/src/shared/hooks/useTypedSelector"

export const useUser = () => {
	return useTypedSelector((state) => state.user)
}
