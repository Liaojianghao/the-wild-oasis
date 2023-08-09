import { useEffect, useRef } from 'react'

export default function useClickOut(handler, listenCapturiung = true) {
  const ref = useRef()
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler()
        }
      }
      document.addEventListener('click', handleClick, listenCapturiung)
      return () =>
        document.removeEventListener('click', handleClick, listenCapturiung)
    },
    [handler, listenCapturiung]
  )

  return ref
}
