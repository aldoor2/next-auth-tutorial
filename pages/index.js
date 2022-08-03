import { getSession, signOut } from 'next-auth/react'
import Image from 'next/image'

function HomePage({ session }) {
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
            </>
          )
          : (<p>Skeleton</p>)
      }

      <button onClick={() => signOut()}>
        Logout
      </button>
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