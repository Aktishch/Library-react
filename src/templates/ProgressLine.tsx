import React, { useState, useEffect } from 'react'
import { scrolledPage } from '../functions/scrolled-page'

export const ProgressLine = (): React.JSX.Element => {
  const [progress, setProgress] = useState('')

  const onScrollHandler = (): void => {
    const width: string = `${Math.floor(
      (scrolledPage().top / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100
    )}%`

    setProgress(width)
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('scroll', onScrollHandler as EventListener)

    return (): void => document.removeEventListener('scroll', onScrollHandler as EventListener)
  }, [])

  return <div className="fixed inset-0 hidden w-0 h-1 lg:block z-4 bg-primary duration-2" style={{ width: progress }} />
}
