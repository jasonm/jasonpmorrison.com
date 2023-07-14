import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { CommonHead } from '@/components/CommonHead'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

export default function Resume() {
  return (
    <>
      <CommonHead />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Résumé
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <Link
                href="https://www.linkedin.com/in/jasonmorrison/"
                className="font-medium text-teal-500 dark:text-teal-400"
              >
                Download my resume (PDF).
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
