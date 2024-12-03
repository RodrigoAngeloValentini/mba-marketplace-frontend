import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className={twMerge(
        'w-full pt-2 pb-2 border-b border-gray-300 bg-transparent placeholder-gray-200 focus:outline-none focus:border-gray-300 text-orange-base',
        props.className,
      )}
      {...props}
    />
  )
}