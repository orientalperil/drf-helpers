/**
 * Shared types for interpreting Django REST Framework error responses.
 */

/**
 * A Django REST Framework error body. Field keys map to a list of messages; a
 * nested serializer maps to an object of the same shape one level deep.
 * `detail` (APIException) and `non_field_errors` are the two form-level
 * channels.
 */
export interface DrfErrorData {
  detail?: string
  non_field_errors?: string[] | string
  [field: string]: string | string[] | Record<string, string[]> | undefined
}

/**
 * The axios-shaped error the Submitters read. On an HTTP error `response.data`
 * holds the DRF body; a network failure has `request` but no `response`.
 */
export interface ApiError {
  isAxiosError?: boolean
  response?: { status: number; data: DrfErrorData }
  request?: unknown
}
