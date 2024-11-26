// import Hero from './components/Hero'
import Hero1 from './components/Hero1'
import RecentBlog from './components/RecentBlog'
import Subscribe from './components/Subscribe'
import DescriptionCard from './components/DescriptionCard'

import ProjectBanner from './components/project/ProjectBanner'
import ProjectBannerR from './components/project/ProjectBannerR'


import Express from './../public/images/Express3.png'
import UnlcoachingImage from './../public/images/unlcoaching.png'
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
    image: Express,
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
      <Hero1 className="pt-32 md:pt-22 pb-22" /> 

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
      <RecentBlog className="pt-14 pb-15 " />
      <Subscribe className="py-16 lg:py-32 " />
    </>
  )
}
