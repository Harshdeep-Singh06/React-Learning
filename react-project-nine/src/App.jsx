import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//Step1: Create context
const UserContext = createContext();
//Step2: Wrap all the child inside a provider
//Step3 : Pass value 
//Step 4 : Consume inside the consumer 

function App() {
  const [user, setUser] = useState({name:"Love"});

  return (
  <>
     <UserContext.Provider value = {user}>
        <ChildA/>
     </UserContext.Provider>
    </>
   
  )
}

export default App
export {UserContext}
