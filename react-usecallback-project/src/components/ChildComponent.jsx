import React from 'react'

const ChildComponent = React.memo(
     (props) => {

    console.log("Child componenet rendered again");

  return (
    <div>
        <button 
        onClick={props.handleClick}
        className='px-4 py-2 rounded-xl border-2 border-purple-400 text-purple-400 font-semibold active:translate-y-2 transition duration-300'>
            {props.buttonName}
        </button>
    </div>
  )
}

)
export default ChildComponent