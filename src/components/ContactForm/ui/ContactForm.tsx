'use client'

import React from 'react'
import styles from './ContactForm.module.scss'
import { Button, Heading, HeadingAnimated, Text, TextAnimated, TextGroup } from '@/ui'

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
      <Heading>Присоединяйтесь к сообществу DePro</Heading>
      <input
        value={email}
        onChange={handleEmail}
        className={styles.input}
        type="email"
        required
        placeholder='Your Email' />
      <Button>Подписывайтесь</Button>
      <Text>Будьте в курсе всех событий DePro! Подпишитесь сегодня!</Text>
    </form>
  )
}
