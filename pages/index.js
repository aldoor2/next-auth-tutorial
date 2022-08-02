import { getSession } from 'next-auth/react'

function HomePage({ session }) {
  const { user } = session
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.image} alt={user.name} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session,
    }
  }
}

export default HomePage