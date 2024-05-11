import type { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IReactQueryProvider {
    children?: ReactNode
}

// Create a client
const queryClient = new QueryClient()

/**
 * The react query client provider for the application.
 *
 * @returns The query client provider.
 */
export const ReactQueryProvider: FC<IReactQueryProvider> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
