import { getSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function HomePage({ session }) {

  const router = useRouter()

  return (
    <div>
      {
        session
          ? (
            <>
              <h2>{session.user.name}</h2>
              <p>{session.user.email}</p>
              <Image
                src={session.user.image}
                alt={session.user.name}
                width='100%'
                height='100%'
              />
              <button onClick={() => router.push('/api/auth/signout')}>Logout</button>
            </>
          )
          : (<p>Skeleton</p>)
      }
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session
    }
  }
}

export default HomePage