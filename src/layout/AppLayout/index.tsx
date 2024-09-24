import { useTheme } from '../../context/useTheme'
import TopActionsMenu from '../../components/TopActionsMenu'

type AppLayoutPropsType = {
  children: JSX.Element
}

const AppLayout = ({ children }: AppLayoutPropsType) => {
  const { theme } = useTheme()
  return (
    <div className={`${theme}`}>
      <TopActionsMenu />
      <div>AppLayout</div>
      {children}
    </div>
  )
}

export default AppLayout