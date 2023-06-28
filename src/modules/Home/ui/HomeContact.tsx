'use client'

import { ContactForm } from '@/components/ContactForm/ui/ContactForm'
import { firebaseApi } from '@/firebase'
import { Section } from '@/section'
import { Container } from '@/ui'

import React, { use } from 'react'

export function HomeContact() {

  const [content, setContent] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await firebaseApi.getContent('home-page', 'contact')
      setContent(response)
    }

    getData()
  }, [])

  // const contact = use(firebaseApi.getContent('home-page', 'contact'))

  return (
    <Section id='contact'>
      <Container>
        <ContactForm contact={content} />
      </Container>
    </Section>
  )
}
