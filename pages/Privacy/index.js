import PrivacyStatement from '../../components/PrivacyStatement'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import Play from '../../components/Play'
import Language from "../../components/Language"
import HelpIndex from '../../components/HelpIndex'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";



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
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default index