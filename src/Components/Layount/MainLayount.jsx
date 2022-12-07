
export const MainLayout = ({children}) => {
    return (
      <div
      className='container d-flex align-items-center justify-content-center  '
      style={{height: '100vh', zIndex: '-1'}}>
        {children}
      </div>
    )
  }
  