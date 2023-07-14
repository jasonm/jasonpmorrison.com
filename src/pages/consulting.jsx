import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Head from 'next/head'

import { Calendly } from '@/components/Calendly'
import { CommonHead } from '@/components/CommonHead'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

export default function Consulting() {
  return (
    <>
      <CommonHead />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Consulting
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Questions about building products with large language models
                (LLMs) like GPT-4? I'm excited to meet founders, product
                leaders, and technologists building new things to share what
                I've learned in this quickly-moving space.
              </p>
              <p className="mt-6">
                I am especially well-equipped to help with:
                <ul className="list-inside list-disc">
                  <li>AI in education</li>
                  <li>AI in the future of work</li>
                  <li>Interactive AI-based simulations</li>
                  <li>Scalable content authoring strategies using AI</li>
                </ul>
              </p>
              <p className="mt-6">
                Let's have an initial consultation to see how I can help! Email
                me at{' '}
                <Link
                  href="mailto:jason.p.morrison@gmail.com"
                  className="font-medium text-teal-500 dark:text-teal-400"
                >
                  jason.p.morrison@gmail.com
                </Link>{' '}
                or schedule a call on Calendly.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <Calendly />
          </div>
        </div>
      </Container>
    </>
  )
}
