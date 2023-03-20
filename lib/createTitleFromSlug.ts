/**
 * Removes dashes and capitalizes the first letter of each word
 */
export function createTitleFromSlug(slug: string) {
  const words = slug.split('-')

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    words[i] = word.charAt(0).toUpperCase() + word.slice(1)
  }

  return words.join(' ')
}
