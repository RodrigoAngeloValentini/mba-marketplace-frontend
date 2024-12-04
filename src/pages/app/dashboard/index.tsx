import {Helmet} from 'react-helmet-async'

import {SaleTag01Icon, Store04Icon, UserMultipleIcon} from 'hugeicons-react'
import {Chart} from './chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <div className="pb-4">
          <p className="text-gray-500 font-medium text-lg">Últimos 30 dias</p>
          <p className="text-gray-300 font-normal">
            Confira as estatísticas da sua loja no último mês
          </p>
        </div>

        <div className="flex flex-row gap-6 items-start">
          {/* Card Section */}
          <div className="grid grid-cols-1 gap-4 w-1/3">
            <div className="bg-white rounded-xl flex flex-row p-4">
              <div className="bg-blue-light rounded-xl flex items-center justify-center p-5">
                <SaleTag01Icon size={40} className="text-blue-dark" />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="font-semibold text-gray-400 text-lg">24</p>

                <p className="text-sm font-normal text-gray-300">Produtos</p>
                <p className="text-sm font-normal text-gray-300">Vendidos</p>
              </div>
            </div>

            <div className="bg-white rounded-xl flex flex-row p-4">
              <div className="bg-blue-light rounded-xl flex items-center justify-center p-5">
                <Store04Icon size={40} className="text-blue-dark" />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="font-semibold text-gray-400 text-lg">56</p>
                <p className="text-sm font-normal text-gray-300">Produtos</p>
                <p className="text-sm font-normal text-gray-300">Vendidos</p>
              </div>
            </div>

            <div className="bg-white rounded-xl flex flex-row p-4">
              <div className="bg-blue-light rounded-xl flex items-center justify-center p-5">
                <UserMultipleIcon size={40} className="text-blue-dark" />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="font-semibold text-gray-400 text-lg">1.238</p>
                <p className="text-sm font-normal text-gray-300">Usuários</p>
                <p className="text-sm font-normal text-gray-300">Ativos</p>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="flex-1">
            <Chart />
          </div>
        </div>
      </div>
    </>
  )
}
