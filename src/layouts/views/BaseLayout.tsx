import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../header'
import { Footer } from '../footer/Footer'

/**
 * The base layout for the application.
 *
 * @returns The base JSX layout.
 */
export const BaseLayout: FC = () => {
    return (
        <div className='container m-auto'>
            <main>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}
