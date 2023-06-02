import { ContactForm } from '@/components/ContactForm/ui/ContactForm'
import { Section } from '@/section'
import { Container } from '@/ui'

import React from 'react'

export function HomeContact() {
  return (
    <Section id='contact'>
      <Container>
        <Section.Row>
          <Section.Column>
            <ContactForm />
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
