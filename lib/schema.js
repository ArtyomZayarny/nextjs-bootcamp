import { z } from 'zod'

export const guestEntrySchema = z.object({
  name: z.string().min(1, { message: 'Name is Required' }),
  message: z.string().min(1, { message: 'Message is Required' })
})
