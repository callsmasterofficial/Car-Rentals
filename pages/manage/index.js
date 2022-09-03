import Footer from '../../components/Footer'
import ManageBooking from "../../components/ManageBooking"
import Modal from '../../components/Modal'
import Play from '../../components/Play'
import Language from "../../components/Language"
import HelpIndex from '../../components/HelpIndex'
export default function index() {
  return (
    <>
    
   <HelpIndex/>
        <div className="w-[90%] mx-auto lg:w-[80%]">
        <ManageBooking  />
    </div>
    <Footer/>
    </>
  )
}
