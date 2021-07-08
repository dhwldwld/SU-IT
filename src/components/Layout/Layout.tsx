import React, { useState, ReactNode } from 'react'
import Head from 'next/head'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar openModal={openModal}/>
      {children}
      <Footer />
    </div>
  )
}
export default Layout