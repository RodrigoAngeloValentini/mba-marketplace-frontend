import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Helmet} from 'react-helmet-async'

export function ProductEdit() {
  return (
    <>
      <Helmet title="Edit Product" />

      <div className="flex flex-col gap-4">
        <div className="pb-4">
          <p className="text-gray-500 font-medium text-lg">Editar produto</p>
          <p className="text-gray-400 font-normal text-sm">
            Gerencie as informações do produto cadastrado
          </p>
        </div>

        <div className="flex flex-row gap-6 items-start">
          <div className="w-full md:w-1/4"></div>

          <div className="flex-1">
            <Card className="w-full">
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-7">
                <CardTitle className="text-gray-500 font-semibold">
                  Dados do produto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 w-full h-[300px]"></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}