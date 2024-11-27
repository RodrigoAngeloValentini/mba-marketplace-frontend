import { Outlet } from 'react-router-dom'

import Logo from '@/assets/logo.svg'
import Background from '@/assets/background.png'

export function AuthLayout() {
  return (
    <div className="container mx-auto bg-background">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-5 antialiased">
        {/* Left Section (hidden on small screens) */}
        <div className="hidden lg:flex flex-col col-span-1 lg:col-span-3 bg-background w-full">
          <div className="inline-flex items-center m-6">
            <img src={Logo} alt="Logo" className="h-[68px]" />
          </div>
          <div className="flex flex-1 justify-center items-center">
            <img src={Background} alt="Background" className="w-full h-auto" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center p-6 col-span-1 lg:col-span-2 bg-background">
          <div className="bg-white p-6 lg:p-[72px] rounded-3xl w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}