import Footer from "../../components/Footer";
import HelpCard from "../../components/HelpCard";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions";
import ChatArea from "../../components/ChatArea";
import HelpIndex from "../../components/HelpIndex";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


function index() {

  return (
    <>
       <HelpIndex/>
      <div className="w-[90%] mx-auto lg:w-[80%] helpArea">
        <HelpCard />
        <FrequentlyAskedQuestions />
        <ChatArea />
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default index;
