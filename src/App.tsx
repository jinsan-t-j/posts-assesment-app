import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ReactQueryProvider } from './provider'
import { AppRoutes } from './routes/AppRoutes'

/**
 * App Component.
 *
 * @returns JSX.
 */
export const App: FC = () => {
    return (
        <BrowserRouter>
            <ReactQueryProvider>
                <AppRoutes />
            </ReactQueryProvider>
        </BrowserRouter>
    )
}
