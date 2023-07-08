import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import TodoContext from './Context/TodoContext.jsx'
import Alltask from './component/Pages/Alltask.jsx'
import ActiveTask from './component/Pages/ActiveTask.jsx'
import CompletedTask from './component/Pages/CompletedTask.jsx'
import NotFound from './component/Pages/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>

      <Route index element={<Alltask></Alltask>}></Route>

      <Route path='/active' element = {<ActiveTask></ActiveTask>}></Route>

      <Route path = '/completed' element = {<CompletedTask></CompletedTask>}></Route>

      <Route path='*' element = {<NotFound></NotFound>}></Route>

    </Route>
)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContext>
      <RouterProvider router = {router}>
        <App />
      </RouterProvider>
    </TodoContext>
  </React.StrictMode>,
)
