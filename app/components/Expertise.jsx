import React from 'react';
import Image from 'next/image'
import { ArrowRight, Code2, Keyboard, Laptop, Link2 } from 'lucide-react';

export default function ExpertiseSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Notre Expertise</h1>
          <p className="text-lg text-muted-foreground">
            L&apos;agence de développement Kernl réalise depuis plus de 10 ans des outils sur-mesure à destination d&apos;entreprises de toutes tailles. Nous transformons chaque besoin de nos clients en solution numériques, en garantissant le respect de leurs règles métiers.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <nav className="md:col-span-3 space-y-4">
            <a href="#developpement" className="block text-primary font-medium">
              Développement
            </a>
            <a href="#hebergement" className="block text-muted-foreground hover:text-primary transition-colors">
              Hébergement
            </a>
            <a href="#maintenance" className="block text-muted-foreground hover:text-primary transition-colors">
              Maintenance
            </a>
            <a href="#mobile" className="block text-muted-foreground hover:text-primary transition-colors">
              Mobile & tablette
            </a>
            <a href="#consulting" className="block text-muted-foreground hover:text-primary transition-colors">
              Consulting
            </a>
          </nav>

          {/* Main Content */}
          <div className="md:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Développement</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Chez KERNL, nous avons une passion pour les passions !
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 flex items-center justify-center">
                  <Keyboard className="w-8 h-8" />
                </div>
                <p className="text-sm">
                  On s&apos;attache à comprendre le métier de notre client, pour définir le besoin exact.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 flex items-center justify-center">
                  <Code2 className="w-8 h-8" />
                </div>
                <p className="text-sm">
                  Puis on convient d&apos;une solution qui s&apos;accorde avec son avis, son budget.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 flex items-center justify-center">
                  <Laptop className="w-8 h-8" />
                </div>
                <p className="text-sm">
                  On revient constamment vers l&apos;utilisateur final pour qu&apos;il valide nos développements.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 flex items-center justify-center">
                  <Link2 className="w-8 h-8" />
                </div>
                <p className="text-sm">
                  On livre une solution et on reste en contact constant avec notre client pour s&apos;assurer de sa satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-3">
            <Image
              src="/images/Agile.jpg"
              width="400"
              height="400"
              alt="Wireframe sketches"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Expertise Button */}
        <div className="pt-8">
          <button className="group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
            <span className="absolute -inset-14 flex items-center justify-center rounded-full text-xs font-medium uppercase tracking-wider">
              Notre Expertise
            </span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

