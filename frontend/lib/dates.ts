/**
 * Converts date string to text format
 *
 * ex/ "2022-10-19" becomes "October 19, 2022"
 */
export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Formats a time string to 12-hour format
 *
 * ex/ "2022-10-19T16:00:00.000Z" becomes "4:00 PM"
 */
export function formatTime(time: string) {
  return new Date(time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  })
}
