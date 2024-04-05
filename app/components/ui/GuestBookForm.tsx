'use client'

import { addEntry } from '@/app/_actions'
import { useRef, useState } from 'react'

export const GuestBookForm = () => {
  const formRef = useRef(null)
  const [validationError, setValidationError] = useState(null)

  async function action(data) {
    const result = await addEntry(data)

    if (result?.error) {
      setValidationError(result.error)
    } else {
      setValidationError(null)
      //reset the form
      formRef?.current.reset()
    }
  }

  return (
    <form
      ref={formRef}
      className='flex max-w-sm flex-col gap-y-3 text-sm'
      action={action}
    >
      <input
        type='text'
        name='name'
        autoComplete='off'
        placeholder='Your name'
        className='rounded border bg-transparent px-3 py-1  dark:border-gray-200'
      />
      {validationError?.name && (
        <p className='text-sm text-red-400'>
          {validationError.name._errors.join(', ')}
        </p>
      )}

      <input
        type='text'
        autoComplete='off'
        name='message'
        placeholder='Your message'
        className='rounded border bg-transparent px-3 py-1 dark:border-gray-200'
      />
      {validationError?.message && (
        <p className='text-sm text-red-400'>
          {validationError.message._errors.join(', ')}
        </p>
      )}

      <button
        type='submit'
        // disabled={isMutating}
        className='disabled:opacity-0.5 rounded bg-black px-3 py-1 text-white dark:bg-white dark:text-black'
      >
        Add
      </button>
    </form>
  )
}
