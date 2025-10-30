'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'

export default function Provider(props: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </>
  )
}
