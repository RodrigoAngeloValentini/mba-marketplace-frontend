import {useMutation} from '@tanstack/react-query'
import {Helmet} from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import {Link, useSearchParams} from 'react-router-dom'
import {toast} from 'sonner'
import {z} from 'zod'

import {signIn} from '@/api/sign-in'
import {Button} from '@/components/ui/Button'
import {Input} from '@/components/ui/Input'
import {Label} from '@/components/ui/Label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
      password: ''
    }
  })

  const {mutateAsync: authenticate} = useMutation({
    mutationFn: signIn
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({email: data.email})

      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignIn(data)
          }
        }
      })
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="flex flex-col justify-between h-full gap-6">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-500">
              Acesse sua conta
            </h1>
            <p className="text-sm text-gray-300">
              Informe seu e-mail e senha para entrar
            </p>
          </div>

          <form className="" onSubmit={handleSubmit(handleSignIn)}>
            <div className='mt-11 mb-11'>
              <div className="mb-5">
                <Label htmlFor="email">E-MAIL</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="Seu e-mail cadastrado"
                />
              </div>

              <div className="mb-5">
                <Label htmlFor="password">SENHA</Label>
                <Input
                  id="password"
                  type="default"
                  {...register('password')}
                  placeholder="Sua senha de acesso"
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
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-gray-300 mb-5">Ainda não tem uma conta?</p>
          <Button variant="outline" className="w-full" type="button">
            <Link to="/sign-up">Cadastrar</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
