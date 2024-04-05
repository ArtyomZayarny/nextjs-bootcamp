import { getGuestBookEntries } from '@/lib/mongo/guestbook'
import { GuestBookForm } from '../components/ui/GuestBookForm'

export const dynamic = 'force-dynamic'

async function getData() {
  const { entries, error } = await getGuestBookEntries()
  if (!entries || error) throw new Error('Failed to fetch entries')
  return entries
}
async function getMetadata() {
  const { entries, error } = await getGuestBookEntries()
}

const Page = async () => {
  const entries = await getData()
  const metadata = await getMetadata()
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-8 text-3xl font-bold'>Guestbook</h1>
        <GuestBookForm />
        <ul className='mt-8 flex flex-col gap-y-2'>
          {entries.map((entry: any) => (
            <li key={entry._id} className='flex gap-x-3'>
              <span className='text-gray-500'>{entry.name}</span>
              <span>{entry.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
