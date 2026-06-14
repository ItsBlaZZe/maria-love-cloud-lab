export default function MessageButton({ onClick }) {
  return (
    <button
      className="message-button"
      type="button"
      onClick={onClick}
      aria-label="Mostrar otro mensaje bonito para Maria"
    >
      Mostrar otro mensaje
    </button>
  )
}
