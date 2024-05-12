import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IPost } from './posts-type'

const initialState: IPost[] = []

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPost[]>) => {
            state.push(...action.payload)
        },
        setPost: (state, action: PayloadAction<IPost>) => {
            state.push(action.payload)
        },
    },
})

export const { setPosts, setPost } = postsSlice.actions

export default postsSlice.reducer
