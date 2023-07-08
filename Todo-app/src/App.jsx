import { NavLink, Outlet } from "react-router-dom"

function App() {

return (

  <>

    <header className="header">

      <h1> #todo </h1>

      <nav>
        <NavLink to = '/'> All </NavLink>
        <NavLink to = '/active'> Active </NavLink>
        <NavLink to = '/completed'> Completed </NavLink>
      </nav>

    </header>

    <Outlet></Outlet>
  </>

)
}

export default App
