import {useMutation} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'

import {signOut} from '@/api/sign-out'

import {Logout01Icon} from 'hugeicons-react'

import User from '@/assets/User.png'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/DropdownMenu'

export function AccountMenu() {
  const navigate = useNavigate()

  const {mutateAsync: signOutFn, isPending: isSigningOut} = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', {replace: true})
    }
  })

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={User} alt="User" className="h-[48px] cursor-pointer" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col items-center">
            <div className="flex flex-row items-start self-stretch">
              <div className="mr-2">
                <img src={User} alt="User" className="h-[32px]" />
              </div>
              <span className="text-gray-300 text-base">Brandom Ekstrom</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            asChild
            disabled={isSigningOut}
            className="text-orange-base hover:text-orange-dark">
            <button
              className="flex flex-row w-full border-none items-center"
              onClick={() => signOutFn()}>
              <p className="text-orange-base text-base">Sair</p>

              <Logout01Icon size={20} />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
