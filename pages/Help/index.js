import Footer from "../../components/Footer";
import HelpCard from "../../components/HelpCard";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions";
import ChatArea from "../../components/ChatArea";
import HelpIndex from "../../components/HelpIndex";

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

export default index;
