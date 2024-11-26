import Hero from './components/Hero'
// import Hero1 from './components/Hero1'
import RecentProject from './components/RecentProject'
import RecentBlog from './components/RecentBlog'
import Stats from './components/Stats'
import Client from './components/Client'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import DescriptionCard from './components/DescriptionCard'
import HowIworks from './components/HowIworks'

import ProjectBanner from './components/project/ProjectBanner'
import ProjectBannerR from './components/project/ProjectBannerR'


import TeamImage from './../public/images/Team.jpg'
import UnlcoachingImage from './../public/images/unlcoaching.png'
import schoolUnlcoachingImage from './../public/images/unlcoaching2.png'
import FilleDeLaGraceImage from './../public/images/Fille-de-la-grace2.png'
import HomePortfolio from './../public/images/lemurianV1.png'


const projectsData = [
  {
    Component: ProjectBannerR,
    subTitle: 'Application web',
    title: 'express-depanage-plomberie.fr',
    time: '1 mois 1/2',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: schoolUnlcoachingImage,
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'lemurian.fr',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: HomePortfolio,
    contentType: 'project',
    btn1: { href: 'https://portfolio-eta-three-93.vercel.app/' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Unlcoaching.com',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    contentType: 'project',
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Fille-de-la-grace.com',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'i-doctor.fr',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'E-commerce',
    title: 'HatGasy.com',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },

]
export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-22" />
      {/* <Hero1 className="pt-32 md:pt-22 pb-22" /> */}

      {projectsData.map((project, index) => {
        const { Component, ...props } = project
        return (
          <Component
            key={index}
            className="pt-32 lg:mb-22 xl:mb-32"
            {...props}
          />
        )
      })}

      <DescriptionCard
        className="mt-28 pb-22"
        title="À propos de moi"
        subTitle="quelques mots"
      />
      <HowIworks />
      <Stats />
      <Client className="mt-22 pb-8" />
      {/* <HowIWorks2/> */}
      <RecentProject className="mt-32 pb-22" />
      <Testimonials/>
      <RecentBlog className="pt-14 pb-15 " />
      <Subscribe className="py-16 lg:py-32 " />
    </>
  )
}
