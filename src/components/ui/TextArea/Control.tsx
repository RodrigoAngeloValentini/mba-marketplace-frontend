import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ControlProps extends ComponentProps<'textarea'> {}

export function Control(props: ControlProps) {
  return (
    <textarea
      className={twMerge(
        'w-full pt-2 pb-2 bg-transparent placeholder-gray-200 focus:outline-none focus:border-gray-300 text-orange-base',
        props.className,
      )}
      {...props}
    />
  )
}