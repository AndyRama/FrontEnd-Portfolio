import Hero1 from './components/Hero1'
import RecentBlog from './components/RecentBlog'
import Subscribe from './components/Subscribe'
import ProjectBanner from './components/project/ProjectBanner'
import ProjectBannerR from './components/project/ProjectBannerR'

import Express from './../public/images/Express4.png'
import UnlcoachingImage from './../public/images/unlcoaching.png'
import FilleDeLaGraceImage from './../public/images/Fille-de-la-grace2.png'
import FilleDeLaGraceImage1 from './../public/images/Fille-de-la-grace1.png'
import HomePortfolio from './../public/images/home-portfolio.png'

const projectsData = [
  // {
  //   Component: ProjectBannerR,
  //   subTitle: 'Site vitrine',
  //   title: 'i-doctor.fr',
  //   time: '1 mois',
  //   mission: 'Client Final',
  //   developpement: 'Full-Stack',
  //   image: UnlcoachingImage,
  //   contentType: 'project',
  //   btn: { href: 'https://project-pj-03.vercel.app' },
  //   btn1: { href: 'express-depannage-plomberie.vercel.app/projects/Unlcoaching-jeremy-prat' },
  //   description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
  //                 les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
  //                 esthétiquement plaisantes.`,
  // },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'express-depannage-plomberie.fr',
    time: '10 jrs',
    mission: 'Client Final',
    developpement: 'Full-Stack',
    image: Express,
    btn: { href: 'express-depannage-plomberie.vercel.app' },
    btn1: { href: 'express-depannage-plomberie.vercel.app/projects/Express-depannage-plomberie' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Unlcoaching.com',
    time: '1 mois',
    mission: 'Client Final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    contentType: 'project',
    btn: { href: 'https://project-pj-03.vercel.app' },
    btn1: { href: 'express-depannage-plomberie.vercel.app/projects/Unlcoaching-jeremy-prat' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Lemurian.fr',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: HomePortfolio,
    contentType: 'project',
    btn1: { href: 'https://portfolio-eta-three-93.vercel.app/' },
    btn: { href: 'express-depannage-plomberie.vercel.app/projects/Potfolio-andy-ramaroson' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Unlcoaching V1',
    time: '1 mois',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    contentType: 'project',
    btn: { href: 'https://www.unlcoaching.com' },
    btn1: { href: 'express-depannage-plomberie.vercel.app/projects/Unlcoaching-jeremy-prat' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'E-commerce',
    title: 'store-Masuda.fr',
    time: 'en cours',
    mission: 'Side Project',
    developpement: ' Full-Stack',
    image: FilleDeLaGraceImage1,
    contentType: 'project',
    btn: { href: 'ecommerce-store-andyrama.vercel.app' },
    btn1: { href: 'express-depannage-plomberie.vercel.app/projects/Unlcoaching-jeremy-prat' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,

  },
  {
    Component: ProjectBannerR,
    subTitle: 'E-commerce DashBoard',
    title: 'Matsuda-Ecommerce-Store',
    time: 'en cours',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    btn: { href: 'ecommerce-store-andyrama.vercel.app' },
    btn1: { href: 'express-depannage-plomberie.vercel.app/projects/Unlcoaching-jeremy-prat' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'WealthHealth',
    time: '20 jrs',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn: { href: 'andy-ramaroson-14-25112021.vercel.app' },
    btn1: { href: 'express-depannage-plomberie.vercel.app/projects/Fille-de-la-grace' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                                les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                                esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Fille-de-la-grace.com',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    btn: { href: ' ecommerce-dashboard-woad.vercel.app ' },
    btn1: { href: '#' },
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
      <RecentBlog className="pt-14 pb-15 " />
      <Subscribe className="py-16 lg:py-32 " />
    </>
  )
}
