
import UserCard from './components/UserCard'
import Aujla from "./assets/Aujla.jpg"
import Sandhu from "./assets/Sandhu.jpg"
import Cheema from "./assets/Cheema.jpg"

function App() {

  return (
    <>
     <div className='container'>
      <UserCard name = "Karan Aujla" desc = "desc1" image = {Aujla} style = {{"border-radius": "10px"}} />
      <UserCard name = "Navaan Sandhu" desc = "desc2" image = {Sandhu} style = {{"border-radius": "10px"}}/>
      <UserCard name = "Cheema Y" deesc = "desc3" image = {Cheema} style = {{"border-radius": "10px"}}/>

     </div>
    </>
  )
}

export default App
