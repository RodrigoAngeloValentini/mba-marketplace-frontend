import { api } from '@/lib/axios'

export interface signUpBody {
  name: string,
  phone: string,
  email: string,
  password: string,
}

export async function signUp({
  name,
  phone,
  email,
  password,
}: signUpBody) {
  await api.post('/register', { email, name, phone, password })
}