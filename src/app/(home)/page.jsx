import Footer from "../../components/footer/page"
import Header from "../../components/header/page"
import Main from "../../components/main/page"
import Hero from "../../components/hero/page"
import Contact from "../../components/contact/page"
import Campany from "../../components/caompany/page"
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon"

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Hero/>
      <Campany/>
      <Contact/>
      <Footer/>
      <WhatsappIcon/>
    </div>
  );
}
