
const TopActionsMenu = () => {
  const minimize = () => {
    (window as any).api.minimize()
  }

  const maximize = () => {
    (window as any).api.maximize()
  }

  const close = async () => {
    await (window as any).api.close()
  }

  return (
    <div className="top-actions-menu">
      <button className="minimize-button" onClick={minimize}>-</button>
      <button className="maximize-button" onClick={maximize}>+</button>
      <button className="close-button" onClick={close}>X</button>
    </div>
  )
}

export default TopActionsMenu