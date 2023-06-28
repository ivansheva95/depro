'use client'

import React from 'react'
import styles from './ContactForm.module.scss'
import { Heading, HeadingGroup } from '@/ui'
import Link from 'next/link'

type Props = {
  contact: any
}

type ISvgs = 'email' | 'phone' | 'linkedin' | 'twitter' | 'medium'
const svgs = {
  email: '',
  phone: '',
  linkedin: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" xmlSpace="preserve"><g><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" fill="#000000" data-original="#000000"></path></g></svg>,
  twitter: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" xmlSpace="preserve" ><g><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.868-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0 0 11.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.007-.75a58.354 58.354 0 0 0 26.614 7.347c-15.778-10.527-26.149-28.523-26.149-48.91a58.597 58.597 0 0 1 7.957-29.535c28.977 35.555 72.282 58.937 121.118 61.394a58.708 58.708 0 0 1-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0 0 37.313-14.262c-4.395 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 0 1-29.308 30.43zm0 0" fill="#000000" data-original="#000000"></path></g></svg>,
  medium: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" /></svg>
}

export function ContactForm({ contact }: Props) {
  return (
    <div>
      <HeadingGroup variant='center'>
        <Heading>{contact?.title}</Heading>
      </HeadingGroup>


      <div className={styles.contacts}>
        <div className={styles.top}>
          <span>{contact?.links?.[0]}</span>
          <span>{contact?.links?.[1]}</span>
        </div>

        <div className={styles.bottom}>
          {React.Children.toArray(
            contact?.socials?.map((link: any) => (
              <Link href={link?.link} target='_blank' >
                <div className={styles.contact}>
                  <div className={styles.img}>
                    {svgs[link.label as ISvgs]}
                  </div>
                  <div className={styles.link}>
                    {link.label}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
