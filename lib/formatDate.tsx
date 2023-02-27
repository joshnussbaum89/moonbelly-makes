/**
 * Converts date string to text format
 *
 * ex/ "2022-10-19"
 *
 * "2022-10-19" becomes "October 19, 2022"
 */
export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
