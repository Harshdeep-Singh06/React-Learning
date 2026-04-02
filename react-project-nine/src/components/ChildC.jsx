import React, {useContext} from 'react'
import { themeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = useContext(themeContext);
  return (
    <div>
       <button className='shadow-xl rounded-xl px-2 py-1 text-sm bg-pink-300 font-serif'>
        Change Theme
       </button>
    </div>
  )
}

export default ChildC