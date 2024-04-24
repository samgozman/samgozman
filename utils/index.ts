export function addColorPunctuationToHtmlString(value: string) {
  return value.replace(/([.,;:!?&*$'])/g, '<span class="text-primary">$1</span>')
}

export function addColorPunctuationForLastSignToHtmlString(value: string) {
  return value.replace(/([.,;:!?&*$'])$/, '<span class="text-primary">$1</span>')
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
