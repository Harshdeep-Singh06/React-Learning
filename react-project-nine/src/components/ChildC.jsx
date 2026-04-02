import React, {useContext} from 'react'
import { themeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const {theme,setTheme} = useContext(themeContext);
    function handleClick(){
      if(theme === 'light'){
        setTheme("dark")
      }else{
        setTheme("light")
      }
    }
  return (
    <div>
       <button className='shadow-xl rounded-xl px-2 py-1 text-sm bg-pink-300 font-serif'
       onClick={handleClick}>
        Change Theme
       </button>
    </div>
  )
}

export default ChildC