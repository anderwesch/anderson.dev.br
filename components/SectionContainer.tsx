import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-20 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  )
}
