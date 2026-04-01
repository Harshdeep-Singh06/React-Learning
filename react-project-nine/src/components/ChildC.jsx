import React from 'react'
import { Usercontext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
       {user.name}
    </div>
  )
}

export default ChildC