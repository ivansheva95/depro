import React from 'react'

export function useActiveLinktoScroll() {
  const [activeLink, setActiveLink] = React.useState('promo')

  React.useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting && entry.intersectionRatio > .99) {
          if(entry.target.id) {
            setActiveLink(entry.target.id)
          }
        } 
      })

    }, { threshold: 1 })

    document.querySelectorAll('section').forEach(section => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  })

  return activeLink 
}
