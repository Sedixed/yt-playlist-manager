import { useTheme } from '../../context/useTheme'
import TopActionsMenu from '../../components/TopActionsMenu'
import Navbar from '../../components/Navbar'

type AppLayoutPropsType = {
  children: JSX.Element
}

const AppLayout = ({ children }: AppLayoutPropsType) => {
  const { theme } = useTheme()
  return (
    <div className={`${theme} flex-col app-layout`}>
      <TopActionsMenu />
      <div className='flex content'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default AppLayout