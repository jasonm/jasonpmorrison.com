import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { CommonHead } from '@/components/CommonHead'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

export default function Resume() {
  return (
    <>
      <CommonHead />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="text-zinc-800 dark:text-zinc-100 lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl">
              Resume
            </h1>
            <div className="mt-10">
              Email me at{' '}
              <Link
                href="mailto:jason.p.morrison@gmail.com"
                className="text-teal-600 hover:text-teal-700 dark:hover:text-teal-400"
              >
                jason.p.morrison@gmail.com
              </Link>{' '}
              to request a more detailed résumé, or:
            </div>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <Button
                href="https://www.linkedin.com/in/jasonpmorrison/"
                variant="teal"
              >
                View my resume on LinkedIn.
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
