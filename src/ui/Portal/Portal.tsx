import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode
}

export default function Portal({ children }: Props) {
  const [isMounted, setIsMounted] = React.useState(false)
  const ref = React.useRef<Element | null>(null)

  React.useEffect(() => {
    ref.current = document.getElementById('modal') as HTMLElement
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }

  }, [])

  return (isMounted && ref.current) ? ReactDOM.createPortal(children, ref.current) : null
}
