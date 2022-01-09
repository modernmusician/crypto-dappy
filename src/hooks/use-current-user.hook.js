import { useState, useEffect } from 'react'
import * as fcl from '@onflow/fcl';

export default function useCurrentUser() {
  const [user, setUser] = useState()

  const tools = {
    logIn: () => setUser(fcl.authenticate),
    logOut: () => setUser(fcl.unauthenticate),
  }

  useEffect(()=>{
    fcl.currentUser().subscribe(setUser)
  }, [])


  return [user, user?.addr != null, tools]
}
