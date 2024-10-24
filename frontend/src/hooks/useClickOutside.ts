import { useEffect, useRef } from 'react'

interface UseClickOutsideConfig {
  onOutside: () => void
}

export const useClickOutside = <T extends HTMLElement>({
  onOutside,
}: UseClickOutsideConfig) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      ref.current?.contains(e.target as Node) || onOutside()
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return { ref }
}
