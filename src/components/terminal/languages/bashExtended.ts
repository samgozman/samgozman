import bash from 'highlight.js/lib/languages/bash'
import type { HLJSApi, Language } from 'highlight.js'

export default function bashExtended(hljs: HLJSApi): Language {
  const ext = bash(hljs)
  const keywords = ext.keywords as Record<string, string | string[]> | undefined
  if (keywords && Array.isArray(keywords.built_in)) {
    // Extend the built-in keywords. Full syntax is here: node_modules/highlight.js/lib/languages/bash.js
    keywords.built_in.push(...['curl', 'bash', 'ssh'])
  }

  const contains = ext.contains as Record<string, any>[] | undefined
  if (contains) {
    // To highlight parameters like -a, -b, -c, etc.
    contains.push({
      className: 'meta',
      begin: '-[a-zA-Z]+'
    })
  }
  return ext
}