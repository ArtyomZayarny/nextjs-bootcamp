import { getGuestBookEntries } from '@/lib/mongo/guestbook'

async function getData() {
  const { entries, error } = await getGuestBookEntries()
  if (!entries || error) throw new Error('Failed to fetch entries')
  return entries
}

const Page = async () => {
  //fetch previous entries

  const entries = await getData()
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Guestbook</h1>
        <ul className='mt-8 flex flex-col gap-y-2'>
          {entries.map(entry => (
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
