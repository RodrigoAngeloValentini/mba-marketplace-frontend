import * as Input from '@/components/ui/Input'
import * as Select from '@/components/ui/Select'
import * as TextArea from '@/components/ui/TextArea'
import * as FileInput from '@/components/ui/FileInput'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card'
import {Helmet} from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {Button} from '@/components/ui/Button'

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
          <p className="text-gray-300 font-normal">
            Cadastre um produto para venda no marketplace
          </p>
        </div>

        <div className="flex flex-row gap-6 items-start">
          <div className="w-full md:w-1/4">
            <FileInput.Root
              id="photo"
              className="flex flex-col items-start gap-5 lg:flex-row">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control accept="image/*" />
            </FileInput.Root>
          </div>

          <div className="flex-1">
            <Card className="w-full">
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-7">
                <CardTitle className="text-gray-500 font-semibold">
                  Dados do produto
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full h-auto gap-5">
                <div className="mb-5">
                  <Input.Label>Título</Input.Label>
                  <Input.Root>
                    <Input.Control
                      id="title"
                      type="text"
                      name="title"
                      defaultValue=""
                      placeholder="Nome do produto"
                    />
                  </Input.Root>
                </div>

                <div className="mb-5">
                  <Input.Label>Valor</Input.Label>
                  <Input.Root>
                    <Input.Prefix>
                      <span className="text-orange-base">R$</span>
                    </Input.Prefix>
                    <Input.Control
                      id="value"
                      type="text"
                      name="value"
                      defaultValue=""
                      placeholder="0,00"
                    />
                  </Input.Root>
                </div>

                <div className="mb-5">
                  <TextArea.Label>Descrição</TextArea.Label>
                  <TextArea.Root>
                    <TextArea.Control
                      name="description"
                      id="description"
                      defaultValue=""
                      placeholder="Escreva detalhes sobre o produto, tamanho, características"
                    />
                  </TextArea.Root>
                </div>

                <div className="mb-5">
                  <Input.Label>Categoria</Input.Label>
                  <Select.Root name="category">
                    <Select.Trigger>
                      <Select.Value placeholder="Selecione" />
                    </Select.Trigger>

                    <Select.Content>
                      <Select.Item value="1">
                        <Select.ItemText>Category 1</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="2">
                        <Select.ItemText>Category 2</Select.ItemText>
                      </Select.Item>
                    </Select.Content>
                  </Select.Root>
                </div>

                <div className="flex flex-row justify-between pt-8 gap-8">
                  <Button
                    variant="outline"
                    disabled={isSubmitting}
                    className="w-full"
                    type="button">
                    Cancelar
                  </Button>

                  <Button
                    variant="default"
                    disabled={isSubmitting}
                    className="w-full"
                    type="submit">
                    Salvar e publicar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
