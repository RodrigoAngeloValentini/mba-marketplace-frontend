import * as React from 'react'

import {cn} from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <>    
        <input
          type={type}
          className={cn(
            'w-full pt-2 pb-2 border-b border-gray-300 bg-transparent placeholder-gray-200 focus:outline-none focus:border-gray-300 text-orange-base',
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    )
  }
)
Input.displayName = 'Input'

export {Input}

import { Root, RootProps } from './Root'
import { Prefix, PrefixProps } from './Prefix'
import { Control, ControlProps } from './Control'

export { Root, Prefix, Control }
export type { RootProps, PrefixProps, ControlProps }