'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  href: string
  children: React.ReactNode
}

function NavLink({ href, ...rest }: Props) {
  const pathName = usePathname()

  const isActive = href === pathName

  return (
    <Link href={href} {...rest} className={isActive ? 'text-cyan-500' : ''} />
  )
}

export default NavLink
