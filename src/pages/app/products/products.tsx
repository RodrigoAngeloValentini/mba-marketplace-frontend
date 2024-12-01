import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Product } from '@/components/product'

const productsForm = z.object({
  search: z.string(),
  status: z.string().nullable()
})

type ProductsForm = z.infer<typeof productsForm>

export function Products() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ProductsForm>({
    defaultValues: {
      search: '',
      status: null
    }
  })

  async function handleSearch(data: ProductsForm) {
    try {
      toast.info('Search triggered', {
        action: {
          label: 'Retry',
          onClick: () => {}
        }
      })
    } catch (error) {
      toast.error('Error occurred!')
    }
  }

  const products = [1, 2, 3, 4, 5, 6] // Example product list

  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 max-w-full overflow-hidden">
        {/* Header Section */}
        <div className="pb-4">
          <p className="text-gray-500 font-medium text-lg">Seus produtos</p>
          <p className="text-gray-400 font-normal text-sm">
            Acesse e gerencie a sua lista de produtos à venda
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Filter Card */}
          <div className="w-full md:w-1/4">
            <Card className="w-full">
              <CardContent>
                <p className="text-gray-400 font-normal mb-4">Filtrar</p>

                <form onSubmit={handleSubmit(handleSearch)}>
                  <div className="mb-5">
                    <Input
                      id="search"
                      type="search"
                      {...register('search')}
                      placeholder="Pesquisar"
                      aria-label="Pesquisar produtos"
                      className="w-full"
                    />
                    {errors.search && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.search.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-5">
                    <Input
                      id="status"
                      type="text"
                      {...register('status')}
                      placeholder="Status"
                      aria-label="Status do produto"
                      className="w-full"
                    />
                  </div>

                  <Button
                    variant="default"
                    disabled={isSubmitting}
                    className="w-full"
                    type="submit">
                    {isSubmitting ? 'Pesquisando...' : 'Aplicar filtro'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Product List */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {products.length > 0 ? (
                products.map((_, index) => <Product key={index} />)
              ) : (
                <p className="text-gray-500 text-center w-full">
                  Nenhum produto encontrado.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
