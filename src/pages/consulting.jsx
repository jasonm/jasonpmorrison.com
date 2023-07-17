import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Head from 'next/head'

import { Calendly } from '@/components/Calendly'
import { CommonHead } from '@/components/CommonHead'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
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
            <h1 className="text-2xl font-bold tracking-tight text-zinc-600 dark:text-zinc-400 sm:text-3xl">
              Engineering and strategy for AI products
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <div>
                Do you have questions about building generative AI products with
                technologies like these?
              </div>
              <ul className="ml-4 list-outside list-disc">
                <li>
                  LLMs like OpenAI&apos;s GPT-3.5/GPT-4 and Anthropic&apos;s
                  Claude
                </li>
                <li>Workflow tools like LangChain and LlamaIndex</li>
                <li>Vector databases like Chroma and Pinecone</li>
                <li>
                  Prompt engineering techniques like chain-of-thought and
                  retrieval augmented generation
                </li>
                <li>
                  Other NLP/ML techniques like embeddings, clustering, and
                  interpretable models
                </li>
              </ul>
              <div>
                Whether you are a founder, product leader, or engineering
                leader, I&apos;m excited to discuss how I can help you make
                decisions and move faster to incorporate AI.
              </div>
              <div className="space-y-7">
                As Shawn Wang writes in{' '}
                <Link
                  href="https://www.latent.space/p/ai-engineer"
                  className="font-medium text-teal-500 dark:text-teal-400"
                >
                  The Rise of the AI Engineer
                </Link>
                :
                <div className="space-y-4 border-l-4 pl-4">
                  <div>
                    We are observing a once in a generation “shift right” of
                    applied AI, fueled by the emergent capabilities and open
                    source/API availability of Foundation Models.
                  </div>

                  <div>
                    A wide range of AI tasks that used to take 5 years and a
                    research team to accomplish in 2013, now just require API
                    docs and a spare afternoon in 2023.
                  </div>
                </div>
              </div>
              <div>
                Recent areas I have worked in include:
                <ul className="ml-4 mt-6 list-outside list-disc">
                  <li>Building AI products for learning in the flow of work</li>
                  <li>Developing AI strategy in higher education</li>
                  <li>
                    Interactive LLM-based scenario simulations with speech
                  </li>
                  <li>Scalable LLM-based content authoring strategies</li>
                </ul>
              </div>
              <div>
                I am happy to answer questions or offer advice. You can&apos;t
                waste my time!{' '}
              </div>
              <div>
                <Button href="mailto:jason.p.morrison@gmail.com" variant="teal">
                  Email me at jason.p.morrison@gmail.com
                </Button>{' '}
              </div>
            </div>
          </div>
          {/*
          <div className="lg:pl-20">
            <Calendly />
          </div>
          */}
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
        </div>
      </Container>
    </>
  )
}
