'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Menu, ChevronDown, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'
import { useState, useEffect, useMemo } from 'react'

type ServiceLink = {
  id: string
  name: string
  slug: string
}

export default function Header() {
  const [settings, setSettings] = useState<any>({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [services, setServices] = useState<ServiceLink[]>([])

  useEffect(() => {
    async function loadData() {
      try {
        const [settingsRes, servicesRes] = await Promise.all([
          fetch('/api/settings'),
          fetch('/api/services'),
        ])

        if (settingsRes.ok) {
          const settingsData = await settingsRes.json()
          setSettings(settingsData)
        }

        if (servicesRes.ok) {
          const servicePayload = await servicesRes.json()
          if (servicePayload?.data && Array.isArray(servicePayload.data)) {
            setServices(
              servicePayload.data.map((service: any) => ({
                id: service.id,
                name: service.name,
                slug: service.slug,
              }))
            )
          } else {
            setServices([])
          }
        }
      } catch (error) {
        setServices([])
      }
    }

    loadData()
  }, [])

  const servicesColumns = useMemo(() => {
    if (!services.length) return []
    const maxItems = 12
    const list = services.slice(0, maxItems)
    const columnCount = 3
    const chunkSize = Math.ceil(list.length / columnCount)

    return Array.from({ length: columnCount }, (_, idx) =>
      list.slice(idx * chunkSize, idx * chunkSize + chunkSize)
    ).filter((column) => column.length > 0)
  }, [services])

  return (
    <>
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Mobilde gizli */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              {settings.phone && (
                <a href={`tel:${settings.phone}`} className="flex items-center gap-2 hover:text-white/80">
                  <Phone className="w-4 h-4" />
                  {settings.phone}
                </a>
              )}
              {settings.email && (
                <a href={`mailto:${settings.email}`} className="flex items-center gap-2 hover:text-white/80">
                  <Mail className="w-4 h-4" />
                  {settings.email}
                </a>
              )}
            </div>
            <div className="flex items-center gap-4">
              {settings.facebook && (
                <a
                  href={settings.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {settings.instagram && (
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.twitter && (
                <a
                  href={settings.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {settings.linkedin && (
                <a
                  href={settings.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {settings.youtube && (
                <a
                  href={settings.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt={settings.site_title || 'Evden Eve Nakliyat'}
              width={207}
              height={69}
              priority
              className="h-[55px] w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/hakkimizda" className="hover:text-primary transition">
              Hakkımızda
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary transition">
                Çözümlerimiz
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/cozum/ucretsiz-ekspertiz" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Ücretsiz Ekspertiz
                </Link>
                <Link href="/cozum/sozlesmeli-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Sözleşmeli Evden Eve Nakliyat
                </Link>
                <Link href="/cozum/sigortali-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Sigortalı Evden Eve Nakliyat
                </Link>
                <Link href="/cozum/asansorlu-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Asansörlü Evden Eve Nakliyat
                </Link>
                <Link href="/cozum/ambalaj-paketleme" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Ambalaj ve Paketleme
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link href="/hizmetlerimiz" className="flex items-center gap-1 hover:text-primary transition">
                Hizmetlerimiz
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6">
                {servicesColumns.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {servicesColumns.map((column, index) => (
                      <div key={`service-column-${index}`}>
                        <h3 className="font-bold text-primary mb-3 pb-2 border-b border-border">
                          {index === 0 ? 'Öne Çıkanlar' : index === 1 ? 'Depolama & Taşıma' : 'Diğer Çözümler'}
                        </h3>
                        <ul className="space-y-2">
                          {column.map((service) => (
                            <li key={service.id}>
                              <Link href={`/hizmet/${service.slug}`} className="block py-1 hover:text-primary transition text-sm">
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    Hizmet listesi yakında güncellenecek.
                  </div>
                )}
                <div className="mt-4 pt-4 border-t border-border text-right">
                  <Link href="/hizmetlerimiz" className="text-sm font-semibold text-primary hover:underline">
                    Tüm hizmetleri görüntüle →
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/referanslar" className="hover:text-primary transition">
              Referanslar
            </Link>
            <div className="relative group">
              <Link href="/galeri" className="flex items-center gap-1 hover:text-primary transition">
                Galeri
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/galeri/araclarimiz" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Araçlarımız
                </Link>
                <Link href="/galeri/paketleme" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Paketleme
                </Link>
              </div>
            </div>
            <Link href="/hizmet-bolgeleri" className="hover:text-primary transition">
              Hizmet Bölgeleri
            </Link>
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>
            <Link href="/iletisim" className="hover:text-primary transition">
              İletişim
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/teklif-al">
              <Button className="bg-secondary hover:bg-secondary/90">
                Teklif Al
              </Button>
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
