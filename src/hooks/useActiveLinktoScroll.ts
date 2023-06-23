import React from 'react'
// import { scrollAutoActive } from '../utils/scrollAutoActive'

export function useActiveLinkToScroll() {
  const [activeLink, setActiveLink] = React.useState('promo')
  
  React.useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {  
        if(entry.isIntersecting) {
          console.log(entry.target)
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

// export const useActiveLinkToScroll = () => {
//   const [activeLink, setActiveLink] = React.useState('promo')

//   const handleActiveLink = (link: string) => setActiveLink(link)

//   React.useEffect(() => {
//     window.addEventListener('scroll', () => scrollAutoActive)
//         return () => window.removeEventListener('scroll', scrollAutoActive)
//   }, [])

//   return activeLink
// }
