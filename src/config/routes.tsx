import { Suspense } from "react"
import { useRoutes } from "react-router-dom"

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: '/main_window',
      element: <div>MainWindow</div>,
    },
  ])
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
}

export default AppRoutes