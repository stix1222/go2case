import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <div className=''></div>
      
      <Navbar />
      <div className=''>
      <main>{children}</main>
      <Footer/>
      </div>
    </>
  )
}