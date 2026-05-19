import { prisma } from '../lib/db'

const reviews = [
  {
    id: 'review-1',
    name: 'Selin Arslan',
    location: 'İstanbul - Bebek',
    rating: 5,
    comment:
      'Boğaz hattındaki evimizi taşınma sürecine hazırlarken depolama hizmetleri sayesinde hiçbir eşya zarar görmedi. QR kodlu takip ve haftalık raporlarla her adımı izleyebildim.',
  },
  {
    id: 'review-2',
    name: 'Kerem Demirci',
    location: 'İstanbul - Nişantaşı',
    rating: 5,
    comment:
      'Koleksiyon mobilyalarımı paketlerken kullandıkları iklim kontrollü alanlar ve RFID izleme sistemi sayesinde içim çok rahatladı. Teslimat günü her şey planladığımız gibi ilerledi.',
  },
  {
    id: 'review-3',
    name: 'Defne Soydan',
    location: 'İstanbul - Etiler',
    rating: 5,
    comment:
      'Ofis yenilememizde tüm ekipmanlar montaj etiketleriyle depoya alındı, geri dönüşte tek bir vida bile kaybolmadı. Profesyonellikleri ve zaman yönetimleri mükemmel.',
  },
  {
    id: 'review-4',
    name: 'Murat Ertek',
    location: 'İstanbul - Moda',
    rating: 5,
    comment:
      'Kısa süreli yurtdışı görevimde evdeki beyaz eşyaları depoya aldılar. Sensör kontrollü alanlar ve sigorta kapsamı sayesinde dönüşte çalışmayan hiçbir cihaz olmadı.',
  },
  {
    id: 'review-5',
    name: 'Ebru Korkut',
    location: 'İstanbul - Caddebostan',
    rating: 5,
    comment:
      'Sanat eserlerim için özel kasalar hazırladılar, nem ve darbe raporlarını düzenli gönderdiler. Hizmet kalitesi beklentimin çok üzerindeydi.',
  },
  {
    id: 'review-6',
    name: 'Canan Yalçın',
    location: 'İstanbul - Suadiye',
    rating: 5,
    comment:
      'E-ticaret lojistiğimiz için koli depolama alanlarını kullanıyoruz. Paletli raf sistemi, anlık stok görüntüleme ve hızlı sevkiyat desteğiyle operasyonumuz çok hızlandı.',
  },
]

async function updateReviews() {
  for (const review of reviews) {
    await prisma.review.upsert({
      where: { id: review.id },
      update: {
        name: review.name,
        location: review.location,
        rating: review.rating,
        comment: review.comment,
        approved: true,
      },
      create: {
        ...review,
        approved: true,
      },
    })

    console.log(`✅ ${review.name} yorumu güncellendi`)
  }
}

updateReviews()
  .then(() => {
    console.log('🎉 Yorumlar güncellendi')
  })
  .catch((error) => {
    console.error('❌ Yorum güncelleme hatası:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
