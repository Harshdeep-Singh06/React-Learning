import React, {useContext} from 'react'
import { themeContext,UserContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
    const {theme,setTheme} = useContext(themeContext);
    function toggleTheme(){
      if(theme === 'light'){
        setTheme("dark")
      }else{
        setTheme("light")
      }
    }
  return (
    <div>
       <button className='shadow-xl rounded-xl px-2 py-1 text-sm bg-pink-300 font-serif'
       onClick={toggleTheme}>
        Change Theme
       </button>
       data: {user.name}
    </div>
  )
}

export default ChildC