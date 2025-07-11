import Hero2 from './components/Hero2'
import ProjectBanner from './components/project/ProjectBanner'
import ProjectBannerR from './components/project/ProjectBannerR'
import Express from './../public/images/Express4.png'
import UnlcoachingImage from './../public/images/unlcoaching.png'
import UnlcoachingImage2 from './../public/images/unlcoaching2.png'
import Portfolio from './../public/images/portfolio.png'
import HomeKasa from './../public/images/HomeKasa.png'
import HomeWealth from './../public/images/WealthHealth_1.png'
// import Idoctor from './../public/images/i-doctor.png'
import HomeSegment from './../public/images/home-segment.png'
import HomeCabinet from './../public/images/home-cabinet.png'

// import RecentBlog from './components/RecentBlog'
// import Subscribe from './components/Subscribe'

const projectsData = [
    {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Segment-C.fr',
    time: '30 jrs',
    mission: 'Client Final',
    developpement: 'Full-Stack',
    image: HomeSegment,
    contentType: 'project',
    btn: { href: '#' },
    btn1: { href: '#' },
    description: `Segment C accompagne les propriétaires dans tous leurs projets de rénovation depuis plus de 15 ans.site vitrine pour portfolio réalisation , fourniture...`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'I-doctor.fr',
    time: 'en cours',
    mission: 'Side project',
    developpement: 'Full-Stack',
    image: HomeCabinet,
    contentType: '',
    btn: { href: 'projects/I-doctor' },
    btn1: { href: '#' },
    description: `i-Doctor est une plateforme innovante permettant de mettre en service une prise de rendez-vous par téléphone avec un assistant I.A.
                  Elle permet aux médecins de planifier facilement leurs consultations par téléphone, tout en optimisant efficacement la gestion de 
                  leur emploi du temps.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Express-plomberie.com',
    time: '10 jrs',
    mission: 'Client Final',
    developpement: 'Full-Stack',
    image: Express,
    contentType: 'project',
    btn: { href: 'projects/Express-plomberie' },
    btn1: { href: 'https://express-depannage-plomberie.vercel.app' },
    description: `Express Plomberie est une vitrine dédiée aux services de plomberie d'urgence, disponible 24h/24 et 7j/7 sur Bordeaux.
                  Les utilisateurs peuvent facilement accéder aux informations sur les interventions courantes, les tarifs et les réalisations
                  de l'entreprise. Le site met également en avant des témoignages clients et des conseils pratiques pour la gestion des urgences en plomberie`,
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
    description: `Le site Unlcoaching est une plateforme dédiée coaching sportif située à Bordeaux dirigée par Jérémy Prat, spécialisée dans les transformations physiques et le bien-être global.
                  Il propose des programmes personnalisés qui combinent un entraînement rigoureux et une nutrition équilibrée, adaptés aux objectifs individuels de chaque client.
                 `,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Andyramaroson.com',
    time: '1 mois',
    mission: 'Side Project OCR',
    developpement: 'Full-Stack',
    image: Portfolio,
    contentType: 'project',
    btn: { href: 'projects/Andyramaroson' },
    btn1: { href: 'https://andyramaroson.vercel.app' },
    description: ` Le portfolio présente divers projets, tels que Unlcoaching.com, l'agence Lemurian. Il est la refonte du project inital avec des technologies plus modernes 
                   comme Next.js, React, Tailwind, Stripe et Shadcn-UI. `,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Unlcoaching V1',
    time: '1 mois',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage2,
    contentType: '',
    btn: { href: 'projects/UnlcoachingV1' },
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `Le site UnlcoachingV1 est la première version de la plateforme Unlcoaching dédiée coaching sportif de Jérémy Prat. L'approche d'Unlcoaching vise à promouvoir
                  un mode de vie sain et durable, en offrant un accompagnement sur mesure pour aider chacun à atteindre ses aspirations en matière de fitness et de santé.
                  `,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'WealthHealth',
    time: '20 jrs',
    mission: 'Side Project OCR',
    developpement: 'Front-End',
    image: HomeWealth,
    contentType: 'project',
    btn: { href: 'projects/WealthHealth' },
    btn1: { href: 'https://andy-ramaroson-14-25112021.vercel.app' },
    description: `Application web interne pour l'entreprise HRnet le site permet  de lister les employées avec une création dans un formulaire, d'une modal de confirmation et d'un tableau 
                  récapitulatif des données employés`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Kasa',
    time: '20 jrs',
    mission: 'Side Project OCR ',
    developpement: 'Front-End',
    image: HomeKasa,
    contentType: 'project',
    btn: { href: 'projects/Kasa' },
    btn1: { href: 'https://andyrama.github.io/AndyRamaroson_11_25112021/' },
    description: `Le site de Kasa, plateforme de location de logements entre particuliers (plus de 500 annonces postées par jour), a été codé il y a plus de 10 ans en ASP.NET avec un code
                  legacy important. Refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end.`,
  },
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
      {/* <Subscribe className="py-16 lg:py-32 " /> */}
    </>
  )
}
