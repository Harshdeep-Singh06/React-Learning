import React, {useContext} from 'react'
import { themeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = useContext(themeContext);
  return (
    <div>
       <button>
        Change Theme
       </button>
    </div>
  )
}

export default ChildC