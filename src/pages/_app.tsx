// src/pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LessonProvider } from '@/context/LessonContext'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LessonProvider>
      <Navbar />
      <Component {...pageProps} />
    </LessonProvider>
  )
}

