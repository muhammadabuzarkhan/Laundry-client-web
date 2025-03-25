import React from 'react'
import Header from './header'
import Footer from './Footer'

function ClientLayout({header,children,footer=true})  {
  return (
    <>
    <Header header = {header} />
    {children}
   {footer && <Footer/>}
    </>
  )
}

export default ClientLayout