import fs from 'fs'
import path from 'path'
import { prisma } from '../lib/db'

const SOURCE_DIR = '/Users/karakar/Downloads/hizmetbolgeleri'

const TURKISH_CHAR_MAP: Record<string, string> = {
  ç: 'c',
  Ç: 'c',
  ğ: 'g',
  Ğ: 'g',
  ı: 'i',
  İ: 'i',
  ö: 'o',
  Ö: 'o',
  ş: 's',
  Ş: 's',
  ü: 'u',
  Ü: 'u',
}

function slugify(input: string) {
  const normalized = input
    .split('')
    .map((char) => TURKISH_CHAR_MAP[char] ?? char)
    .join('')
    .toLowerCase()
  return normalized
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$|_/g, '')
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
}

function truncate(text: string, length = 240) {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

async function importAreas() {
  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((file) => file.toLowerCase().endsWith('.html'))
    .sort((a, b) => a.localeCompare(b))

  let order = 1

  for (const file of files) {
    const filePath = path.join(SOURCE_DIR, file)
    const html = fs.readFileSync(filePath, 'utf8')

    const articleMatch = html.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/i)
    const articleContent = articleMatch ? articleMatch[1].trim() : ''

    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i)
    const metaTitle = titleMatch ? titleMatch[1].trim() : undefined

    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i)
    const heading = h1Match ? stripHtml(h1Match[1]) : path.parse(file).name
    const city = heading.replace(/Eşya Depolama/gi, '').trim() || heading

    const metaDescMatch = html.match(/<strong>\s*Meta Açıklama:\s*<\/strong>\s*([^<]+)/i)
    const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : undefined

    const firstParagraphMatch = articleContent.match(/<p>([\s\S]*?)<\/p>/i)
    const rawDescription = firstParagraphMatch ? stripHtml(firstParagraphMatch[1]) : heading
    const description = truncate(rawDescription)

    const slug = slugify(`${city} esya depolama`)

    await prisma.serviceArea.upsert({
      where: { slug },
      update: {
        city,
        description,
        content: articleContent,
        metaTitle: metaTitle ?? `${city} Eşya Depolama` ,
        metaDescription: metaDescription ?? description,
        order,
        active: true,
      },
      create: {
        city,
        slug,
        description,
        content: articleContent,
        metaTitle: metaTitle ?? `${city} Eşya Depolama` ,
        metaDescription: metaDescription ?? description,
        image: null,
        active: true,
        order,
      },
    })

    console.log(`✅ ${city} bölgesi işlendi`)
    order += 1
  }
}

importAreas()
  .then(() => {
    console.log('🎉 Hizmet bölgeleri başarıyla içe aktarıldı')
  })
  .catch((error) => {
    console.error('❌ Hizmet bölgesi aktarım hatası:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
