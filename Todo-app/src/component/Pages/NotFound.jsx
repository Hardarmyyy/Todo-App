import React from 'react'
import { NavLink } from 'react-router-dom'


const NotFound = () => {


return (

    <>
        <div className='notFound'> 

            <h1>Not Found</h1>
            <p> <NavLink to = '/'>  Back to home </NavLink> </p>
            
        </div>
    </>

)
}

export default NotFound