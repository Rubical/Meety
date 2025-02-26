import { TypedUseSelectorHook, useSelector } from "react-redux"
import type { RootState } from "@/src/shared/libs/store"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
