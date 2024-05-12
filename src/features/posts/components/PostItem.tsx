import { useCallback, useEffect, useState, type FC } from 'react'
import { Card } from 'flowbite-react'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '../../../store'
import { fetchPostItem } from '../post-action'
import type { IPost } from '../posts-type'

/**
 * The post item component
 *
 * @returns The JSX.
 */
export const PostItem: FC = () => {
    const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState<IPost>()

    const { postId } = useParams()
    const id = postId && parseInt(postId)

    const setInitialData = useCallback(async () => {
        setIsLoading(true)
        if (id) {
            const postData = await dispatch(fetchPostItem(id))
            setPost(postData)
            setIsLoading(false)
        }
    }, [id, dispatch])

    useEffect(() => {
        setInitialData()
    }, [postId, setInitialData])

    return (
        <div className='m-auto'>
            {!isLoading && post && (
                <Card className='max-w-sm'>
                    <h5 className='font-bold text-2xl tracking-tight text-gray-900 dark:text-white'>
                        {post.title}
                    </h5>
                    <p className='font-normal text-gray-700 dark:text-gray-400'>{post.body}</p>
                </Card>
            )}
        </div>
    )
}