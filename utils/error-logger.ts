/**
 * Safely wrap promise-returning functions with proper error handling
 * @param fn Function that returns a promise
 * @param errorMessage Custom error message
 */
export const safeAsync = async <T>(\
  fn: () => Promise<T>,
  errorMessage = 'An error occurred'
)
: Promise<[T | null, Error | null]> =>
{
  try {
    const result = await fn()
    return [result, null]
  } catch (error) {
    console.error(errorMessage, error)
    return [null, error instanceof Error ? error : new Error(String(error))]
  }
}

/**
 * Log errors to the console and potentially to an error tracking service
 * @param error The error object
 * @param context Additional context information
 */
export const logError = (error: unknown, context: Record<string, unknown> = {}) => {
  const errorObj = error instanceof Error ? error : new Error(String(error))

  console.error("Error:", {
    message: errorObj.message,
    stack: errorObj.stack,
    ...context,
  })

  // Here you would add code to send to error tracking service
  // Example: Sentry.captureException(errorObj, { extra: context })
}

/**
 * Create a safe event handler that catches and logs errors
 * @param fn The event handler function
 */
export function createSafeEventHandler<T extends (...args: any[]) => any>(
  fn: T,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  return (...args: Parameters<T>) => {
    try {
      const result = fn(...args)

      // Handle returned promises
      if (result instanceof Promise) {
        return result.catch((error) => {
          logError(error, { arguments: args })
          return undefined
        }) as ReturnType<T>
      }

      return result
    } catch (error) {
      logError(error, { arguments: args })
      return undefined
    }
  }
}
