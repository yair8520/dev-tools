export const errorMessages = {
    ERR_NETWORK: 'A network error occurred.',
    ERR_NAME_NOT_RESOLVED: 'The requested hostname could not be resolved. Please verify the server address.',
    ERR_ABORTED: 'The request was aborted.',
    ERR_CONNECTION_TIMED_OUT: 'The connection timed out.',
    ERR_CONNECTION_REFUSED: 'The connection was refused.',
    ERR_INVALID_URL: 'The URL is invalid.',
    ERR_SSL_PROTOCOL_ERROR: 'An SSL/TLS protocol error occurred.',
};

export const httpStatuses: { [code: number]: string } = {
    1: "",
    200: "OK",
    201: "Created",
    204: "No Content",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
};