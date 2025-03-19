import  { useContext } from 'react'
import UserContext from '../Contexts/Auth/useContext'

function profile() {
  const {user}=useContext(UserContext)
  if (!user) return <h1>Not logged in</h1>
  return (
    <h1>Profile : {user.username}
    {user.password}</h1>
    
  )
}

export default profile
