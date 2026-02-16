import type { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Designer from '../pages/Designer'

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/test', element: <Test /> },
  { path: '/designer', element: <Designer />}
]
