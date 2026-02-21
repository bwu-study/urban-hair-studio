import type { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Designer from '../pages/Designer'
import Location from '../pages/Location.tsx'
import Notice from '../pages/Notice.tsx'

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/test', element: <Test /> },
  { path: '/designer', element: <Designer /> },
  { path: '/location', element: <Location /> },
  { path: '/designer', element: <Designer /> },
  { path: '/location', element: <Location /> },
  { path: '/notice', element: <Notice /> }
]
