
import Home from './home/home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Privacy from './privacy/privacy'
import Tos from './tos/tos'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/tos' element={<Tos />} />
      </Route>
    )
  )
  return (
    <div className={``}>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App