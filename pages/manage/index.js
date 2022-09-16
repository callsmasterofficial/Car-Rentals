import Footer from '../../components/Footer'
import ManageBooking from "../../components/ManageBooking"
import Modal from '../../components/Modal'
import Play from '../../components/Play'
import Language from "../../components/Language"
import HelpIndex from '../../components/HelpIndex'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


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

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});