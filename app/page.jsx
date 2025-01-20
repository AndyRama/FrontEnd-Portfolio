import Hero2 from './components/Hero2'
import ProjectBanner from './components/project/ProjectBanner'
import ProjectBannerR from './components/project/ProjectBannerR'
import Express from './../public/images/Express4.png'
import UnlcoachingImage from './../public/images/unlcoaching.png'
import UnlcoachingImage2 from './../public/images/unlcoaching2.png'
import Portfolio from './../public/images/portfolio.png'
import HomePortfolio from './../public/images/home-portfolio.png'
import HomeWealth from './../public/images/WealthHealth_1.png'
import Idoctor from './../public/images/i-doctor.png'

// import RecentBlog from './components/RecentBlog'
// import Subscribe from './components/Subscribe'

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
    btn1: { href: 'https://www.figma.com/proto/HMFrh1iMfwK2378cPXJQg4/I-doctor?node-id=130-5658&t=AJogb9uoCBaG8PeW-1&scaling=min-zoom&content-scaling=fixed&page-id=130%3A5657&starting-point-node-id=130%3A5658' },
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
                  Elle propose des programmes personnalisés qui combinent un entraînement rigoureux et une nutrition équilibrée, adaptés aux objectifs individuels de chaque client.
                 `,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Andyramaroson.com',
    time: '1 mois',
    mission: 'Side Project',
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
    contentType: 'project',
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
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: HomeWealth,
    contentType: 'project',
    btn: { href: 'projects/WealthHealth' },
    btn1: { href: 'https://andy-ramaroson-14-25112021.vercel.app' },
    description: `Application web interne pour l'entreprise HRnet le site permet  de lister les employées avec une création dans un formulaire, d'une modal de confirmation et d'un tableau 
                  récapitulatif des données employés`,
  },
  // {
  //   Component: ProjectBannerR,
  //   subTitle: 'Site vitrine',
  //   title: 'Lemurian.fr',
  //   time: '1 mois',
  //   mission: 'Side Project',
  //   developpement: 'Full-Stack',
  //   image: HomePortfolio,
  //   contentType: 'project',
  //   btn: { href: 'projects/Lemurian' },
  //   btn1: { href: 'https://portfolio-eta-three-93.vercel.app/' },
  //   description: `Lemurian est une agence web innovante basée à Bordeaux, spécialisée dans la création de sites vitrines et le développement
  //                 d'applications web modernes sur mesure. Fondée par Andy Ramaroson, développeur Full-Stack expert en React et Next.js`,
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
      {/* <Subscribe className="py-16 lg:py-32 " /> */}
    </>
  )
}
