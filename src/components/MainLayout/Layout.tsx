import  { FC, ReactNode } from 'react'
import MainNav from '../NavBar/MainNav'
import Footer from '../Footer'

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
  return (
    <div className='w-full h-full bg-white'>
      <MainNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
