// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth].js'

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) return res.status(401).json('Forbidden')

  res.status(200).json({ name: 'John Doe' })
}
