export const onClickScroll = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
  event.preventDefault()

  document.querySelector(section)?.scrollIntoView()
}