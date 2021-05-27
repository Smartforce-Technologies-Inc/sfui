/**
 * Hypertext Transfer Protocol (HTTP) response status codes.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7231#section-6}
 */

enum HttpStatusCode {
  /**
   * The 200 (OK) status code indicates that the request has succeeded.
   */
  OK = 200,

  /**
   * The 201 (Created) status code indicates that the request has been
   * fulfilled and has resulted in one or more new resources being
   * created.
   */
  CREATED = 201,

  /**
   * The 202 (Accepted) status code indicates that the request has been
   * accepted for processing, but the processing has not been completed.
   */
  ACCEPTED = 201,

  /**
   * The 400 (Bad Request) status code indicates that the server cannot or
   * will not process the request due to something that is perceived to be
   * a client error (e.g., malformed request syntax, invalid request
   * message framing, or deceptive request routing).
   */
  BAD_REQUEST = 400,

  /**
   * The 200 (OK) status code indicates that the request has succeeded.
   */
  UNAUTHORIZED = 401,

  /**
   * he 403 (Forbidden) status code indicates that the server understood
   * the request but refuses to authorize it.
   */
  FORBIDDEN = 403,

  /**
   * The 404 (Not Found) status code indicates that the origin server did
   * not find a current representation for the target resource or is not
   * willing to disclose that one exists.
   */
  NOT_FOUND = 404,

  /**
   * The 405 (Method Not Allowed) status code indicates that the method
   * received in the request-line is known by the origin server but not
   * supported by the target resource.
   */
  METHOD_NOT_ALLOWED = 405,

  /**
   * The 409 (Conflict) status code indicates that the request could not
   * be completed due to a conflict with the current state of the target
   * resource.
   */
  CONFLICT = 409,

  /**
   * The 500 (Internal Server Error) status code indicates that the server
   * encountered an unexpected condition that prevented it from fulfilling
   * the request.
   */
  INTERNAL_SERVER_ERROR = 500,

  /**
   * The 503 (Service Unavailable) status code indicates that the server
   * is currently unable to handle the request due to a temporary overload
   * or scheduled maintenance, which will likely be alleviated after some
   * delay.
   */
  SERVICE_UNAVAILABLE = 503
}

export default HttpStatusCode;
