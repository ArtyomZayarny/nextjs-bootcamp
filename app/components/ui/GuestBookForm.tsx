'use client'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export const GuestBookForm = () => {
  const router = useRouter()
  const [isFetching, setIsFetching] = useState(false)
  const [isPending, startTransition] = useTransition()
  const isMutating = isFetching || isPending

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const { name, message } = Object.fromEntries(formData)

    if (!name || !message) return
    setIsFetching(true)

    await fetch('/api/guestbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        message
      })
    })
    form.reset()
    setIsFetching(false)
    startTransition(() => {
      router.refresh()
    })
  }
  return (
    <form
      className='flex max-w-sm flex-col gap-y-3 text-sm'
      action='#'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='name'
        placeholder='Your name'
        className='rounded border bg-transparent px-3 py-1  dark:border-gray-200'
      />

      <input
        type='text'
        name='message'
        placeholder='Your message'
        className='rounded border bg-transparent px-3 py-1 dark:border-gray-200'
      />

      <button
        type='submit'
        disabled={isMutating}
        className='disabled:opacity-0.5 rounded bg-black px-3 py-1 text-white dark:bg-white dark:text-black'
      >
        Add
      </button>
    </form>
  )
}
