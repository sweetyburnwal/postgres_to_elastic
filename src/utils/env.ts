export const isDebug: boolean = process.env.NODE_ENV == "debug";
export const isBetaMode: boolean = process.env.MODE == "beta";
export const isProd: boolean = process.env.NODE_ENV == "production";
export const isDevelopmentMode: boolean = process.env.MODE == "development";
