'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const AuthValidation = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const checkAuth = async () => {
        const isAuthenticated = Cookies.get('isAuthenticated')

        if (!isAuthenticated) {
          router.push('/SignInPage')
        } else {
          setIsLoading(false)
        }
      }

      checkAuth()
    }, [router])

    if (isLoading) {
      return <div>Loading...</div> // Or any loading component
    }

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default AuthValidation