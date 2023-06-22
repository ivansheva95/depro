import { ContactForm } from '@/components/ContactForm/ui/ContactForm'
import { firebaseApi } from '@/firebase'
import { Section } from '@/section'
import { Container } from '@/ui'

import React, { use } from 'react'

export function HomeContact() {
  const contact = use(firebaseApi.getContent('home-page', 'contact'))

  return (
    <Section id='contact'>
      <Container>
        <ContactForm contact={contact} />
      </Container>
    </Section>
  )
}
