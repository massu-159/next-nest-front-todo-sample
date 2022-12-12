import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export const Layout = ({children, title = 'Next.js'}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}
