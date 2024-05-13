import type { FC } from 'react'
import { Button, Card } from 'flowbite-react'

import type { IPost } from '../posts-type'
import { RightArrowIcon } from '../../../shared/icons/RightArrowIcon'

interface IListProps {
    posts: IPost[]
    onItemClick: (post: IPost) => void
}

const cardTheme = {
    root: {
        base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
        children: 'flex h-full flex-col justify-between gap-4 p-4',
    },
}

/**
 * The post list component.
 *
 * @returns The JSX.
 */
export const List: FC<IListProps> = ({ posts, onItemClick }) => {
    return (
        <div className='col-span-2 grid grid-cols-3 self-center'>
            {posts?.map((post: IPost) => (
                <Card
                    className='m-1 max-w-sm md:h-48'
                    key={post.id}
                    theme={cardTheme}
                    onClick={() => onItemClick(post)}
                >
                    <h5 className='font-regular text-base tracking-tight text-gray-900'>
                        {`${post.id}. ${post.title}`}
                    </h5>
                    <Button>
                        Read more
                        <RightArrowIcon />
                    </Button>
                </Card>
            ))}
        </div>
    )
}
