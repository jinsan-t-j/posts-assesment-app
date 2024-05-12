/// <reference types="vite/client" />

interface ImportMetaEnv {
    /**
     * The current environment.
     */
    readonly VITE_ENV: 'DEVELOPMENT' | 'PRODUCTION'

    /**
     * The base path
     */
    readonly VITE_BASE_PATH: string

    /**
     * The Json Placeholder API URL
     */
    readonly VITE_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
