import React from 'react'

export function useActiveLinktoScroll() {
  const [activeLink, setActiveLink] = React.useState('promo')
  
  React.useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      // console.log(entries)
      entries.forEach(entry => {  
        // console.log(entry.target)
        if(entry.isIntersecting && entry.intersectionRatio > .5) {
          console.log(entry.target)
          if(entry.target.id) {
            setActiveLink(entry.target.id)
          }
        } 
      })

    }, { threshold: [.2, .5, .8] })

    document.querySelectorAll('section').forEach(section => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  return activeLink 
}
