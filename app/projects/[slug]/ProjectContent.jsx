'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { motion } from 'framer-motion'
import { getMDXComponent } from 'next-contentlayer/hooks'
import RecentBlog from '@/app/components/project/RecentBlog'

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const ProjectContent = ({ project }) => {
  if (!project) {
    console.log('Post not found')
    return null
  }

  const MDXContent = getMDXComponent(project.body.code)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transistion: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 lg:py-44 container px-4 mx-auto"
    >
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-slate-900 text-4xl lg:text-5xl font-medium">
            {project.title}
          </h1>
          <p className="text-slate-500 mt-10">
            <span>{format(parseISO(project.date), 'LLL d, yyyy')}</span> •{' '}
            {project.realisation}
          </p>
        </div>

        {/* Image */}
        <div className="mb-16">
          <Image
            src={project.image}
            width={1065}
            height={644}
            alt={project.title}
            className="rounded-md object-cover object-top"
          />
        </div>

        {/* Article */}
        <article className="prose mx-auto max-w-2xl">
          <div className="mx-auto max-w32xl mb-10">
            <div className=" flex justify-between ">
              <div
                className="border-l border-gray-200 relative pl-3 before:content-['']
                before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px]
                before:bg-orange-600"
              >
                {/* Content Client */}
                <span className="block text-gray-400">Client</span>
                <span>{project.client}</span>
              </div>

              {/* Content Year */}
              <div
                className="border-l border-gray-200 relative pl-3 before:content-['']
                before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px]
                before:bg-orange-600"
              >
                <span className="block text-gray-400">Year</span>
                <span>{project.year}</span>
              </div>

              {/* Content Role */}
              <div
                className="border-l border-gray-200 relative pl-3 before:content-['']
                before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px]
                before:bg-orange-600"
              >
                <span className="block text-gray-400">Durée</span>
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
          <MDXContent />
          <div className="mt-10">
            <h3 className="text-gray-400">Technologies utilisées</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.stacks?.map((stack) => (
                <li key={stack.title} className="bg-gray-100 px-3 py-1 rounded-md">
                  {stack.title}
                </li>
              ))}
            </ul>
          </div>
          {/* Links */}
          <h3 className="text-gray-400">Ressources</h3>
          <div className="flex gap-4 mt-6">
            {project.github && (
              <Link href={project.github} target="_blank" className="text-blue-600">
                GitHub
              </Link>
            )}
            <br />
            {project.herb && (
              <Link href={project.herb} target="_blank" className="text-blue-600">
                {project.herb}
              </Link>
            )}
          </div>
        </article>
      </div>

      {/* More Projects */}
      {/* <div className="mt-20">
        <RecentBlog />
      </div> */}
    </motion.div>
  )
}

export default ProjectContent
