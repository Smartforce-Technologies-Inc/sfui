import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HttpStatusCode from './SFHttpStatusCode';
import { SFLink } from '../Components/SFLink/SFLink';

export default {
  title: 'Other'
} as Meta;

interface HTTPCode {
  code: number;
  name: string;
  description: string;
}

const codeDescriptions: HTTPCode[] = [
  {
    code: HttpStatusCode.CONTINUE,
    name: 'CONTINUE',
    description: `The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request).`
  },
  {
    code: HttpStatusCode.SWITCHING_PROTOCOLS,
    name: 'SWITCHING_PROTOCOLS',
    description: `The requester has asked the server to switch protocols and the server has agreed to do so.`
  },
  {
    code: HttpStatusCode.PROCESSING,
    name: 'PROCESSING',
    description: `This code indicates that the server has received and is processing the request, but no response is available yet.`
  },
  {
    code: HttpStatusCode.OK,
    name: 'OK',
    description: `Standard response for successful HTTP requests.`
  },
  {
    code: HttpStatusCode.CREATED,
    name: 'CREATED',
    description: `The request has been fulfilled, resulting in the creation of a new resource.`
  },
  {
    code: HttpStatusCode.ACCEPTED,
    name: 'ACCEPTED',
    description: `The request has been accepted for processing, but the processing has not been completed`
  },
  {
    code: HttpStatusCode.NON_AUTHORITATIVE_INFORMATION,
    name: 'NON_AUTHORITATIVE_INFORMATION',
    description: `The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.`
  },
  {
    code: HttpStatusCode.NO_CONTENT,
    name: 'NO_CONTENT',
    description: `The server successfully processed the request and is not returning any content.`
  },
  {
    code: HttpStatusCode.RESET_CONTENT,
    name: 'RESET_CONTENT',
    description: `The server successfully processed the request, but is not returning any content.`
  },
  {
    code: HttpStatusCode.PARTIAL_CONTENT,
    name: 'PARTIAL_CONTENT',
    description: `The server is delivering only part of the resource (byte serving) due to a range header sent by the client.`
  },
  {
    code: HttpStatusCode.MULTI_STATUS,
    name: 'MULTI_STATUS',
    description: `The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.`
  },
  {
    code: HttpStatusCode.ALREADY_REPORTED,
    name: 'ALREADY_REPORTED',
    description: `The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.`
  },
  {
    code: HttpStatusCode.IM_USED,
    name: 'IM_USED',
    description: `Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).`
  },
  {
    code: HttpStatusCode.MULTIPLE_CHOICES,
    name: 'MULTIPLE_CHOICES',
    description: `Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).`
  },
  {
    code: HttpStatusCode.MOVED_PERMANENTLY,
    name: 'MOVED_PERMANENTLY',
    description: `This and all future requests should be directed to the given URI.`
  },
  {
    code: HttpStatusCode.FOUND,
    name: 'FOUND',
    description: ''
  },
  {
    code: HttpStatusCode.SEE_OTHER,
    name: 'SEE_OTHER',
    description: `The response to the request can be found under another URI using a GET method.`
  },
  {
    code: HttpStatusCode.NOT_MODIFIED,
    name: 'NOT_MODIFIED',
    description: `Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.`
  },
  {
    code: HttpStatusCode.USE_PROXY,
    name: 'USE_PROXY',
    description: `The requested resource is available only through a proxy, the address for which is provided in the response.`
  },
  {
    code: HttpStatusCode.SWITCH_PROXY,
    name: 'SWITCH_PROXY',
    description: `No longer used. Originally meant "Subsequent requests should use the specified proxy.`
  },
  {
    code: HttpStatusCode.TEMPORARY_REDIRECT,
    name: 'TEMPORARY_REDIRECT',
    description: `In this case, the request should be repeated with another URI; however, future requests should still use the original URI.`
  },
  {
    code: HttpStatusCode.PERMANENT_REDIRECT,
    name: 'PERMANENT_REDIRECT',
    description: `The request and all future requests should be repeated using another URI.`
  },
  {
    code: HttpStatusCode.BAD_REQUEST,
    name: 'BAD_REQUEST',
    description: `The server cannot or will not process the request due to an apparent client error.`
  },
  {
    code: HttpStatusCode.UNAUTHORIZED,
    name: 'UNAUTHORIZED',
    description: `Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet
    //    * been provided.`
  },
  {
    code: HttpStatusCode.PAYMENT_REQUIRED,
    name: 'PAYMENT_REQUIRED',
    description: ''
  },
  {
    code: HttpStatusCode.FORBIDDEN,
    name: 'FORBIDDEN',
    description: `The request was valid, but the server is refusing action.`
  },
  {
    code: HttpStatusCode.NOT_FOUND,
    name: 'NOT_FOUND',
    description: `The requested resource could not be found but may be available in the future.`
  },
  {
    code: HttpStatusCode.METHOD_NOT_ALLOWED,
    name: 'METHOD_NOT_ALLOWED',
    description: `A request method is not supported for the requested resource.`
  },
  {
    code: HttpStatusCode.NOT_ACCEPTABLE,
    name: 'NOT_ACCEPTABLE',
    description: `The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.`
  },
  {
    code: HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED,
    name: 'PROXY_AUTHENTICATION_REQUIRED',
    description: `The client must first authenticate itself with the proxy.`
  },
  {
    code: HttpStatusCode.REQUEST_TIMEOUT,
    name: 'REQUEST_TIMEOUT',
    description: `The server timed out waiting for the request.`
  },
  {
    code: HttpStatusCode.CONFLICT,
    name: 'CONFLICT',
    description: `Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.`
  },
  {
    code: HttpStatusCode.GONE,
    name: 'GONE',
    description: `Indicates that the resource requested is no longer available and will not be available again.`
  },
  {
    code: HttpStatusCode.LENGTH_REQUIRED,
    name: 'LENGTH_REQUIRED',
    description: `The request did not specify the length of its content, which is required by the requested resource.`
  },
  {
    code: HttpStatusCode.PRECONDITION_FAILED,
    name: 'PRECONDITION_FAILED',
    description: `The server does not meet one of the preconditions that the requester put on the request.`
  },
  {
    code: HttpStatusCode.PAYLOAD_TOO_LARGE,
    name: 'PAYLOAD_TOO_LARGE',
    description: `The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".`
  },
  {
    code: HttpStatusCode.URI_TOO_LONG,
    name: 'URI_TOO_LONG',
    description: `The URI provided was too long for the server to process.`
  },
  {
    code: HttpStatusCode.UNSUPPORTED_MEDIA_TYPE,
    name: 'UNSUPPORTED_MEDIA_TYPE',
    description: `The request entity has a media type which the server or resource does not support.`
  },
  {
    code: HttpStatusCode.RANGE_NOT_SATISFIABLE,
    name: 'RANGE_NOT_SATISFIABLE',
    description: `The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.`
  },
  {
    code: HttpStatusCode.EXPECTATION_FAILED,
    name: 'EXPECTATION_FAILED',
    description: `The server cannot meet the requirements of the Expect request-header field.`
  },
  {
    code: HttpStatusCode.MISDIRECTED_REQUEST,
    name: 'MISDIRECTED_REQUEST',
    description: `The request was directed at a server that is not able to produce a response (for example because a connection reuse).`
  },
  {
    code: HttpStatusCode.UNPROCESSABLE_ENTITY,
    name: 'UNPROCESSABLE_ENTITY',
    description: `The request was well-formed but was unable to be followed due to semantic errors.`
  },
  {
    code: HttpStatusCode.LOCKED,
    name: 'LOCKED',
    description: `The resource that is being accessed is locked.`
  },
  {
    code: HttpStatusCode.FAILED_DEPENDENCY,
    name: 'FAILED_DEPENDENCY',
    description: `The request failed due to failure of a previous request (e.g., a PROPPATCH).`
  },
  {
    code: HttpStatusCode.TOO_EARLY,
    name: 'TOO_EARLY',
    description: ''
  },
  {
    code: HttpStatusCode.UPGRADE_REQUIRED,
    name: 'UPGRADE_REQUIRED',
    description: `The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.`
  },
  {
    code: HttpStatusCode.PRECONDITION_REQUIRED,
    name: 'PRECONDITION_REQUIRED',
    description: `The origin server requires the request to be conditional.`
  },
  {
    code: HttpStatusCode.TOO_MANY_REQUESTS,
    name: 'TOO_MANY_REQUESTS',
    description: `The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.`
  },
  {
    code: HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE,
    name: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
    description: `The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.`
  },
  {
    code: HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS,
    name: 'UNAVAILABLE_FOR_LEGAL_REASONS',
    description: `A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.`
  },
  {
    code: HttpStatusCode.INTERNAL_SERVER_ERROR,
    name: 'INTERNAL_SERVER_ERROR',
    description: `A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.`
  },
  {
    code: HttpStatusCode.NOT_IMPLEMENTED,
    name: 'NOT_IMPLEMENTED',
    description: `The server either does not recognize the request method, or it lacks the ability to fulfill the request.`
  },
  {
    code: HttpStatusCode.BAD_GATEWAY,
    name: 'BAD_GATEWAY',
    description: `The server was acting as a gateway or proxy and received an invalid response from the upstream server.`
  },
  {
    code: HttpStatusCode.SERVICE_UNAVAILABLE,
    name: 'SERVICE_UNAVAILABLE',
    description: `The server is currently unavailable (because it is overloaded or down for maintenance).`
  },
  {
    code: HttpStatusCode.GATEWAY_TIMEOUT,
    name: 'GATEWAY_TIMEOUT',
    description: `The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.`
  },
  {
    code: HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED,
    name: 'HTTP_VERSION_NOT_SUPPORTED',
    description: `The server does not support the HTTP protocol version used in the request.`
  },
  {
    code: HttpStatusCode.VARIANT_ALSO_NEGOTIATES,
    name: 'VARIANT_ALSO_NEGOTIATES',
    description: `Transparent content negotiation for the request results in a circular reference.`
  },
  {
    code: HttpStatusCode.INSUFFICIENT_STORAGE,
    name: 'INSUFFICIENT_STORAGE',
    description: `The server is unable to store the representation needed to complete the request.`
  },
  {
    code: HttpStatusCode.LOOP_DETECTED,
    name: 'LOOP_DETECTED',
    description: `The server detected an infinite loop while processing the request.`
  },
  {
    code: HttpStatusCode.NOT_EXTENDED,
    name: 'NOT_EXTENDED',
    description: `Further extensions to the request are required for the server to fulfill it.`
  },
  {
    code: HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED,
    name: 'NETWORK_AUTHENTICATION_REQUIRED',
    description: `The client needs to authenticate to gain network access.`
  }
];

export const HTTPStatusCodes: Story = () => (
  <div>
    <h2>HTTP Status Codes</h2>

    <p>
      <span style={{ fontSize: 14 }}>Reference:</span>{' '}
      <SFLink sfSize='small'>
        https://datatracker.ietf.org/doc/html/rfc7231#section-6
      </SFLink>
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '50px 1fr 1fr' }}>
      {codeDescriptions.map((code: HTTPCode) => (
        <React.Fragment key={code.code}>
          <h3>{code.code}</h3>
          <h4>{code.name}</h4>
          <p>{code.description}</p>
        </React.Fragment>
      ))}
    </div>
  </div>
);
