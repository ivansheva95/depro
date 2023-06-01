'use client'

import React from 'react'
import styles from './ContactForm.module.scss'
import { Button, HeadingAnimated, TextAnimated, TextGroup } from '@/ui'

export function ContactForm() {
  const [email, setEmail] = React.useState('')

  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setEmail(value)
  }

  const handleSubmit: React.FocusEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    console.log()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <HeadingAnimated>Присоединяйтесь к сообществу DePro</HeadingAnimated>
      <input
        value={email}
        onChange={handleEmail}
        className={styles.input}
        type="email"
        required
        placeholder='Your Email' />
      <Button>Подписывайтесь</Button>
      <TextAnimated>Будьте в курсе всех событий DePro! Подпишитесь сегодня!</TextAnimated>
    </form>
  )
}
