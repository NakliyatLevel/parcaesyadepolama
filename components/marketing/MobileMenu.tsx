'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ChevronDown, ChevronUp } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

type ServiceLink = {
  id: string
  name: string
  slug: string
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isCozumlerOpen, setIsCozumlerOpen] = useState(false)
  const [isHizmetlerOpen, setIsHizmetlerOpen] = useState(false)
  const [isGaleriOpen, setIsGaleriOpen] = useState(false)
  const [services, setServices] = useState<ServiceLink[]>([])

  useEffect(() => {
    if (!isOpen) return

    fetch('/api/services')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.data && Array.isArray(data.data)) {
          setServices(
            data.data.map((service: any) => ({
              id: service.id,
              name: service.name,
              slug: service.slug,
            }))
          )
        } else {
          setServices([])
        }
      })
      .catch(() => setServices([]))
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 border-l border-gray-200 md:hidden overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">Menü</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className="block py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                Ana Sayfa
              </Link>
            </li>

            <li>
              <Link
                href="/hakkimizda"
                onClick={onClose}
                className="block py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                Hakkımızda
              </Link>
            </li>

            {/* Çözümlerimiz */}
            <li>
              <button
                onClick={() => setIsCozumlerOpen(!isCozumlerOpen)}
                className="w-full flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                <span>Çözümlerimiz</span>
                {isCozumlerOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {isCozumlerOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-2">
                  <li>
                    <Link href="/cozum/ucretsiz-ekspertiz" onClick={onClose} className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700">
                      Ücretsiz Ekspertiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/cozum/sozlesmeli-nakliyat" onClick={onClose} className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700">
                      Sözleşmeli Nakliyat
                    </Link>
                  </li>
                  <li>
                    <Link href="/cozum/sigortali-nakliyat" onClick={onClose} className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700">
                      Sigortalı Nakliyat
                    </Link>
                  </li>
                  <li>
                    <Link href="/cozum/asansorlu-nakliyat" onClick={onClose} className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700">
                      Asansörlü Nakliyat
                    </Link>
                  </li>
                  <li>
                    <Link href="/cozum/ambalaj-paketleme" onClick={onClose} className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700">
                      Ambalaj ve Paketleme
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Hizmetlerimiz */}
            <li>
              <button
                onClick={() => setIsHizmetlerOpen(!isHizmetlerOpen)}
                className="w-full flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                <span>Hizmetlerimiz</span>
                {isHizmetlerOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {isHizmetlerOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-2">
                  {services.length > 0 ? (
                    services.slice(0, 10).map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/hizmet/${service.slug}`}
                          onClick={onClose}
                          className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="py-2 px-3 text-xs text-muted-foreground">
                      Hizmet listesi yakında güncellenecek.
                    </li>
                  )}
                  <li>
                    <Link
                      href="/hizmetlerimiz"
                      onClick={onClose}
                      className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm font-medium text-primary"
                    >
                      Tüm Hizmetler →
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/referanslar"
                onClick={onClose}
                className="block py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                Referanslar
              </Link>
            </li>

            {/* Galeri */}
            <li>
              <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100 rounded-md transition">
                <Link
                  href="/galeri"
                  onClick={onClose}
                  className="flex-1 text-left"
                >
                  Galeri
                </Link>
                <button
                  type="button"
                  onClick={() => setIsGaleriOpen(!isGaleriOpen)}
                  className="p-2 text-muted-foreground hover:text-primary transition"
                  aria-label="Galeri alt menüsünü aç/kapat"
                >
                  {isGaleriOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
              {isGaleriOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-2">
                  <li>
                    <Link href="/galeri/araclarimiz" onClick={onClose} className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700">
                      Araçlarımız
                    </Link>
                  </li>
                  <li>
                    <Link href="/galeri/paketleme" onClick={onClose} className="block py-2 px-3 hover:bg-gray-100 rounded-md transition text-sm text-gray-700">
                      Paketleme
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/hizmet-bolgeleri"
                onClick={onClose}
                className="block py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                Hizmet Bölgeleri
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={onClose}
                className="block py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/iletisim"
                onClick={onClose}
                className="block py-2 px-4 hover:bg-gray-100 rounded-md transition"
              >
                İletişim
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="/teklif-al"
                onClick={onClose}
                className="block py-3 px-4 bg-secondary text-white text-center rounded-md font-semibold hover:bg-secondary/90 transition"
              >
                Teklif Al
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
