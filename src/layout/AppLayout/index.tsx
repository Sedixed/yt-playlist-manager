import TopActionsMenu from '../../components/TopActionsMenu'

type AppLayoutPropsType = {
  children: JSX.Element
}

const AppLayout = ({ children }: AppLayoutPropsType) => {
  return (
    <>
      <TopActionsMenu />
      <div>AppLayout</div>
      {children}
    </>
  )
}

export default AppLayout