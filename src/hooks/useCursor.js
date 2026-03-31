import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const raf = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    const onDown = () => cursor.classList.add('clicking')
    const onUp = () => cursor.classList.remove('clicking')
    const onEnterLink = () => cursor.classList.add('hovering')
    const onLeaveLink = () => cursor.classList.remove('hovering')

    const addLinkListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    addLinkListeners()

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.1)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.1)
      if (cursor) {
        cursor.style.left = pos.current.x + 'px'
        cursor.style.top = pos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return cursorRef
}
