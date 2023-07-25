import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { CommonHead } from '@/components/CommonHead'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <CommonHead />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hello, I’m Jason.
            </h1>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {/*I build products and technology in AI, education, and the future
                 of work.*/}
              I focus on AI engineering and engineering leadership.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                In the late 80s, I taught myself to code on our family’s
                Commodore 64 and have loved building software ever since. A
                first-generation college graduate, I earned my degree in
                Computer Science in 2007 from RIT in Rochester, New York.
              </p>
              <p>
                In 2008 I joined thoughtbot, a boutique consulting firm where I
                learned to balance technical excellence with the practical
                realities of early-stage startups. I developed and taught
                training courses on Ruby and Rails, and I advised clients on
                customer validation and hypothesis-driven product development.
                And I wrote a lot of code.
              </p>
              <p>
                In 2013, I moved to San Francisco and joined the{' '}
                <Link
                  href="https://www.minervaproject.com"
                  className="text-indigo-500 dark:text-indigo-400"
                >
                  Minerva Project
                </Link>{' '}
                where I built software and led teams building our real-time
                multiplayer video classroom{' '}
                <Link
                  className="text-indigo-500 dark:text-indigo-400"
                  href="https://www.minervaproject.com/our-approach/forum-learning-environment/"
                >
                  Minerva Forum
                </Link>{' '}
                and related products like multiplayer coding environments. I
                also built ML and NLP systems for admissions and university
                operations, and built and ran an applied machine learning summer
                internship for undergraduates.
              </p>
              <p>
                In successive roles as a manager, director, and VP of
                Engineering, I hired, managed, and grew engineers and EMs,
                organized and gelled teams, directed engineering process, and
                represented engineering to the executive team. In late 2022, I
                left to explore my own product ideas.
              </p>

              <p>
                Today, I’m a cofounder at{' '}
                <Link
                  href="https://pointwise.ai"
                  className="font-medium text-indigo-500 dark:text-indigo-400"
                >
                  Pointwise AI
                </Link>
                . We consult on AI engineering for founders, product teams, and
                engineering leaders. We&apos;ve worked on projects like natural
                language interaction platforms for realistic training and
                coaching, and sophisticated LLM-based authoring pipelines to
                scale content authoring while meeting rigorous academic quality
                standards.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/jasonm"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jasonpmorrison/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jason.p.morrison@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jason.p.morrison@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
