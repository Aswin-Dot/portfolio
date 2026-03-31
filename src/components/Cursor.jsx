import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const cursorRef = useCursor()

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ left: '-100px', top: '-100px' }}
    />
  )
}
