import dotenv from 'dotenv'

dotenv.config()

export const ENV = process.env.NODE_ENV || 'development'

export const IS_LOCAL = ENV === 'development'

// 1 hour
export const TOKEN_COOKIE_DURATION = process.env.TOKEN_COOKIE_DURATION || 3600000

// 1 month
export const REFRESH_COOKIE_DURATION = process.env.REFRESH_COOKIE_DURATION || 2592000000

export const SESSION_TOKEN_NAME = process.env.SESSION_TOKEN_NAME || 'token'

export const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000'

/*
 * Set this to your client application's domain
 * E.g. .example.com
 */
export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || 'localhost'

export const SENTRY_DSN = process.env.SENTRY_DSN

// https://engine.apollographql.com/
export const ENGINE_API_KEY = process.env.ENGINE_API_KEY
