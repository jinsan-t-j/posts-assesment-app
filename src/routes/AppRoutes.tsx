import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { BaseLayout } from '../layouts/views'
import { PostItem, PostList } from '../features/posts'

/**
 * The application routes.
 *
 * @returns JSX.
 */
export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route path='/' element={<PostList />} />
                <Route path='/posts/:postId' element={<PostItem />} />
            </Route>
        </Routes>
    )
}
