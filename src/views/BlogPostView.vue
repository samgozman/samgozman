<script setup lang="ts">
import MarkdownView from '@/components/MarkdownView.vue'

// TODO: remove example markdown
const md = `
## Markdown:

This is a markdown view.

### Subtitle? Maybe.

\`\`\`go
package errlvl

import (
	"errors"
	"fmt"
)

type Lvl uint8

const (
	DEBUG Lvl = iota + 1
	INFO
	WARN
	ERROR
	FATAL
)

// ErrorLevel is a type that represents the severity of an error in the application.
//
// This is the global error levels that should be used throughout the application to determine the severity of the error.
type ErrorLevel error

var (
	ErrDebug ErrorLevel = errors.New("[DEBUG]") // ErrDebug is returned when the global level is set to DEBUG.
	ErrInfo  ErrorLevel = errors.New("[INFO]")  // ErrInfo is returned when the global level is set to INFO.
	ErrWarn  ErrorLevel = errors.New("[WARN]")  // ErrWarn is returned when the global level is set to WARN.
	ErrError ErrorLevel = errors.New("[ERROR]") // ErrError is returned when the global level is set to ERROR.
	ErrFatal ErrorLevel = errors.New("[FATAL]") // ErrFatal is returned when the global level is set to FATAL.
)

// Wrap wraps the given error with the given level.
func Wrap(err error, level Lvl) error {
	if hasLevel(err) {
		return err
	}

	switch level {
	case DEBUG:
		return fmt.Errorf("%w %w", ErrDebug, err)
	case INFO:
		return fmt.Errorf("%w %w", ErrInfo, err)
	case WARN:
		return fmt.Errorf("%w %w", ErrWarn, err)
	case ERROR:
		return fmt.Errorf("%w %w", ErrError, err)
	case FATAL:
		return fmt.Errorf("%w %w", ErrFatal, err)
	default:
		return fmt.Errorf("%w %w", ErrError, err)
	}
}
\`\`\`

List:

- List item 1
- List item 2
- List item 3
- List item 4 with some \`inline code\`

1. Numbered list item 1
2. Numbered list item 2
3. Numbered list item 3

bold text: **bold text**
italic text: *italic text*
strikethrough text: ~~strikethrough text~~
link: [link](https://example.com)

> Blockquote

<div role="alert" class="alert alert-info">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>New software update available.</span>
</div>

Checkbox:
- [ ] AAA
- [x] BBB
- [ ] CCC

**Keyboard shortcuts and kdb:**
| Number | Windows | macOS |
|--|--|
|1|    <kbd>Ctrl</kbd> + <kbd>1</kbd>|    <kbd>⌘</kbd> + <kbd>1</kbd>|
|2|    <kbd>Ctrl</kbd> + <kbd>2</kbd>|    <kbd>⌘</kbd> + <kbd>2</kbd>|
`
</script>

<template>
  <div class="">
    <MarkdownView :value="md" />
  </div>
</template>
