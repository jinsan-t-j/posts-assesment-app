import type { FC } from 'react'

/**
 * The application footer.
 *
 * @returns The JSX
 */
export const Footer: FC = () => {
    return (
        <footer className='m-4 rounded-lg bg-white shadow dark:bg-gray-800'>
            <div className='mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
                <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
                    Designed and developed by{' '}
                    <a href='https://github.com/jinsan-t-j' className='hover:underline'>
                        Jinsan TJ
                    </a>
                </span>
            </div>
        </footer>
    )
}
