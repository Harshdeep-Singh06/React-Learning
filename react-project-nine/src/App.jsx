import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//Step1: Create context
// const UserContext = createContext();
//Step2: Wrap all the child inside a provider
//Step3 : Pass value 
//Step 4 : Consume inside the consumer 
const themeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Love"});
  const [theme, setTheme] = useState('light');

  return (

    <themeContext.Provider value = {{theme,setTheme}}>
      <div className='flex items-center justify-center h-screen'>
        <div className=' flex justify-center items-center h-84 w-84 shadow-2xl rounded-3xl' style={{backgroundColor:theme==='light'?'pink':'black'}} >
        <ChildA/>
      </div>
      </div>
    </themeContext.Provider>


  // <>
  //    <UserContext.Provider value = {user}>
  //       <ChildA/>
  //    </UserContext.Provider>
  //   </>
   
  )
}

export default App;
// export {UserContext}
export {themeContext};
