import {AccountMenu} from './account-menu'
import {NavLink} from './nav-link'
import {ChartHistogramIcon, PackageIcon} from 'hugeicons-react'

import Logo from '@/assets/LogoMini.svg'
import {Button} from './ui/button'
import {useNavigate} from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <div className="h-20 px-5 flex flex-row w-full items-center justify-between self-stretch border-b border-shape">
      <img src={Logo} alt="Logo" className="h-[56px]" />

      <div className="flex flex-row">
        <NavLink to={'/'}>
          <ChartHistogramIcon size={20} />
          Dashboard
        </NavLink>
        <NavLink to={'/products'}>
          <PackageIcon size={20} />
          Produtos
        </NavLink>
      </div>

      <div className="flex flex-row justify-between items-center gap-8">
        <Button
          onClick={() => {
            navigate('/products/new')
          }}
          variant="default"
          disabled={false}
          className="w-full"
          type="button">
          Novo produto
        </Button>

        <AccountMenu />
      </div>
    </div>
  )
}
