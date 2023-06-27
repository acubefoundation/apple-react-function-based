import Footer from '../Components/Footer/Footer'
import Header from "../Components/Nav/Nav";

import { Outlet } from 'react-router-dom'

function headerAndFooter() {
  return (
    <div>
    <Header />
    <Outlet/>
    <Footer />
    </div>
  )
}

export default headerAndFooter