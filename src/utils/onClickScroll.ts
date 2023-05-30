export const onClickScroll = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
  event.preventDefault()
  const element = document.querySelector(section)?.getBoundingClientRect().top as number

  window.scrollBy(0, element - 40)
    // document.querySelector(section)?.scrollIntoView()
}