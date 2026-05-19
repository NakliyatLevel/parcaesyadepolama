import { getSiteSettings } from '@/lib/settings'
import { prisma } from '@/lib/db'
import { Metadata } from 'next'
import { PageHeading } from '@/components/ui/page-heading'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  
  return {
    title: `Hizmetlerimiz | ${settings.site_title}`,
    description: 'Bireysel ve kurumsal taşımacılık hizmetlerimiz hakkında detaylı bilgi edinin.',
  }
}

const fallbackIcon = LucideIcons.Package as LucideIcon

function resolveServiceIcon(iconName?: string | null): LucideIcon {
  if (!iconName) return fallbackIcon

  const registry = LucideIcons as unknown as Record<string, LucideIcon>
  const normalized = iconName.trim()
  const kebab = normalized.toLowerCase()
  const camel = normalized
    .toLowerCase()
    .replace(/[-_\s]+(.)/g, (_, group: string) => group.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase())
  const pascal = normalized.charAt(0).toUpperCase() + normalized.slice(1)
  const candidates = [normalized, kebab, camel, pascal]

  for (const candidate of candidates) {
    if (registry[candidate]) {
      return registry[candidate]
    }
  }

  return fallbackIcon
}

export default async function HizmetlerimizPage() {
  const [settings, services] = await Promise.all([
    getSiteSettings(),
    prisma.service.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    }),
  ])

  const featuredServices = services.filter((service) => service.showOnHomepage)
  const remainingServices = services.filter((service) => !service.showOnHomepage)
  const sections = [
    featuredServices.length
      ? {
          title: 'Öne Çıkan Hizmetler',
          description: 'En sık tercih edilen depolama ve lojistik çözümlerimiz.',
          services: featuredServices,
        }
      : null,
    remainingServices.length
      ? {
          title: 'Tüm Hizmetler',
          description: 'İhtiyacınız olan her senaryoya uygun profesyonel hizmet seçenekleri.',
          services: remainingServices,
        }
      : null,
  ].filter(Boolean) as {
    title: string
    description: string
    services: typeof services
  }[]

  return (
    <div className="min-h-screen">
      <PageHeading
        title="Hizmetlerimiz"
        description={settings.page_desc_hizmetlerimiz || 'Bireysel ve kurumsal taşımacılık ihtiyaçlarınız için profesyonel çözümler sunuyoruz.'}
        breadcrumbs={[{ label: 'Hizmetlerimiz' }]}
      />

      {sections.length === 0 ? (
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Hizmetler yakında güncellenecek</h2>
            <p className="text-muted-foreground text-lg">
              Çok yakında tüm hizmetlerimizi bu ekranda yayınlayacağız. Bu arada depolama ihtiyacınızı doğrudan ekibimizle paylaşabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition"
              >
                İletişim Formu
              </Link>
              {settings.phone && (
                <a
                  href={`tel:${settings.phone}`}
                  className="px-6 py-3 bg-white text-primary rounded-lg font-semibold border border-primary/30 hover:bg-white/80 transition"
                >
                  {settings.phone}
                </a>
              )}
            </div>
          </div>
        </section>
      ) : (
        sections.map((section, index) => (
          <section key={section.title} className={`py-16 ${index % 2 === 1 ? 'bg-muted/30' : 'bg-white'}`}>
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-foreground">{section.title}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{section.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.services.map((service) => {
                  const Icon = resolveServiceIcon(service.icon)
                  return (
                    <Link
                      key={service.id}
                      href={`/hizmet/${service.slug}`}
                      className="group bg-white border border-border rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all flex flex-col h-full"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {service.description || 'Profesyonel depolama ve lojistik çözümlerimizle eşyalarınızı güvenle yönetiyoruz.'}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between text-sm font-semibold text-primary">
                        <span>Detaylı Bilgi</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        ))
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Size Özel Çözümler Sunuyoruz</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            İhtiyacınıza özel paket ve hizmetler için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teklif-al"
              className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition"
            >
              Ücretsiz Teklif Al
            </Link>
            <a
              href={`tel:${settings.phone}`}
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition"
            >
              {settings.phone || '444 65 02'}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
