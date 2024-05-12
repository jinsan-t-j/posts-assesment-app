import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { createLogger } from 'redux-logger'

import postsSlice from './features/posts/posts-slice'

const reduxLogger = createLogger({
    collapsed: true,
})

const middleware = [reduxLogger]

export const store = configureStore({
    reducer: {
        posts: postsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
})

/**
 * The application type declaration for root redux store state.
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * The type declaration of thunk
 */
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, UnknownAction>

export type AppDispatch = typeof store.dispatch

/**
 * The application dispatch hook
 *
 * @returns useDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()

/**
 * The application selector hook
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
