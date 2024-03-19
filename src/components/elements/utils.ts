interface Title {
  part1: string
  part2: string
}

/**
 * Split on the last punctuation sign only.
 * @example splitOnLastPunctuationSign("Hello, world!") => ["Hello, world", "!"]
 * @param {string} value
 */
function splitOnLastPunctuationSign(value: string) {
  return value.split(/(?=[.,;:!?][^.,;:!?]*$)/, 2)
}

export function createTwoPartsTitle(value: string): Title {
  const title = splitOnLastPunctuationSign(value)
  if (title.length < 2) {
    return { part1: value, part2: '' }
  }

  return {
    part1: title[0],
    part2: title[1]
  }
}
