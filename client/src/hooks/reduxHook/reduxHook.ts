// * - IMPORTING -
// This hook is for
// Redux
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";

// * - REDUX HOOKS -
// Use throughout app instead of plain `useDispatch` and `useSelector` due to TypeScript
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
