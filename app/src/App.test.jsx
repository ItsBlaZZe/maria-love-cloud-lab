import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'
import { messages } from './data/messages.js'
import { getMessageOfTheDayIndex, getNextRandomIndex } from './utils/messagePicker.js'

test('renders the title and a wholesome message for Maria', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: /para maria/i })).toBeInTheDocument()
  expect(screen.getByRole('blockquote')).toHaveTextContent(/\S/)
  expect(screen.getByRole('button', { name: /mostrar otro mensaje/i })).toBeInTheDocument()
})

test('message of the day index stays inside the message list', () => {
  const index = getMessageOfTheDayIndex(new Date('2026-06-14T12:00:00Z'))

  expect(index).toBeGreaterThanOrEqual(0)
  expect(index).toBeLessThan(messages.length)
})

test('random message picker avoids repeating the current message', () => {
  const nextIndex = getNextRandomIndex(0)

  expect(nextIndex).not.toBe(0)
  expect(nextIndex).toBeGreaterThanOrEqual(0)
  expect(nextIndex).toBeLessThan(messages.length)
})

test('button shows another message', async () => {
  const user = userEvent.setup()
  render(<App />)

  const initialMessage = screen.getByRole('blockquote').textContent
  await user.click(screen.getByRole('button', { name: /mostrar otro mensaje/i }))

  expect(screen.getByRole('blockquote').textContent).not.toEqual(initialMessage)
})
