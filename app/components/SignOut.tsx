'use client'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const SignOut = () => {
  const router = useRouter()

  const handleSignOut = () => {
    // Clear authentication cookie
    Cookies.remove('isAuthenticated')

    // Redirect to the sign-in page
    router.push('/SignInPage')
  }

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  )
}

export default SignOut
