"use client"
import { useState, useEffect } from "react";
import Footer from "../../components/footer/page";
import Header from "../../components/header/page";
import Main from "../../components/main/page";
import Hero from "../../components/hero/page";
import Contact from "../../components/contact/page";
import Campany from "../../components/caompany/page";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen"; // استيراد مكون التحميل

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // مدة التحميل 3 ثواني

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // عرض مكون التحميل خلال فترة التحميل
  }

  return (
    <div>
      <Header />
      <Main />
      <Hero />
      <Campany />
      <Contact />
      <Footer />
      <WhatsappIcon />
    </div>
  );
}
