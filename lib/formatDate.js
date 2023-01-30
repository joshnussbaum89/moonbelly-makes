/**
 * Converts date string to text format
 * @param {string} dateString ex/ "2022-10-19"
 * @returns "2022-10-19" becomes "October 19, 2022"
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
