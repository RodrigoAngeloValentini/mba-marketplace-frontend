import * as Select from '@radix-ui/react-select'
import { ArrowDown01Icon } from 'hugeicons-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TriggerProps extends ComponentProps<typeof Select.Trigger> {}

export function Trigger({ children, ...props }: TriggerProps) {
  return (
    <Select.Trigger
      {...props}
      className={twMerge(
        'flex w-full items-center justify-between gap-2 py-2 outline-none border-b border-gray-300',
        'data-[placeholder]:text-gray-200',
        props.className,
      )}
    >
      {children}

      <Select.Icon>
        <ArrowDown01Icon className="h-5 w-5 text-gray-300" />
      </Select.Icon>
    </Select.Trigger>
  )
}