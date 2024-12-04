import { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Root(props: RootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full items-center gap-2 border-b border-gray-300',
        props.className,
      )}
    />
  )
}