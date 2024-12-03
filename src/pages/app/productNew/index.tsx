import * as Input from '@/components/ui/Input'
import * as Select from '@/components/ui/Select'
import {Textarea} from '@/components/ui/TextArea'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card'
import {UserAccountIcon} from 'hugeicons-react'
import {Helmet} from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

const productNewForm = z.object({
  title: z.string(),
  value: z.string(),
  description: z.string(),
  category: z.string().nullable()
})

type ProductNewForm = z.infer<typeof productNewForm>

export function ProductNew() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<ProductNewForm>({
    defaultValues: {
      title: '',
      value: '',
      description: '',
      category: null
    }
  })

  return (
    <>
      <Helmet title="New Product" />

      <div className="flex flex-col gap-4">
        <div className="pb-4">
          <p className="text-gray-500 font-medium text-lg">Novo produto</p>
          <p className="text-gray-400 font-normal text-sm">
            Cadastre um produto para venda no marketplace
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
              <CardContent className="space-y-1 w-full h-[300px]">
                <div className="flex gap-3">
                  <Input.Root>
                    <Input.Control
                      id="title"
                      type="text"
                      name="title"
                      defaultValue=""
                    />
                  </Input.Root>
                </div>

                <div className="flex gap-3">
                  <Input.Root>
                    <Input.Prefix>
                      <UserAccountIcon className="h-5 w-5 text-zinc-500" />
                    </Input.Prefix>
                    <Input.Control
                      id="value"
                      type="text"
                      name="value"
                      defaultValue=""
                    />
                  </Input.Root>
                </div>

                <div className="flex gap-3">
                  <Input.Root>
                    <Input.Control
                      id="value"
                      type="text"
                      name="value"
                      defaultValue=""
                    />
                  </Input.Root>
                </div>

                <div>
                  <Textarea
                    name="description"
                    id="description"
                    defaultValue=""
                  />
                </div>

                <div className="flex gap-3">
                  <Select.Root name="timezone">
                    <Select.Trigger>
                      <Select.Value placeholder="Selecione a categoria" />
                    </Select.Trigger>

                    <Select.Content>
                      <Select.Item value="utc-3">
                        <Select.ItemText>Móvel</Select.ItemText>
                      </Select.Item>
                    </Select.Content>
                  </Select.Root>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
