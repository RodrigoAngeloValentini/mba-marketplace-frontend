import * as Select from '@radix-ui/react-select'
import { Tick02Icon } from 'hugeicons-react'
import { ComponentProps } from 'react'

export interface ItemProps extends ComponentProps<typeof Select.Item> {}

export function Item({ children, ...props }: ItemProps) {
  return (
    <Select.Item
      className="flex items-center gap-2 px-2 py-2"
      {...props}
    >
      {children}

      <Select.ItemIndicator className="ml-auto">
        <Tick02Icon className="h-4 w-4 text-orange-base"/>
      </Select.ItemIndicator>
    </Select.Item>
  )
}