import { messages } from '../data/messages.js'

export function getMessageOfTheDayIndex(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((date - startOfYear) / 86400000)
  return dayOfYear % messages.length
}

export function getNextRandomIndex(currentIndex) {
  if (messages.length <= 1) {
    return 0
  }

  let nextIndex = currentIndex
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * messages.length)
  }

  return nextIndex
}
