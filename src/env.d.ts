/// <reference types="vite/client" />


 interface ImportMetaEnv {
  readonly VITE_CEP_URL: string
  readonly VITE_DDD_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}