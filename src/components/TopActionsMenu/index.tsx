import { useTheme } from '../../context/useTheme'
import '../../config/styles/top-actions-menu.css'

const TopActionsMenu = () => {
  const { theme } = useTheme()

  const minimize = () => {
    (window as any).api.minimize()
  }

  const maximize = () => {
    (window as any).api.maximize()
  }

  const close = () => {
    (window as any).api.close()
  }

  return (
    <div className={`top-actions-menu flex ${theme}`}>
      <button className="minimize-btn" onClick={minimize}>-</button>
      <button className="maximize-btn" onClick={maximize}>+</button>
      <button className="close-btn" onClick={close}>x</button>
    </div>
  )
}

export default TopActionsMenu