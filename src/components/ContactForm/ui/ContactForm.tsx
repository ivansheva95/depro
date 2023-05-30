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
      <HeadingAnimated>Contact</HeadingAnimated>
      <input
        value={email}
        onChange={handleEmail}
        className={styles.input}
        type="email"
        required
        placeholder='Your Email' />
      <Button>Click</Button>
      <TextAnimated>Info Info Info</TextAnimated>
    </form>
  )
}
