import type { FC } from 'react'
import { Button, Card } from 'flowbite-react'

import type { IPost } from '../posts-type'

interface IListProps {
    posts: IPost[]
    onItemClick: (post: IPost) => void
}

/**
 * The post list component.
 *
 * @returns The JSX.
 */
export const List: FC<IListProps> = ({ posts, onItemClick }) => {
    return (
        <div className='grid grid-cols-4 self-center'>
            {posts?.map((post: IPost) => (
                <Card className='m-1 h-48 max-w-sm' key={post.id} onClick={() => onItemClick(post)}>
                    <h5 className='font-medium text-lg tracking-tight text-gray-900'>
                        {`${post.id}. ${post.title}`}
                    </h5>
                    <Button>
                        Read more
                        <svg
                            className='-mr-1 ml-2 size-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </Button>
                </Card>
            ))}
        </div>
    )
}
