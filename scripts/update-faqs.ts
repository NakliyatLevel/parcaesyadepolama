import { prisma } from '../lib/db'

const faqs = [
  {
    id: 'faq-1',
    question: 'Depolama süreci nasıl işliyor ve hangi aşamalardan geçiyor?',
    answer:
      'Adresinizde ücretsiz keşif yapıyor, eşyaları kategori bazında paketleyip RFID etiketliyoruz. Araçtan depoya kadar her hareket sensörlerle kayıt altına alınırken, müşteri panelinden teslim edilen koli veya mobilyaların durumunu anlık izleyebiliyorsunuz.',
    category: 'süreç',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Depo alanlarında nem ve ısı kontrolü nasıl sağlanıyor?',
    answer:
      'İklim kontrollü modüllerde 45-55% nem ve 18-24°C sıcaklık aralığını otomasyonla koruyoruz. Sensörler limit aştığında alarm üretiyor ve ekiplerimiz durumu raporlayarak gerekli müdahaleyi yapıyor.',
    category: 'güvenlik',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Parça eşyalarımı geri almak istediğimde süreç ne kadar sürer?',
    answer:
      'Panelinizden randevu oluşturduğunuzda, RFID kodu üzerinden eşyanız bulunur ve 24 saat içinde teslimata hazırlanır. İsterseniz depodan teslim alabilir ya da adresinize kurulum hizmetiyle gönderilmesini isteyebilirsiniz.',
    category: 'erişim',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Sigorta kapsamı ve teminat limitleri nelerdir?',
    answer:
      'Teslim aldığımız her parça genişletilmiş depo sigortası altına girer. Standart poliçede 250.000 TL’ye kadar teminat sunuyor, yüksek değerli sanat eseri veya elektronikler için ek teminat seçenekleri sağlıyoruz.',
    category: 'sigorta',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'Ödeme ve sözleşme seçenekleri nasıl ilerliyor?',
    answer:
      'Aylık, üç aylık ya da yıllık sözleşme yapabilirsiniz. Ödemeyi kredi kartı, otomatik tahsilat veya havale ile alıyoruz. Sözleşme bitiş tarihinde otomatik yenileme seçeneğiyle depo süresini uzatabilirsiniz.',
    category: 'fiyat',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'Kurumsal müşteriler için özel depolama avantajları neler?',
    answer:
      'Ofis ve showroom boşaltmalarında ERP entegrasyonlu envanter takibi, çok lokasyonlu teslimat planı ve montaj ekipleri sağlıyoruz. Ayrıca tablo bazlı raporları finans ve operasyon ekiplerine ayrı ayrı iletebiliyoruz.',
    category: 'kurumsal',
    order: 6,
  },
]

async function updateFaqs() {
  for (const faq of faqs) {
    await prisma.fAQ.upsert({
      where: { id: faq.id },
      update: {
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
        order: faq.order,
        active: true,
      },
      create: {
        ...faq,
        active: true,
      },
    })

    console.log(`✅ ${faq.question} güncellendi`)
  }
}

updateFaqs()
  .then(() => {
    console.log('🎉 SSS güncellendi')
  })
  .catch((error) => {
    console.error('❌ SSS güncelleme hatası:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
