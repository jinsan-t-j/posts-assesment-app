import { size } from 'lodash'

import type { AppThunk } from '../../store'
import { requestHandler } from '../../shared/handler/request-handler'
import { API_ROUTES } from '../../shared/constants/api-routes'

import { setPost, setPosts } from './posts-slice'
import type { IPost } from './posts-type'

/**
 * Fetch all posts.
 *
 * @returns void
 */
export const fetchPosts = (): AppThunk => async (dispatch) => {
    const posts = await dispatch(
        requestHandler<IPost[]>({
            url: API_ROUTES.POSTS.URL,
            method: API_ROUTES.POSTS.METHOD,
        }),
    )

    if (size(posts)) {
        await dispatch(setPosts(posts))
    }
}

/**
 * Fetch a post by ID.
 *
 * @param postId - The post ID.
 * @returns The post.
 */
export const fetchPostItem =
    (postId: number): AppThunk<Promise<IPost>> =>
    async (dispatch, getState) => {
        let post = getState().posts?.find((post) => post.id === postId)
        if (!post) {
            post = await dispatch(
                requestHandler<IPost>({
                    url: `${API_ROUTES.POSTS.URL}/${postId}`,
                    method: API_ROUTES.POSTS.METHOD,
                }),
            )

            if (post) {
                await dispatch(setPost(post))
            }
        }
        return post
    }
