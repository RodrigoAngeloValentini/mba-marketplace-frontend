import * as Select from '@radix-ui/react-select'
import { ComponentProps, ReactNode } from 'react'

export interface ItemTextProps extends ComponentProps<typeof Select.ItemText> {
  children: ReactNode
}

export function ItemText({ children }: ItemTextProps) {
  return (
    <Select.ItemText asChild>
      <span className="flex items-center gap-2 text-left">
        {children}
      </span>
    </Select.ItemText>
  )
}