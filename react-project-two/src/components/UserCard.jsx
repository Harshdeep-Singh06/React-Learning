import React from 'react'
import Aujla from '../assets/Aujla.jpg'
import "./UserCard.css"

const UserCard = () => {
  return (
    <div className='user-container'>
      <p id = "user-title">Harsh</p>
      <img id="user-img" src={Aujla} alt = 'Aujla'></img>
      <p id="user-desc">Description of Harsh </p>
    </div>
  )
}
export default UserCard
