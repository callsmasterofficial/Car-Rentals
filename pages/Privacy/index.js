import PrivacyStatement from '../../components/PrivacyStatement'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import Play from '../../components/Play'
import Language from "../../components/Language"
import HelpIndex from '../../components/HelpIndex'

function index() {

  return (
    <>
  <HelpIndex/>
    <div className="w-[90%] mx-auto lg:w-[80%] privacyArea">
            <PrivacyStatement/>
    </div>
    <Footer/>
    </>
  )
}

export default index