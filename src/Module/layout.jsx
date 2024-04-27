import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'

const Layout = () => {
  return (
    <>
     <SideBar />
     <Navbar />
     <main  style={{margin:"20px 24px 0 242px",  marginTop:"40px",minHeight:"78vh",backgroundColor:'white', border:"1px solid black", borderRadius:"15px",padding:"20px"}}>
     <Outlet />
     </main>
    </>
  )
}

export default Layout