import { prisma } from '../lib/db'

const features = [
  {
    id: 'feature-1',
    title: 'İklim Kontrollü Depo Altyapısı',
    description:
      'Isı ve nem sensörleriyle sürekli izlenen depolarımız, ahşap mobilyadan elektronik ekipmana kadar tüm eşyaların kondisyonunu korur. Her raf adası kendi mikro iklimine sahiptir ve sınır değerleri aşıldığında ekiplerimiz anında müdahale eder.',
    icon: 'thermometer',
    order: 1,
  },
  {
    id: 'feature-2',
    title: 'RFID Tabanlı Envanter İzleme',
    description:
      'Teslim aldığımız her paket, RFID etiketi ve fotoğraflı kayıtla sisteme girilir. Müşteriler, yönetim paneli üzerinden hangi kutunun hangi rafta olduğunu anlık görebilir, erişim taleplerini dijital olarak onaylayabilir.',
    icon: 'scan',
    order: 2,
  },
  {
    id: 'feature-3',
    title: 'Sigortalı Teslim Alma Prosedürü',
    description:
      'Adresinizde yapılan paketleme ve taşıma işlemleri, genişletilmiş depo sigortasıyla desteklenir. Barkodlanan eşyalarınız, sevk öncesi durum raporuna işlenir ve poliçe limitleri elektronik ortamda arşivlenir.',
    icon: 'shield-check',
    order: 3,
  },
  {
    id: 'feature-4',
    title: 'Uzman Paketleme ve Montaj Ekibi',
    description:
      'Mobil ekiplerimiz, hassas yüzeyli mobilyalar, beyaz eşyalar ve elektronik setler için üretici tavsiyelerine uygun paketleme materyalleri kullanır. Teslimat günü kurulum ve demontaj desteği alabilirsiniz.',
    icon: 'package',
    order: 4,
  },
  {
    id: 'feature-5',
    title: '7/24 Güvenlik ve Sensör Takibi',
    description:
      'Depolarımız hareket algılayıcılar, darbe sensörleri ve yüksek çözünürlüklü kameralarla izlenir. Güvenlik merkezimiz, olağan dışı titreşim veya giriş denemelerinde anında alarm üretir.',
    icon: 'shield',
    order: 5,
  },
  {
    id: 'feature-6',
    title: 'Şeffaf Raporlama ve Müşteri Paneli',
    description:
      'Operasyon panelimiz üzerinden stok özetleri, erişim logları ve fatura detaylarını izleyebilirsiniz. Haftalık raporlar e-posta ile gönderilir, özel ihtiyaçlar için PDF formatında detaylı çıktılar hazırlanır.',
    icon: 'file-text',
    order: 6,
  },
]

async function updateFeatures() {
  for (const feature of features) {
    await prisma.feature.upsert({
      where: { id: feature.id },
      update: {
        title: feature.title,
        description: feature.description,
        icon: feature.icon,
        order: feature.order,
        active: true,
      },
      create: {
        ...feature,
        active: true,
      },
    })

    console.log(`✅ ${feature.title} güncellendi`)
  }
}

updateFeatures()
  .then(() => {
    console.log('🎉 Özellikler güncellendi')
  })
  .catch((error) => {
    console.error('❌ Özellik güncelleme hatası:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
