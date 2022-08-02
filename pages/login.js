import { useRouter } from 'next/router'

function LoginPage() {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/api/auth/signin/github')}>Signin with Github</button>
  )
}

export default LoginPage