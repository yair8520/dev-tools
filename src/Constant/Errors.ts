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
    1: "Informational Response",
    200: "OK - The request has succeeded.",
    201: "Created - The request has been fulfilled and a new resource has been created.",
    204: "No Content - The server has successfully fulfilled the request, but there is no content to send back.",
    400: "Bad Request - The server could not understand the request due to invalid syntax or other client-side errors.",
    401: "Unauthorized - The client must authenticate itself to get the requested response.",
    403: "Forbidden - The server understood the request, but refuses to authorize it.",
    404: "Not Found - The server could not find the requested resource.",
    405: "Method Not Allowed - The method specified in the request is not allowed for the resource.",
    500: "Internal Server Error - The server encountered an Error",
    501: "Not Implemented - The server does not support the functionality required to fulfill the request.",
    502: "Bad Gateway - The server, while acting as a gateway or proxy, received an invalid response from an upstream server.",
    503: "Service Unavailable - The server is currently unable to handle the request due to temporary overloading or maintenance.",
    504: "Gateway Timeout - The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.",
    301: "Moved Permanently - The requested resource has been assigned a new permanent URI and any future references to this resource should use the given URI.",
    302: "Found - The requested resource temporarily resides under a different URI.",
    303: "See Other - The response to the request can be found under a different URI and should be retrieved using a GET method on that resource.",
};
