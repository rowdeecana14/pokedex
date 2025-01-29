export const formatString = (string: string) => {
  let newString = `${string[0].toUpperCase()}${string.substring(1)}`

  if (newString.includes('-')) {
    const hyphenIndex = newString.indexOf('-')
    if (newString.length > 9) {
      newString = `${newString.slice(0, hyphenIndex)}`
    } else {
      newString = newString.replace('-', ' ')
      newString = `${newString.slice(0, hyphenIndex + 1)}${newString
        .slice(hyphenIndex + 1, hyphenIndex + 2)
        .toUpperCase()}${newString.slice(hyphenIndex + 2, newString.length)}`
    }
  }
  return newString
}
