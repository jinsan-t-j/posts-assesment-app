import type { FC } from 'react'
import { Toast } from 'flowbite-react'

import { CheckIcon } from '../../icons/CheckIcon'

import type { ToastProps } from './toast-type'

/**
 * The success toast for the application.
 *
 * @returns The JSX.
 */
export const SuccessToast: FC<ToastProps> = ({ message }) => {
    return (
        <Toast>
            <div className='inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200'>
                <CheckIcon />
            </div>
            <div className='ml-3 text-sm font-normal'> {message} </div>
            <Toast.Toggle />
        </Toast>
    )
}
