import { useCallback, useEffect, useState, type FC } from 'react'
import { Card } from 'flowbite-react'

import { useAppDispatch } from '../../../store'
import { fetchPostItem } from '../post-action'
import type { IPost } from '../posts-type'

interface IPostItemProps {
    postId: number
}

/**
 * The post item component
 *
 * @returns The JSX.
 */
export const PostItem: FC<IPostItemProps> = ({ postId }) => {
    const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState<IPost>()

    const setInitialData = useCallback(async () => {
        setIsLoading(true)
        if (postId) {
            const postData = await dispatch(fetchPostItem(postId))
            setPost(postData)
            setIsLoading(false)
        }
    }, [postId, dispatch])

    useEffect(() => {
        console.log('ChildComponent re-rendered due to prop change of post id:', postId)
        setInitialData()
    }, [postId])

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
