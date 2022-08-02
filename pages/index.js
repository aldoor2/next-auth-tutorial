import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    router.push('/login')
  }

  return (
    <div>
      {
        session
          ? (
            <>
              <h2>{session.user.name}</h2>
              <p>{session.user.email}</p>
              <img src={session.user.image} loading='lazy' alt={session.user.name} />
              <button onClick={() => router.push('/api/auth/signout')}>Logout</button>
            </>
          )
          : (<p>Skeleton</p>)
      }
    </div>
  )
}



export default HomePage