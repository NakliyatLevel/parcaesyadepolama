import { prisma } from '../lib/db'

type ServiceSeed = {
  name: string
  slug: string
  icon: string
  description: string
  content: string
  benefits: string
  metaTitle: string
  metaDescription: string
  order: number
  showOnHomepage: boolean
}

const services: ServiceSeed[] = [
  {
    name: 'Ev Eşyası Depolama',
    slug: 'ev-esyasi-depolama',
    icon: 'home',
    description:
      'Taşınma, tadilat veya uzun süreli seyahat süreçlerinde evinizdeki tüm eşyaları iklim kontrollü alanlarda koruyan depolama hizmeti.',
    content: `<p>Ev eşyası depolama hizmetimiz, taşınma öncesi belirsizlik yaşayan aileler için iklim kontrollü, 7/24 izlenen depo alanları sunar. Uzman ekiplerimiz, mobilyalarınızı sökme, paketleme ve barkodlama sürecinde aynı kalite protokollerini uygular; böylece her parça hangi raf veya konteynerde olduğunu bilerek korunur. Nem, ısı ve darbe sensörleri, sistemde şeffaf raporlar üretir ve gerektiğinde müşteriye anlık bildirim gönderir. Depo sözleşmesi boyunca güvenlik kameraları, sigortalı koruma ve düzenli haşere kontrolleriyle evinizdeki düzen depoya taşınır.</p>
<p>Operasyon ekibimiz, teslim aldığımız her modüler kutuyu fotoğraflar, kodlar ve planlanan tahliye tarihine göre dizilim yapar. Bu yaklaşım, eşyalarınızı zamandan bağımsız olarak aynı kondisyonla geri almanızı sağlar. Talebe göre haftalık durum raporu paylaşır, erişim randevularını dijital panelden onaylar, ileri tarihli teslimatlarda araç planlamasını otomatikleştiririz. Aşağıdaki tablo, tipik depolama paketlerimizin kapsamını özetler.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>Kriter</th>
      <th>Detay</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alan Türü</td>
      <td>Modüler konteyner veya raflı oda</td>
    </tr>
    <tr>
      <td>Önerilen Süre</td>
      <td>1 - 24 ay arası sözleşmeler</td>
    </tr>
    <tr>
      <td>İzleme</td>
      <td>Isı / nem sensörü ve kamera kaydı</td>
    </tr>
    <tr>
      <td>Sigorta Limiti</td>
      <td>250.000 TL’ye kadar esnek poliçe</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>Her teslimat öncesi detaylı envanter raporu paylaşılır.</li>
  <li>Nem bariyerli ambalaj, ahşap mobilyalar için standarttır.</li>
  <li>Talep halinde uzman montaj ekibi geri kurulum yapar.</li>
</ul>`,
    benefits: 'İklim kontrollü depolar\nSigortalı teslim alma\nDijital stok raporu\n7/24 kamera ve sensör takibi',
    metaTitle: 'Ev Eşyası Depolama | Parça Eşya Depolama',
    metaDescription:
      'Ev eşyası depolama hizmeti; paketleme, sigorta, iklim kontrollü alan ve haftalık raporlarla eşyalarınızı güvenle saklar.',
    order: 1,
    showOnHomepage: true,
  },
  {
    name: 'Öğrenci Eşya Depolama',
    slug: 'ogrenci-esya-depolama',
    icon: 'graduation-cap',
    description:
      'Dönemsel şehir değişiklikleri yaşayan öğrencilerin mini buzdolabı, kitap, kıyafet ve teknolojik eşyalarını güvenli şekilde saklayan çözüm.',
    content: `<p>Öğrenci eşyası depolama modeli, sömestr aralarında şehir değiştiren gençlerin minimalist ihtiyaçlarını düşünerek tasarlandı. Kredi yurtlarındaki dolap içeriğinden stüdyo eşya setlerine kadar her parça, UV sterilizasyonlu paketleme alanında temizlenip standart kolilere yerleştirilir. Sistemimiz, koli başına QR kod üretir ve öğrenciler uygulama üzerinden hangi kutuda hangi ders notlarının bulunduğunu takip edebilir. 7/24 güvenlik, akıllı giriş ve bütçe dostu mikro alan paketleri sayesinde, dönem aralarında yeni ev arama stresini azaltıyoruz.</p>
<p>Her teslim aldığımız öğrenci seti, yağmur ve taşıma sırasında zarar görmemesi için çift kat koruma ile mühürlenir. Uçuş bileti veya otobüs saati fark etmeksizin, planlanan teslim günü öncesinde otomatik hatırlatma gönderir, ihtiyaç halinde parçalı teslimata izin veririz. Aşağıdaki tablo ve liste, programın nasıl işlediğini gösterir.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>Paket</th>
      <th>Kapsam</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mikro</td>
      <td>4 koli + 1 valiz için 3 ay saklama</td>
    </tr>
    <tr>
      <td>Standart</td>
      <td>8 koli + mini buzdolabı için 6 ay saklama</td>
    </tr>
    <tr>
      <td>Premium</td>
      <td>12 koli + bisiklet için 9 ay saklama</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>Koliler ücretsiz olarak kampüs adresinden teslim alınır.</li>
  <li>Öğrenci paneli üzerinden ödeme ve erişim yönetilir.</li>
  <li>Saklama süresi uzatımı için tek tıkla sözleşme yenilenir.</li>
</ul>`,
    benefits: 'QR kodlu koli takibi\nEsnek dönemsel sözleşme\nUygun fiyatlı mikro paketler\nÜcretsiz kampüs teslim alma',
    metaTitle: 'Öğrenci Eşya Depolama | Parça Eşya Depolama',
    metaDescription:
      'Öğrenciler için dönemsel eşya depolama; koli kodlama, online panel ve uygun fiyatlı mikro paketlerle güvenli saklama sağlar.',
    order: 2,
    showOnHomepage: true,
  },
  {
    name: 'Beyaz Eşya Depolama',
    slug: 'beyaz-esya-depolama',
    icon: 'snowflake',
    description:
      'Buzdolabı, çamaşır makinesi ve ankastre setler için enerji kesintili, darbe sensörlü güvenli depolama süreçleri.',
    content: `<p>Beyaz eşya depolama sürecimiz, hassas motor aksamına sahip cihazların üretici tavsiyelerine uygun şekilde saklanmasını hedefler. Her cihaz, teslim alınmadan önce fonksiyon testi ve yüzey fotoğrafı ile kayıt altına alınır, ardından drenaj kanalları boşaltılır ve koruyucu köpük bloklarla sabitlenir. Depo içinde enerji bağlantısı yapılmadığından, ekiplerimiz periyodik olarak kapak contalarını kontrol eder, nem yönetimini sağlayan aktif karbon filtrelerini yeniler ve dondurucu yüzeylerin paslanmaması için mikro hava sirkülasyonu uygular.</p>
<p>Uzun süreli saklamalarda, cihazların yeniden devreye alınması sırasında ihtiyaç duyulan bakım listesi müşteriye sunulur. Talep halinde teslimat öncesi iç temizlik ve kireç çözme işlemleri yapılır, böylece yeni adresinizde fişi takınca hazır çalışma konforu sağlanır. Teknik tablo ve avantaj listesi aşağıdadır.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>Cihaz</th>
      <th>Hazırlık</th>
      <th>Kontrol Sıklığı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Buzdolabı</td>
      <td>Gaz devresi sabitleme, iç yüzey kurutma</td>
      <td>30 günde bir</td>
    </tr>
    <tr>
      <td>Çamaşır Makinesi</td>
      <td>Tambur kilitleme, hortum sökme</td>
      <td>45 günde bir</td>
    </tr>
    <tr>
      <td>Bulaşık Makinesi</td>
      <td>Filtre temizliği, tuz haznesi boşaltma</td>
      <td>45 günde bir</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>Motorlu cihazlar için sigorta kapsamı genişletilir.</li>
  <li>Darbe uyarı etiketleri ile taşıma sırasında kayıt tutulur.</li>
  <li>Yeni adreste kurulum desteği opsiyoneldir.</li>
</ul>`,
    benefits: 'Darbe sensörlü saklama\nÜretici prosedürlerine uygun hazırlık\nPeriyodik bakım raporu\nKurulum desteği',
    metaTitle: 'Beyaz Eşya Depolama | Parça Eşya Depolama',
    metaDescription:
      'Beyaz eşya depolama; drenaj boşaltma, darbe sensörleri ve bakım raporlarıyla motorlu cihazlarınızı güvenle saklar.',
    order: 3,
    showOnHomepage: true,
  },
  {
    name: 'Parça Eşya Depolama',
    slug: 'parca-esya-depolama',
    icon: 'package',
    description:
      'Az adetli mobilya, hobi ekipmanı veya sanat eserleri için metreküp bazlı fiyatlanan pratik depolama modeli.',
    content: `<p>Parça eşya depolama hizmeti, az hacimli gönderiler için optimum maliyet sunar. Tek bir koltuk takımı, piyano, spor ekipmanı veya sanat eseri gibi özel parçaları, bağımsız modüller yerine kişiye özel kasalarda tutarız. RFID etiketleme sistemi sayesinde, depoya giriş yapan her eşya saniyeler içinde kaydedilir ve müşteriye dijital teslim fişi gönderilir. Nakliye sırasında titreşim azaltıcı hava süspansiyonlu araçlar kullanır, teslimattan önce eşyayı mikro fiber örtülerle kaplarız.</p>
<p>Depoda bulunduğu süre boyunca eşyanızın ağırlık merkezi, sıcaklık ve nem değişimleri takip edilir; sınır değerler aşıldığında operasyon ekibi proaktif aksiyon planı başlatır. Listemizde, müşterilerimizin en sık talep ettiği avantajları görebilirsiniz.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>Paket Tipi</th>
      <th>Hacim</th>
      <th>Ücretlendirme</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mini Kasalı</td>
      <td>0.5 - 3 m³</td>
      <td>Metreküp başına aylık</td>
    </tr>
    <tr>
      <td>Özel Kasa</td>
      <td>3 - 8 m³</td>
      <td>Kasalı sabit fiyat</td>
    </tr>
    <tr>
      <td>Galeri Koruma</td>
      <td>Sanat eserleri</td>
      <td>Sıcaklık kontrollü paket</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>RFID ve fotoğraflı envanter paylaşımı</li>
  <li>Minimum 1 ay, maksimum 36 ay esnek sözleşme</li>
  <li>Proaktif alarm bildirim sistemi</li>
</ul>`,
    benefits: 'Metreküp bazlı fiyat\nRFID izleme\nTitreşim kontrollü taşıma\nEsnek sözleşme',
    metaTitle: 'Parça Eşya Depolama Hizmeti',
    metaDescription:
      'Parça eşya depolama; RFID izleme, titreşim korumalı taşıma ve metreküp bazlı fiyatlandırma ile özel parçalarınızı saklar.',
    order: 4,
    showOnHomepage: true,
  },
  {
    name: 'Ofis Eşyası Depolama',
    slug: 'ofis-esyasi-depolama',
    icon: 'briefcase',
    description:
      'Kurumsal taşınma, renovasyon veya downsizing süreçlerinde ofis mobilyaları ve IT ekipmanlarını proje yönetimiyle saklarız.',
    content: `<p>Ofis eşyası depolama çözümümüz, şirketlerin merkez taşınması ya da kat yenilemesi sırasında operasyonu durdurmadan ilerlemesine yardım eder. Modüler raf sistemlerimiz, çalışma istasyonlarını numaralı şekilde saklar, IT ekipmanları için anti-statik kabinler kullanırız. Tüm süreç ERP entegrasyonu ile yürütülür; hangi departmanın hangi ekipmanı depoda tuttuğu ve ne zaman geri alacağı proje panelinde görünür. Böylece CFO, lojistik ve İK ekipleri aynı veri seti üzerinden planlama yapar.</p>
<p>Çok lokasyonlu firmalar için, talep edilen şehirde buffer depo açabilir, toplu teslimatları vardiya sırasında tamamlarız. Ayrıca, masa sandalyelerin tekrar kurulum sırasını içeren montaj dokümanlarını dijital kasada saklarız. Tablo ve liste, hizmet kapsamını özetler.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>Kapsam</th>
      <th>Hizmet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Envanter</td>
      <td>ERP entegrasyonlu barkodlama</td>
    </tr>
    <tr>
      <td>IT Koruması</td>
      <td>Anti-statik kabin, UPS destekli izleme</td>
    </tr>
    <tr>
      <td>Kurulum</td>
      <td>Planlı montaj ekipleri</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>Şirket içi onay süreçleri için dijital rapor akışı</li>
  <li>Çok lokasyonlu teslimat planlama</li>
  <li>Montaj talimatlarının arşivlenmesi</li>
</ul>`,
    benefits: 'ERP uyumlu envanter\nIT için anti-statik koruma\nÇok lokasyonlu operasyon\nProfesyonel kurulum ekipleri',
    metaTitle: 'Ofis Eşyası Depolama | Kurumsal Çözüm',
    metaDescription:
      'Ofis eşyası depolama; ERP tabanlı envanter, anti-statik IT kabinleri ve planlı kurulum ekipleriyle kurumsal projeleri yönetir.',
    order: 5,
    showOnHomepage: true,
  },
  {
    name: 'Büro Depolama',
    slug: 'buro-depolama',
    icon: 'building',
    description:
      'Bölgesel temsilcilik ve butik ajansların küçük ölçekli büro ekipmanlarını zamana bağlı olarak saklayan esnek çözüm.',
    content: `<p>Büro depolama hizmeti, kasaba veya bölge temsilciliklerinde görev değişimi olduğunda ortaya çıkan kısa süreli alan ihtiyacını çözer. Sekreterya masaları, ekranlar, resepsiyon aksesuarları ve promosyon materyalleri kategorilere ayrılarak saklanır; böylece yeni atanan ekipler istedikleri kombinasyonu hızlıca seçebilir. Depoda kullanılan katlanabilir raflar, küçük partileri verimli saklar, haftalık düzen raporlarımız ekipman rotasyonunu görünür kılar.</p>
<p>Butik ajanslar için sezonluk kampanya materyalleri, numune stantları ve demo kitleri aynı alan içinde etiketlenir. Randevu bazlı erişim sayesinde, şehir dışından gelen ekipler malzemelerini saatler içinde teslim alır. Kısa bir tablo ve liste ile süreç şeffaflaştırılır.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>Öğe Türü</th>
      <th>Paketleme</th>
      <th>Erişim</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mobilya</td>
      <td>Keçe kaplama + shrink</td>
      <td>48 saat ön bilgilendirme</td>
    </tr>
    <tr>
      <td>Promosyon</td>
      <td>Şeffaf kutu + QR kod</td>
      <td>24 saat ön bilgilendirme</td>
    </tr>
    <tr>
      <td>Elektronik</td>
      <td>Anti-statik çanta</td>
      <td>Teknik personel eşliğinde</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>Sezonluk kampanya stok takibi</li>
  <li>Randevuya bağlı güvenli erişim</li>
  <li>Şehir dışı ekipler için ekspres teslimat</li>
</ul>`,
    benefits: 'Sezonluk stok yönetimi\nRandevulu erişim\nHızlı bölgesel teslimat\nŞeffaf raporlama',
    metaTitle: 'Büro Depolama Hizmeti',
    metaDescription:
      'Büro depolama; promosyon stokları ve kompakt mobilyalar için randevulu erişim ve sezonluk raporlama sunar.',
    order: 6,
    showOnHomepage: true,
  },
  {
    name: 'Arşiv Depolama',
    slug: 'arsiv-depolama',
    icon: 'archive',
    description:
      'Fiziksel arşiv kutularını mevzuata uygun sıcaklıkta saklayıp dijital indeksleme ile erişilebilir kılan profesyonel hizmet.',
    content: `<p>Arşiv depolama çözümümüzde, kurumların yasal saklama sürelerini doldurması için ihtiyaç duyduğu güvenlik ve erişim standartlarını sağlıyoruz. Belgeler, yangına dayanıklı raf sistemlerinde sınıflandırılır, her kutuya RFID etiket yerleştirilir ve indeks verisi müşterinin DMS sistemiyle senkronize edilir. Depo içi nem 45-55% aralığında tutulur, kağıt deformasyonunu engellemek için hava dolaşımı HEPA filtrelerle desteklenir.</p>
<p>Talep edilen dosyalar, SLA’ye göre üç hizmet seviyesinde (aynı gün, ertesi gün, planlı toplu) kapınıza ulaşır. İmha tarihi yaklaşan kutular için otomatik uyarı üretir, onay sonrası sertifikalı imha sürecini biz yönetiriz. Tablo ve liste süreci detaylandırır.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>SLA</th>
      <th>Termin</th>
      <th>Örnek Kullanım</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Express</td>
      <td>Aynı gün</td>
      <td>Mahkeme dosyaları</td>
    </tr>
    <tr>
      <td>Planlı</td>
      <td>1 iş günü</td>
      <td>İç denetim</td>
    </tr>
    <tr>
      <td>Toplu</td>
      <td>Haftalık rota</td>
      <td>Yıl sonu arşiv</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>RFID ve DMS entegrasyonu</li>
  <li>Yangına dayanıklı raf sistemleri</li>
  <li>İmha sertifikası yönetimi</li>
</ul>`,
    benefits: 'RFID indeksleme\nSLA bazlı erişim\nSertifikalı imha\nYasal uyumlu saklama',
    metaTitle: 'Arşiv Depolama | Kurumsal Çözüm',
    metaDescription:
      'Arşiv depolama; RFID indeksleme, HEPA filtreli ortam ve sertifikalı imha seçenekleriyle mevzuata uygun saklama sağlar.',
    order: 7,
    showOnHomepage: false,
  },
  {
    name: 'Evrak Depolama',
    slug: 'evrak-depolama',
    icon: 'files',
    description:
      'Güncel sözleşme, bordro ve operasyon evraklarını hızlı erişim SLA’leriyle saklayıp tarama hizmeti sunar.',
    content: `<p>Evrak depolama hizmeti, aktif operasyon belgelerinin güvenli alanlarda tutulurken aynı zamanda saatler içinde erişilebilir olmasını amaçlar. Gelen kutular, içerik tipine göre ayrılır ve yüksek çözünürlüklü tarama ile dijital kopyaları saklanır. Böylece fiziksel dosya depoda kalırken, uzaktan çalışan ekipler PDF kopyasına ulaşabilir. İki adımlı erişim onayı ile kim hangi evrağı istediğini logluyoruz.</p>
<p>Sigorta poliçeleri, kira sözleşmeleri veya insan kaynakları dosyaları için özel kilitli dolaplar kullanılır; dolap anahtarları biyometrik kasada tutulur. Teslim talepleri saat 15:00’a kadar iletilirse aynı gün kurye çıkar, daha sonra gelen talepler ertesi sabah planlanır. Tablo ve liste, SLA detayını gösterir.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>Belge Tipi</th>
      <th>Dijital Kopya</th>
      <th>Fiziksel Teslim</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sözleşme</td>
      <td>2 saat içinde</td>
      <td>Aynı gün kurye</td>
    </tr>
    <tr>
      <td>İK Dosyası</td>
      <td>4 saat içinde</td>
      <td>Ertesi gün</td>
    </tr>
    <tr>
      <td>Finans Evrakı</td>
      <td>1 saat içinde</td>
      <td>Öncelikli kurye</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>Yüksek çözünürlüklü tarama ve dijital arşiv</li>
  <li>Biyometrik kasa yönetimi</li>
  <li>Zaman damgalı erişim kayıtları</li>
</ul>`,
    benefits: 'Hızlı tarama hizmeti\nBiyometrik güvenlik\nSLA bazlı kurye\nDetaylı erişim logları',
    metaTitle: 'Evrak Depolama Hizmeti',
    metaDescription:
      'Evrak depolama; tarama, biyometrik kasa ve SLA bazlı kurye süreçleriyle sözleşme ve bordroları güvenle saklar.',
    order: 8,
    showOnHomepage: false,
  },
  {
    name: 'Koli Depolama',
    slug: 'koli-depolama',
    icon: 'box',
    description:
      'Hazırlanmış kolilerinizi kodlayıp paletli raflarda saklar, gerektiğinde tek tek adreslere sevk ederiz.',
    content: `<p>Koli depolama hizmetimiz, e-ticaret satıcıları, butik markalar ve evini taşırken hazır kolileriyle beklemek isteyen bireyler için tasarlandı. Depoya gelen her koli tartılır, x-ray taramasından geçer ve üzerinde bulunan içerik listesi doğrulanır. Daha sonra paletli raflarda boy/kategori bazlı dizilir. Mobil uygulamamız üzerinden hangi kolinin nerede olduğuna bakabilir, teslim ya da yoklama talebi açabilirsiniz.</p>
<p>Kısa süreli saklamalarda bile, kolilerin ezilmemesi için aralarına darbe emici pedler yerleştiriyoruz. Talep ettiğinizde belirli kolileri farklı adreslere sevk eder, kalanları depoda tutmaya devam ederiz. Hizmet kapsamı aşağıda.</p>
<table class="service-table">
  <thead>
    <tr>
      <th>İşlem</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Giriş Kontrolü</td>
      <td>Tartım, x-ray ve içerik doğrulama</td>
    </tr>
    <tr>
      <td>Depolama</td>
      <td>Palet raf + darbe pedleri</td>
    </tr>
    <tr>
      <td>Sevk</td>
      <td>Koli bazlı kurye veya kamyonet</td>
    </tr>
  </tbody>
</table>
<ul class="service-list">
  <li>Mobil uygulama ile koli konum takibi</li>
  <li>Adrese göre parçalı sevkiyat</li>
  <li>Minimum 10 koli ile hızlı teslim alma</li>
</ul>`,
    benefits: 'Paletli raf sistemi\nMobil konum takibi\nParçalı sevkiyat\nDarbe pedli koruma',
    metaTitle: 'Koli Depolama Hizmeti',
    metaDescription:
      'Koli depolama; tartım, x-ray doğrulama, paletli raflar ve mobil takip ile kolilerinizi güvenle saklar.',
    order: 9,
    showOnHomepage: false,
  },
]

async function seedServices() {
  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        name: service.name,
        description: service.description,
        content: service.content,
        icon: service.icon,
        benefits: service.benefits,
        metaTitle: service.metaTitle,
        metaDescription: service.metaDescription,
        order: service.order,
        showOnHomepage: service.showOnHomepage,
        active: true,
      },
      create: {
        ...service,
        active: true,
      },
    })

    console.log(`✅ ${service.name} güncellendi`)
  }
}

seedServices()
  .then(() => {
    console.log('🎉 Hizmetler başarıyla seed edildi')
  })
  .catch((error) => {
    console.error('❌ Hizmet seed hatası:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
