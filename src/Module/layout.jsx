import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'

const Layout = () => {
  return (
    <>
     <SideBar />
     <Navbar />
     <main style={{marginLeft:"242px",marginTop:"40px"}}>
     <Outlet />
     </main>
    </>
  )
}

export default Layout