'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import BtnStack from './BtnStack'
import Link from 'next/link'

const projectBannerContent = {
  heading: {
    subTitle: '',
    title: '',
    time: '',
    description: '',
    mission: '',
    developpement: '',
    contentType: '',
    btn1: {
      href: '',
      label: 'Demo',
    },
    btn: {
      href: '',
      label: "Plus d'informations",
    },
  },
}

const ProjectBanner = ({
  className,
  title,
  subTitle,
  description,
  image,
  time,
  mission,
  developpement,
  btn,
  btn1,
  contentType,
}) => {
  title = title || projectBannerContent.heading.title
  subTitle = subTitle || projectBannerContent.heading.subTitle
  description = description || projectBannerContent.heading.description
  time = time || projectBannerContent.heading.time
  mission = mission || projectBannerContent.heading.mission
  developpement = developpement || projectBannerContent.heading.developpement
  btn = btn || projectBannerContent.heading.btn.href
  btn1 = btn1 || projectBannerContent.heading.btn1.href
  contentType = contentType || projectBannerContent.heading.contentType

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row-reverse lg:w-12/12 mx-auto">
          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.4,
                duration: 0.5,
                ease: 'easeInOut',
              },
            }}
            viewport={{ once: true }}
            style={{ y: imgScroll1 }}
            className="z-[2] relative bg-cover bg-center mx-auto mb-8 lg:mb-0"
          >
            {image && (
              <Image src={image} width={700} height={985} alt="hero image" />
            )}
          </motion.div>

          {/* Content Left */}
          <div className="xl:w-12/12 relative lg:mt-0 mb-8 lg:mb-0 mr-0 xl:mr-40">
            <div className="lg:max-w-xl mx-auto mb-10">
              {/* Content Left - subtitle */}
              {subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[18px] mb-5 inline-block text-[#2F2E2E] font-bold"
                >
                  {subTitle}
                </motion.span>
              )}

              {/* Content Left- Title */}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.06, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl xl:text-5xl text-orange-500 mb-5"
                >
                  {title}
                </motion.h2>
              )}

              {/* Content Left - Time */}
              {time && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="tracking-[3px] text-[14px] mb-5 inline-block  text-[#2F2E2E] font-bold"
                >
                  {developpement} | {time} | {mission}
                </motion.span>
              )}

              {/* Content Left - Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-left lg:text-lg mb-10"
                >
                  {description}
                </motion.p>
              )}

              <BtnStack contentType={contentType} className="contents lg:hidden" />

              {/* Content Left - BtnAction */}
              {(btn || btn1) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="btn-container mt-10"
                >
                  {/* Content Left - btn - demo */}
                  {btn1?.href && (
                    <Link
                      href={btn1.href}
                      target="_blank"
                      className="transistion-all duration-300 ease-in-out text-[11.5px]
                      md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-300 to-orange-500 py-4 px-5
                      rounded  text-gray-600 hover:bg-white hover:text-[#2F2E2E] inline-block hover:shadow-2xl mb-5 mr-5"
                    >
                      Demo
                    </Link>
                  )}

                  {/* Content Left - btn - info */}
                  {btn?.href && (
                    <Link
                      href={btn.href}
                      target="_blank"
                      className="transistion-all duration-300 ease-in-out text-[11.5px]
                      md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-100 to-orange-300 py-4 px-5
                      rounded  text-gray-600 hover:bg-white hover:text-[#2F2E2E] inline-block hover:shadow-2xl mb-5 mr-5"
                    >
                      Plus d&apos;informations
                    </Link>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
        {/* Content left - stack - mobile */}
        <BtnStack contentType={contentType} className="hidden lg:contents" />
        <div className="contents md:hidden">
          <hr />
        </div>
      </div>
    </section>
  )
}

export default ProjectBanner
