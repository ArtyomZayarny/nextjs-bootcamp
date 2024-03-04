import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'

function Header() {
  return (
    <header className='bg-gray-100 p-4'>
      <nav className='container'>
        <ul className='flex gap-3'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <ContactButton />
        </ul>
      </nav>
    </header>
  )
}

export default Header
