export const IS_DEBUG = process.env.NODE_ENV !== 'production'
export const SERVER_API_ENDPOINT = process.env.SERVER_API_ENDPOINT
export const IS_DEV = IS_DEBUG
export const IS_SERVER = !process.browser
export const ENV = process.env.NODE_ENV || 'development'
