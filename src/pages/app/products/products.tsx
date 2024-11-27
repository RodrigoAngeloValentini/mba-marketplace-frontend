import {Button} from '@/components/ui/button'
import {Card, CardContent} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Helmet} from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import {toast} from 'sonner'
import {z} from 'zod'

const productsForm = z.object({
  search: z.string(),
  status: z.string().nullable()
})

type ProductsForm = z.infer<typeof productsForm>

export function Products() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<ProductsForm>({
    defaultValues: {
      search: '',
      status: null
    }
  })

  async function handleSearch(data: ProductsForm) {
    try {
      toast.info('Not yet', {
        action: {
          label: 'Search',
          onClick: () => {
          }
        }
      })
    } catch (error) {
      toast.error('Error!')
    }
  }

  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <div className="pb-4">
          <p className="text-gray-500 font-medium">Seus produtos</p>
          <p className="text-gray-300 font-normal">
            Acesse e gerencie a sua lista de produtos à venda
          </p>
        </div>

        <div className="flex flex-row gap-6 items-start">
          {/* Card Section */}
          <div className="grid grid-cols-1 gap-4 w-1/3">
            <Card className="w-full">
              <CardContent>
                <p className='text-gray-300 font-normal'>Filtrar</p>

                <form className="" onSubmit={handleSubmit(handleSearch)}>
                  <div className="mt-11 mb-11">
                    <div className="mb-5">
                      <Input
                        id="search"
                        type="search"
                        {...register('search')}
                        placeholder="Pesquisar"
                      />
                    </div>

                    <div className="mb-5">
                      <Input
                        id="status"
                        type="default"
                        {...register('status')}
                        placeholder="Status"
                      />
                    </div>
                  </div>

                  <div className="">
                    <Button
                      variant="default"
                      disabled={isSubmitting}
                      className="w-full"
                      type="submit">
                      Acessar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* List Section */}
          <div className="flex-1"></div>
        </div>
      </div>
    </>
  )
}
