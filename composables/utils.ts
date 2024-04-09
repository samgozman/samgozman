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

// Yes. It work as it sounds.
export function forceMagicDwarfsToColorHeaders(element: HTMLElement) {
  const headers = element.querySelectorAll(
    '.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6'
  )

  headers.forEach((header) => {
    // Get the first text node of the header
    const textNode = Array.from(header.childNodes).find((node) => node.nodeType === Node.TEXT_NODE)

    if (textNode) {
      // Get the text of the text node
      let text = textNode.nodeValue || ''

      // Replace punctuation with wrapped punctuation
      text = text.replace(/([.,;:!?&*$'])/g, '<span class="text-primary">$1</span>')

      // Create a temporary div to convert string to HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = text

      // Insert all new nodes before the old one
      while (tempDiv.firstChild) {
        header.insertBefore(tempDiv.firstChild, textNode)
      }

      // Remove the old text node
      header.removeChild(textNode)
    }
  })
}

export function calculateAge(date: Date) {
  const today = new Date()
  const age = today.getFullYear() - date.getFullYear()
  const m = today.getMonth() - date.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    return age - 1
  }

  return age
}
