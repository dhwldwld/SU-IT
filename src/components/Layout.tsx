import React, { useState, ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [CreateModal, setCreateModal] = useState<boolean>(false);
  const openModal = () => {setCreateModal(!CreateModal)};
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <div>
            <Link href="/">
              <a>LOGO</a>
            </Link>
          </div>
          <div>
            <Link href="/#Introduce">
              <a>Introduce</a>
            </Link>
            <Link href="/#Apply">
              <a>Apply</a>
            </Link>
            <Link href="/#Q&A">
              <a>Q&A</a>
            </Link>
            <a onClick={() => openModal()}>Login</a>
          </div>
          {/* | <a href="/api/users">Users API</a> */}
        </nav>
      </header>
      {children}
    </div>
  )
}
export default Layout