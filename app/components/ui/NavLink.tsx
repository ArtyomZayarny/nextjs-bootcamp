'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({ href, ...rest }) {
  const pathName = usePathname()

  const isActive = href === pathName

  return (
    <Link href={href} {...rest} className={isActive ? 'text-cyan-500' : ''} />
  )
}

export default NavLink
