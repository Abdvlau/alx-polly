import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/polls')
}

export const metadata = {
  title: 'Polling App',
  description: 'Create and manage polls with ease',
}