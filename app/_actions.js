'use server'

import { createGuestbookEntry } from '@/lib/mongo/guestbook'
import { revalidatePath } from 'next/cache'
import { guestEntrySchema } from '@/lib/schema'

export async function addEntry(data) {
  const { name, message } = Object.fromEntries(data)

  //if (!name || !message) throw new Error('Invalid input')
  // validation
  const { error: zodError } = guestEntrySchema.safeParse({ name, message })
  if (zodError) return { error: zodError.format() }

  const { error } = await createGuestbookEntry({ name, message })
  if (error) throw new Error(error)

  revalidatePath('/guestbook')
}
