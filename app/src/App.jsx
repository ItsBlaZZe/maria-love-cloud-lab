import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import MessageCard from './components/MessageCard.jsx'
import MessageButton from './components/MessageButton.jsx'
import Footer from './components/Footer.jsx'
import { messages } from './data/messages.js'
import { getMessageOfTheDayIndex, getNextRandomIndex } from './utils/messagePicker.js'

export default function App() {
  const messageOfTheDayIndex = useMemo(() => getMessageOfTheDayIndex(), [])
  const [messageIndex, setMessageIndex] = useState(messageOfTheDayIndex)

  const showAnotherMessage = () => {
    setMessageIndex((currentIndex) => getNextRandomIndex(currentIndex))
  }

  return (
    <main className="app-shell" aria-labelledby="page-title">
      <section className="hero" aria-label="Mensajes para Maria">
        <Header />
        <MessageCard
          message={messages[messageIndex]}
          messageNumber={messageIndex + 1}
          totalMessages={messages.length}
        />
        <MessageButton onClick={showAnotherMessage} />
        <Footer />
      </section>
    </main>
  )
}
