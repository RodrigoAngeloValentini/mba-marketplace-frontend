import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex h-10 items-center gap-8 rounded-md px-4 text-sm font-medium text-gray-300 hover:text-orange-base data-[current=true]:text-orange-base data-[current=true]:bg-shape"
      {...props}
    />
  )
}