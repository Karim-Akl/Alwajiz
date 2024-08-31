"use client";
import React from "react";
import Contact from "../../components/contact/page";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import Main from "../../components/main/page";

import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon"

import "../../components/hero/hero.css";
import "./style.css";


const Page = () => {
  const handleContactClick = () => {
    // Implement the contact button functionality here
  };

  return (
    <section className="sec-serv">
      <Header />
      <Main/>
      <WhatsappIcon/>


      <div className="flex line-3-bg">
        <div className="imga" style={{ width: "50%" }}>
          <h2>نحن نقدم عروض مغرية</h2>
          <p>
            تقديم أسعار تنافسية مع الحفاظ على جودة الخدمة، مما يجعل خدماتنا في
            متناول الجميع. شفافية الأسعار: وضوح وتفصيل الأسعار بدون أي رسوم خفية،
            مما يعزز من ثقة العملاء. سلامة وأمان
          </p>
          <button onClick={handleContactClick}>توصل معنا</button>
        </div>
        <div className="imga" style={{ width: "30%" }}>
          <img
            src="/image/WhatsApp Image 2024-08-25 at 19.58.00.jpeg"
            alt="عروض مغرية"
            width={200}
          />
        </div>
      </div>

      <div className="class-bg">
        <div className="service-container">
          <h2>خدماتنا</h2>
          <p>خبراء في مجالنا لذلك يمكننا توفير خدمات مميزة لك</p>
          <div className="flex">
            {[
              {
                title: "إيجار العاملات",
                description: "تقديم خدمات إيجار العمالة المنزلية مع مرونة في العقود والأسعار التنافسية تأمين العمالة المنزلية من البلدان المصرح بها، مع ضمان التزامهم بأعلى معايير الجودة",
                imgSrc: "/image/0821202411020566c5c92d7be51.gif",
                altText: "إيجار العاملات"
              },
              {
                title: " نقل خدمات",
                description: "توفر شركة شركة الوجيز للإستقدام وباقات التأجير  نقل الخدمات للعملاء لجميع الجنسيات المتوفرة والشروط المطلوبة",
                imgSrc: "/image/0821202411031766c5c975cc7b2.gif",
                altText: "تنظيف شامل"
              },
              {
                title: "استقدام العاملات ",
                description: "نقوم بتوفير الكوادر العاملة والعاملات من جميع الدول المتاحة ويشمل جميع التخصصات المطلوبة في سوق العمل بحيث تكون كوادر متميزة ومدربة للعمل بكفاءة",
                imgSrc: "/image/0821202411045566c5c9d744f0e.gif",
                altText: "رعاية منزلية"
              }
            ].map(({ title, description, imgSrc, altText }, index) => (
              <div key={index} className="l1-class-bg">
                <div className="service-text">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="service-image">
                  <img src={imgSrc} alt={altText} width={250} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </section>
  );
};

export default Page;
