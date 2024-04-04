import clientPromise from '@/lib/mongo/client'

let client
let db
let guestbook

async function init() {
  if (db) return

  try {
    client = await clientPromise
    db = client.db()
    guestbook = db.collection('guestbook')
  } catch (err) {
    throw new Error('Failed to connect to the database')
  }
}

;(async () => {
  await init()
})()

export const getGuestBookEntries = async () => {
  try {
    if (!guestbook) await init()
    console.log('Fetching entries....!!')
    const entries = await guestbook
      .find({})
      .map(entry => ({ ...entry, _id: entry._id.toString() }))
      .toArray()
    return { entries }
  } catch (error) {
    return { error: 'Failed to fetch guestbook!' }
  }
}

export const createGuestbookEntry = async ({ name, message }) => {
  try {
    if (!guestbook) await init()
    return await guestbook.insertOne({ name, message, updatedAt: new Date() })
  } catch (error) {
    return { error: 'Failed to create entry' }
  }
}
