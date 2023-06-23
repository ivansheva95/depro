import { debounce } from './debounce'

export const scrollAutoActive = debounce(() => {
  const scrollDistance = window.scrollY
  const sections = document.querySelectorAll('section')
  console.log('section', sections)

  sections.forEach((section, index) => {
    console.log('section', section)
    if (section.offsetTop <= scrollDistance) {
      console.log('section', section)
      // links.current.forEach(element => element.classList.remove('active'))
      // links.current[index].classList.add('active')
    }
  })
}, 100)