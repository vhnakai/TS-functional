declare global {
  /* eslint-disable no-unused-vars */
  namespace NodeJS {
    interface ProcessEnv {
      CUSTOM_ENV: string,
      PORT: string,
      DB_PORT: string,
      REDIS_URL: string,
    }
  }
}

export {}
