export default function MessageCard({ message, messageNumber, totalMessages }) {
  return (
    <article className="message-card" aria-live="polite">
      <p className="message-label">
        Mensaje {messageNumber} de {totalMessages}
      </p>
      <blockquote>{message}</blockquote>
    </article>
  )
}
