import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { sendHeroQuickQuoteEmail } from '@/lib/email/send'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, phone, fromCity, toCity, roomType, priceMin, priceMax } = body

    if (!fullName?.trim() || !phone?.trim() || !roomType?.trim()) {
      return NextResponse.json({ error: 'Lütfen tüm alanları doldurun.' }, { status: 400 })
    }

    const sanitizedFrom = fromCity?.trim() || 'Belirtilmedi'
    const sanitizedTo = toCity?.trim() || 'Belirtilmedi'
    const sanitizedRoomType = roomType.trim()

    const rooms =
      Number.parseInt(sanitizedRoomType, 10) || Number.parseInt(sanitizedRoomType.split('+')[0], 10) || 1

    const quote = await prisma.quote.create({
      data: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: body.email?.trim() || 'hero-form@levelnakliyat.com',
        preferredDate: null,
        fromAddress: sanitizedFrom,
        fromFloor: 0,
        fromElevator: false,
        toAddress: sanitizedTo,
        toFloor: 0,
        toElevator: false,
        distance: null,
        propertyType: 'quick_form',
        rooms,
        furnitureCount: 0,
        hasFragileItems: false,
        hasPiano: false,
        hasAntiques: false,
        specialItems: null,
        needsPacking: false,
        needsDisassembly: false,
        needsStorage: false,
        needsInsurance: false,
        additionalNotes: null,
      },
    })

    try {
      await sendHeroQuickQuoteEmail({
        fullName: fullName.trim(),
        phone: phone.trim(),
        fromCity: sanitizedFrom,
        toCity: sanitizedTo,
        roomType: sanitizedRoomType,
        priceMin,
        priceMax,
      })
    } catch (emailError) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Hero quote email failed:', emailError)
      }
    }

    return NextResponse.json({ success: true, quoteId: quote.id })
  } catch (error) {
    return NextResponse.json({ error: 'Talebiniz alınamadı.' }, { status: 500 })
  }
}

