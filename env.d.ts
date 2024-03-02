/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_GITHUB_CLIENT_ID: string
  readonly VITE_AUTH_TOKEN_TTL_SECONDS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
