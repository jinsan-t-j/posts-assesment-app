import type { FC } from 'react'
import { Toast } from 'flowbite-react'

import { CheckIcon } from '../../icons/CheckIcon'

import type { ToastProps } from './toast-type'

/**
 * The success toast for the application.
 *
 * @returns The JSX.
 */
export const ErrorToast: FC<ToastProps> = ({ message }) => {
    return (
        <Toast>
            <div className='inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200'>
                <CheckIcon />
            </div>
            <div className='ml-3 text-sm font-normal'> {message} </div>
            <Toast.Toggle />
        </Toast>
    )
}
