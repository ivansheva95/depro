import React from 'react'

export function useActiveLinkToScroll() {
  const [activeLink, setActiveLink] = React.useState('promo')
  
  React.useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {  
        if(entry.isIntersecting) {
          if(entry.target.id) {
            setActiveLink(entry.target.id)  
          }
        } 
      })
    }, { threshold: [.2, .5, .8] })

    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  return activeLink 
}