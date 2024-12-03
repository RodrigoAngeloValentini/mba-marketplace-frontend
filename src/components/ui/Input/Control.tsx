import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Control(props: ControlProps) {
  return (
    <input
      {...props}
      className={twMerge(
        'w-full pt-2 pb-2 border-b border-gray-300 bg-transparent placeholder-gray-200 focus:outline-none focus:border-gray-300 text-orange-base',
        props.className,
      )}
    />
  )
}