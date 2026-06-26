class HttpError extends Error {
    constructor(
        public readonly status: number,
        message: string,
        public readonly data?: unknown
    ) {
        super(message)
        this.name = "HttpError"
    }
}
export {
    HttpError
}