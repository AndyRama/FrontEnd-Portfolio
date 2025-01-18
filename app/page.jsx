import Hero2 from './components/Hero2'
// import RecentBlog from './components/RecentBlog'
import Subscribe from './components/Subscribe'
import ProjectBanner from './components/project/ProjectBanner'
import ProjectBannerR from './components/project/ProjectBannerR'

import Express from './../public/images/Express4.png'
import UnlcoachingImage from './../public/images/unlcoaching.png'
import UnlcoachingImage2 from './../public/images/unlcoaching2.png'
import Portfolio from './../public/images/portfolio.png'
import HomePortfolio from './../public/images/home-portfolio.png'
// import HomeStoreMastuda from './../public/images/home-store.png'
// import HomeDashMastuda from './../public/images/home-dash.png'
import HomeWealth from './../public/images/WealthHealth_1.png'
import Idoctor from './../public/images/i-doctor.png'


const projectsData = [
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'I-doctor.fr',
    time: 'en cours',
    mission: 'Client Final',
    developpement: 'Full-Stack',
    image: Idoctor,
    contentType: '',
    btn: { href: 'projects/I-doctor' },
    btn1: { href: 'https://project-pj-03.vercel.app' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'express-plomberie.com',
    time: '10 jrs',
    mission: 'Client Final',
    developpement: 'Full-Stack',
    image: Express,
    contentType: 'project',
    btn: { href: 'projects/Express-plomberie' },
    btn1: { href: 'https://express-depannage-plomberie.vercel.app' },
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
    contentType: '',
    btn: { href: 'projects/Unlcoaching' },
    btn1: { href: 'https://project-pj-03.vercel.app' },
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
    btn: { href: 'projects/Lemurian' },
    btn1: { href: 'https://portfolio-eta-three-93.vercel.app/' },
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
    image: UnlcoachingImage2,
    contentType: 'project',
    btn: { href: 'projects/UnlcoachingV1' },
    btn1: { href: 'https://www.unlcoaching.com' },
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
    image: HomeWealth,
    contentType: 'project',
    btn: { href: '#' },
    btn1: { href: 'https://andy-ramaroson-14-25112021.vercel.app' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                                les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                                esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Andyramaroson.com',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: Portfolio,
    contentType: 'project',
    btn: { href: '#' },
    btn1: { href: 'https://andyramaroson.vercel.app' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  // {
  //   Component: ProjectBanner,
  //   subTitle: 'E-commerce',
  //   title: 'Masuda-store',
  //   time: 'en cours',
  //   mission: 'Side Project',
  //   developpement: ' Full-Stack',
  //   image: HomeStoreMastuda,
  //   contentType: '',
  //   btn: { href: 'projects/Unlcoaching-jeremy-prat' },
  //   btn1: { href: 'https://ecommerce-store-andyrama.vercel.app' },
  //   description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
  //                 les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
  //                 esthétiquement plaisantes.`,

  // },
  // {
  //   Component: ProjectBannerR,
  //   subTitle: 'E-commerce',
  //   title: 'Matsuda-Dashboard',
  //   time: 'en cours',
  //   mission: 'Side Project',
  //   developpement: 'Full-Stack',
  //   image: HomeDashMastuda,
  //   contentType: '',
  //   btn: { href: 'projects/Unlcoaching-jeremy-prat' },
  //   btn1: { href: 'https://ecommerce-store-andyrama.vercel.app' },
  //   description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
  //                 les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
  //                 esthétiquement plaisantes.`,
  // },
]
export default function Home() {
  return (
    <>
      <Hero2 className="pt-32 md:pt-22 pb-22" />
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
      {/* <RecentBlog className="pt-14 pb-15 " /> */}
      <Subscribe className="py-16 lg:py-32 " />
    </>
  )
}
