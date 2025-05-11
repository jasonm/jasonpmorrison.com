import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { CommonHead } from '@/components/CommonHead'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, TwitterIcon, LinkedInIcon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
//import { generateRssFeed } from '@/lib/generateRssFeed'
// import { getAllArticles } from '@/lib/getAllArticles'
import portraitImage from '@/images/portrait.jpg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <CommonHead />
      {/* <PointwiseHero /> */}
      <Container className="mt-9">
        <div className="">
          <h1 className="text-4xl font-bold leading-normal tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-normal">
            Hello, I&apos;m Jason.
            <br />I focus on{' '}
            <span className="bg-yellow-200 px-2 py-1 text-opacity-5 dark:bg-yellow-500">
              AI engineering
            </span>
            and{' '}
            <span className="bg-pink-200 px-2 py-1 text-opacity-5 dark:bg-pink-500">
              engineering leadership
            </span>
            .
          </h1>
          <div className="space-y-7"></div>
          <div className="mt-6 text-2xl font-medium text-zinc-600 dark:text-zinc-400">
            Based in San Francisco, California, I am currently building{' '}
            <Link
              href="https://dittto.ai"
              className="font-medium text-indigo-500 dark:text-indigo-400"
            >
              Dittto
            </Link>{' '}
            to enable anyone to build and run sophisticated marketing campaigns
            for their product or business &mdash; without a big marketing team.
          </div>

          <div className="mt-6 text-2xl font-medium text-zinc-600 dark:text-zinc-400">
            Previously I co-ran Pointwise, an AI engineering consultancy. We
            advised founders and built LLM-based products across education,
            future of work, events management, and healthcare.
          </div>
          <div className="mt-6 text-2xl font-medium text-zinc-600 dark:text-zinc-400">
            Before that, I was an engineering leader at{' '}
            <Link
              href="https://minervaproject.com"
              className="font-medium text-indigo-500 dark:text-indigo-400"
            >
              Minerva Project
            </Link>
            {' and '}
            <Link
              href="https://minerva.edu"
              className="font-medium text-indigo-500 dark:text-indigo-400"
            >
              Minerva University
            </Link>
            , where we build a brand new fully-accredited liberal arts
            university.
          </div>
          {/*
          <div className="mt-6 text-2xl font-medium text-zinc-600 dark:text-zinc-400">
            Before that, as a consultant at{' '}
            <Link
              href="https://thoughtbot.com"
              className="font-medium text-indigo-500 dark:text-indigo-400"
            >
              thoughtbot
            </Link>{' '}
            I validated product ideas, built prototypes, shipped new products,
            augmented engineering teams, and developed and ran engineering
            training sessions.
          </div>
            */}
          {/*
          <div className="mt-6 text-2xl font-medium text-zinc-600 dark:text-zinc-400">
            <Link
              href="/consulting"
              className="font-medium text-indigo-500 dark:text-indigo-400"
            >
              Read about consulting with me
            </Link>{' '}
            for advice and engineering with AI, LLMs, or NLP.
          </div>
            */}
          <div className="mt-12 flex gap-6">
            <SocialLink
              href="https://github.com/jasonm"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://twitter.com/jayunit"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jasonpmorrison/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    //await generateRssFeed()
  }

  return {
    props: {
      //articles: [],
      //(await getAllArticles())
      //  .slice(0, 4)
      //  .map(({ component, ...meta }) => meta),
    },
  }
}

function PointwiseHero() {
  return (
    <div className="relative isolate mt-10 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center text-base text-zinc-800 dark:text-zinc-100">
          <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            Turn your AI ambitions into reality.
          </h1>
          <h1 className="mt-10 text-3xl font-bold leading-loose tracking-tight sm:text-5xl sm:leading-loose">
            Got a{' '}
            <span className="bg-yellow-200 px-2 py-1 text-opacity-5 dark:bg-yellow-500">
              brilliant AI product idea
            </span>{' '}
            but{' '}
            <span className="bg-pink-200 px-2 py-1 text-opacity-5 dark:bg-pink-500">
              no AI engineers?
            </span>{' '}
            Let&apos;s{' '}
            <span className="bg-blue-200 px-2 py-1 text-opacity-5 dark:bg-blue-500">
              explore and build it together
            </span>
            .{' '}
          </h1>
          <h1 className="mt-10 text-2xl font-bold tracking-tight  sm:text-4xl">
            AI engineering consulting and engineering
            <br />
            for product leaders and founders.
          </h1>

          <p className="mt-10 text-lg">
            From feasibility studies that assess the practicality of your idea,
            to strategic planning that outlines the roadmap to success,
            we&apos;ve got you covered. Our team doesn&apos;t stop at
            consulting; we roll up our sleeves and get involved in the actual
            engineering work, turning your AI concept into a fully functional
            product. We&apos;re here to support product leaders and founders
            every step of the way on their AI journey.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
