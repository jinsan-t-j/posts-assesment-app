import type { FC } from 'react'
import { Pagination } from 'flowbite-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { size } from 'lodash'

import { useAppDispatch, useAppSelector } from '../../../store'
import { fetchPosts } from '../post-action'

import { List } from './List'

/**
 * The post list component
 *
 * @returns The JSX.
 */
export const PostList: FC = () => {
    const dispatch = useAppDispatch()

    // Define states
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [itemOffset, setItemOffset] = useState<number>(0)
    const [computationStartTime, setComputationStartTime] = useState<number>(0)

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(0)

    // Fetch posts from the store.
    const posts = useAppSelector((state) => state.posts)

    useEffect(() => {
        setComputationStartTime(performance.now())
        if (!size(posts)) {
            setInitialData()
        }
    }, [posts])

    // Initialize the component by loading posts.
    const setInitialData = useCallback(async () => {
        setIsLoading(true)
        dispatch(fetchPosts())
        setIsLoading(false)
    }, [dispatch])

    // The posts that should be shown per page.
    const postPerPage = 8

    const currentPosts = useMemo(() => {
        if (size(posts)) {
            setPageCount(Math.ceil(size(posts) / postPerPage))

            return posts.slice(itemOffset, itemOffset + postPerPage)
        }
        const endTime = performance.now()
        console.log('Time taken for memoization:', endTime - computationStartTime, 'milliseconds')
    }, [posts, itemOffset])

    /**
     * The handler for iterating the pagination.
     *
     * @param page - The current page number.
     */
    const handleOnPageChange = (page: number) => {
        const newOffset = (page * postPerPage) % size(posts)
        setCurrentPage(page)
        setItemOffset(newOffset)
    }

    return (
        <>
            {!isLoading && currentPosts && currentPage && pageCount ? (
                <>
                    <List posts={currentPosts} />
                    <div className='flex overflow-x-auto sm:justify-center'>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={pageCount}
                            onPageChange={handleOnPageChange}
                            showIcons
                        />
                    </div>
                </>
            ) : (
                <div> Data is loading </div>
            )}
        </>
    )
}
