import '../../config/styles/top-actions-menu.css'

const TopActionsMenu = () => {
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
    <div className="top-actions-menu flex">
      <button className="minimize-button" onClick={minimize}>-</button>
      <button className="maximize-button" onClick={maximize}>+</button>
      <button className="close-button" onClick={close}>x</button>
    </div>
  )
}

export default TopActionsMenu