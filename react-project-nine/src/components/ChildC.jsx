import React, {useContext} from 'react'
import { themeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = useContext(themeContext);
  return (
    <div>
       {theme}
    </div>
  )
}

export default ChildC