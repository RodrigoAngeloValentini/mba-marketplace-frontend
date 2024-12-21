import {useMutation} from '@tanstack/react-query'
import {Helmet} from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'sonner'
import {z} from 'zod'

import {signUp} from '@/api/sign-up'
import {Button} from '@/components/ui/Button'
import * as Input from '@/components/ui/Input'
import {AccessIcon, Mail02Icon, UserIcon, CallIcon} from 'hugeicons-react'

const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirm: z.string()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<SignUpForm>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  })

  const {mutateAsync: registerFn} = useMutation({
    mutationFn: signUp
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerFn({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone
      })

      toast.success('Cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`)
        }
      })
    } catch (error) {
      toast.error('Erro ao cadastrar.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />

      <div className="flex flex-col justify-between h-full gap-6">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-500">
              Crie sua conta
            </h1>
            <p className="text-sm text-gray-300">
              Informe os seus dados pessoais e de acesso
            </p>
          </div>

          <form className="" onSubmit={handleSubmit(handleSignUp)}>
            <div className="mt-11 mb-11">
              <h4 className="text-xl font-semibold tracking-tight text-gray-500 mb-2">
                Perfil
              </h4>

              <div className="mb-5">
                <Input.Label>NOME</Input.Label>
                <Input.Root>
                  <Input.Prefix>
                    <UserIcon className="text-gray-200" size={24} />
                  </Input.Prefix>
                  <Input.Control
                    id="name"
                    type="default"
                    {...register('name')}
                    placeholder="Seu nome completo"
                  />
                </Input.Root>
              </div>

              <div className="mb-5">
                <Input.Label>TELEFONE</Input.Label>
                <Input.Root>
                  <Input.Prefix>
                    <CallIcon className="text-gray-200" size={24} />
                  </Input.Prefix>
                  <Input.Control
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(00) 00000-0000"
                  />
                </Input.Root>
              </div>
            </div>

            <div className="mt-11 mb-11">
              <h4 className="text-xl font-semibold tracking-tight text-gray-500 mb-2">
                Acesso
              </h4>

              <div className="mb-5">
                <Input.Label>E-MAIL</Input.Label>
                <Input.Root>
                  <Input.Prefix>
                    <Mail02Icon className="text-gray-200" size={24} />
                  </Input.Prefix>
                  <Input.Control
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Seu e-mail de acesso"
                  />
                </Input.Root>
              </div>

              <div className="mb-5">
                <Input.Label>SENHA</Input.Label>
                <Input.Root>
                  <Input.Prefix>
                    <AccessIcon className="text-gray-200" size={24} />
                  </Input.Prefix>
                  <Input.Control
                    id="password"
                    type="password"
                    {...register('password')}
                    placeholder="Senha de acesso"
                  />
                </Input.Root>
              </div>

              <div className="mb-5">
                <Input.Label>CONFIRMAR SENHA</Input.Label>
                <Input.Root>
                  <Input.Prefix>
                    <AccessIcon className="text-gray-200" size={24} />
                  </Input.Prefix>
                  <Input.Control
                    id="passwordConfirm"
                    type="password"
                    {...register('passwordConfirm')}
                    placeholder="Confirme a senha"
                  />
                </Input.Root>
              </div>
            </div>

            <div className="">
              <Button
                variant="default"
                disabled={isSubmitting}
                className="w-full"
                type="submit">
                Cadastrar
              </Button>
            </div>
          </form>
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-gray-300 mb-5">Já tem uma conta?</p>
          <Button variant="outline" className="w-full" type="button">
            <Link to="/sign-in">Acessar</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

