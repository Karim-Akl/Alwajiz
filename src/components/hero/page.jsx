"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./hero.css";

const Hero = () => {
  const [recruitmentCount, setRecruitmentCount] = useState(0);
  const [rentalCount, setRentalCount] = useState(0);

  // Increment the count for recruitment countries from 0 to 20
  useEffect(() => {
    const startCount = 0;
    const endCountRecruitment = 5;
    const endCountRental = 5;
    const duration = 3000;

    const incrementTimeRecruitment =
      duration / (endCountRecruitment - startCount);
    const incrementTimeRental = duration / (endCountRental - startCount);

    const incrementRecruitmentCount = () => {
      setRecruitmentCount((prevCount) => {
        if (prevCount < endCountRecruitment) {
          setTimeout(incrementRecruitmentCount, incrementTimeRecruitment);
          return prevCount + 1;
        } else {
          return endCountRecruitment;
        }
      });
    };

    const incrementRentalCount = () => {
      setRentalCount((prevCount) => {
        if (prevCount < endCountRental) {
          setTimeout(incrementRentalCount, incrementTimeRental);
          return prevCount + 1;
        } else {
          return endCountRental;
        }
      });
    };

    incrementRecruitmentCount();
    incrementRentalCount();
  }, []);

  // Render a box with a dynamic count and title
  const renderBox = (count, title, link) => (
    <div className="box">
      <h2>{count}</h2>
      <p>{title}</p>
      <button>
        <Link href={link}>المزيد</Link>
      </button>
    </div>
  );

  return (
    <section className="hero-class-bg">
      <div className="hero-class">
        <div className="flex img-text-hero">
          <div>
            <img
              src="/image/0821202410584166c5c861b7d60.gif"
              alt="Hero"
              width={400}
            />
          </div>
          <div className="text">
            <p>تعرف علينا أكثر</p>
            <h3>من نحن</h3>
            <p>
              شركة شركة الوجيز للإستقدام وباقات التأجير  للاستقدام شركة سعودية مساهمة مغلقة (مقفلة) تأسست
              في عام 2021 م في استقدام العمالة المنزلية في منطقة القصيم بريدة
              بترخيص رقم 74 وقد بدأت بتقديم خدمة الوساطة لاستقدام العمالة
              المنزلية وتسهيل إجراءات الاستقدام ما بين العملاء ووكالات العمل
              الخارجية بإضافة الى هذه الخدمة نقوم بخدمة نقل الخدمات من الشركة
              الى العميل مباشرة ونعمل على تلبية احتياج قطاع الافراد في استقدام
              العمالة المنزلية للعديد من الجنسيات ومختلف المهن لكلا الجنسين وفق
              ما ورد في وزارة العمل والتنمية الاجتماعية ونظل دائما على العمل
              والانجاز السريع وتقديم افضل الخدمات في مجال استقدام العمالة
              والتأجير.
            </p>
          </div>
        </div>
        <div className="flex l3-hero">
          <div className="l1-hero">
            <div>
              <img
                src="/image/l1.svg"
                alt="Vision"
                style={{
                  background: "hsl(204deg 12.66% 30.98%)",

                  padding: "20px",
                  borderRadius: "61px",
                }}
              />
            </div>
            <h2>رؤيتنا</h2>
            <p>
              نسعى في شركة شركة الوجيز للإستقدام وباقات التأجير  للاستقدام لأن نكون الشريك الاستراتيجي
              المفضل لتوفير الكوادر البشرية ذات الكفاءة العالية في المملكة
              العربية السعودية.
            </p>
            <hr className="l3-hr" />
          </div>

          <div className="l1-hero">
            <div>
              <img
                src="/image/l2.svg"
                alt="Mission"
                style={{
                  background: "hsl(204deg 12.66% 30.98%)",
                  padding: "20px",
                  borderRadius: "61px",
                }}
              />
            </div>
            <h2>مهمتنا</h2>
            <p>
              أن نكون الشركة الرائدة في تقديم خدمات العمالة المنزلية من خلال
              التميز في الأداء وتقديم أعلى مستويات الخدمة. تلبية احتياجات
              العملاء: فهم احتياجات عملائنا وتقديم حلول مخصصة تلبي توقعاتهم
            </p>
            <hr className="l2-hr" />
          </div>

          <div className="l1-hero">
            <div>
              <img
                src="/image/l3.svg"
                alt="Professionalism"
                style={{
                  background: "hsl(204deg 12.66% 30.98%)",
                  padding: "20px",
                  borderRadius: "61px",
                }}
              />
            </div>
            <h2>احترافية الأداء</h2>
            <p>
              ضمان تقديم خدمات منزلية متميزة تلبي أعلى معايير الجودة
              والاحترافية. رضا العملاء: التركيز على تحقيق رضا العملاء الكامل من
              خلال تلبية احتياجاتهم وتقديم نتائج تفوق توقعاتهم. توفير كوادر
              بشرية ذات كفاءة عالية.
            </p>
            <hr />
          </div>
        </div>
      </div>

      <div className="class-bg">
        <div style={{ width: "80%", margin: "auto", gap: "0px" }}>
          <div
            style={{
              width: "100%",
              marginTop: "5rem",
              justifyContent: "center",
              color: "white",
            }}
          >
            <h2>خدماتنا</h2>
            <p>خبراء في مجالنا، لذلك يمكننا توفير خدمات مميزة لك</p>
          </div>
          <div className="flex">
            <div
              className="l1-class-bg"
              style={{ height: "25rem", gap: "1rem" }}
            >
              <p>
                تقديم خدمات إيجار العمالة المنزلية مع مرونة في العقود والأسعار
                التنافسية. تأمين العمالة المنزلية من البلدان المصرح بها، مع ضمان
                التزامهم بأعلى معايير الجودة.
              </p>
              <h2>إيجار العاملات</h2>
              <img
                src="/image/0821202411045566c5c9d744f0e.gif"
                alt="Worker rental"
                width={250}
              />
            </div>

            <div
              className="l1-class-bg"
              style={{ height: "25rem", gap: "2rem" }}
            >
              <p>
              توفر شركة شركة الوجيز للإستقدام وباقات التأجير  نقل الخدمات للعملاء لجميع الجنسيات المتوفرة والشروط المطلوبة
              </p>
              <h2> نقل خدمات</h2>
              <img
                src="/image/0821202411031766c5c975cc7b2.gif"
                alt="Comprehensive cleaning"
                width={250}
              />
            </div>

            <div
              className="l1-class-bg"
              style={{ height: "25rem", gap: "1rem" }}
            >
              <p>
              نقوم بتوفير الكوادر العاملة والعاملات من جميع الدول المتاحة ويشمل جميع التخصصات المطلوبة في سوق العمل بحيث تكون كوادر متميزة ومدربة للعمل بكفاءة
              </p>
              <h2> استقدام العاملات</h2>
              <img
                src="/image/0821202411020566c5c92d7be51.gif"
                alt="Home care"
                width={250}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex line-3-bg">
        <div style={{ width: "50%" }} className="imga">
          <h2>نحن نقدم عروض مغرية</h2>
          <p>
            تقديم أسعار تنافسية مع الحفاظ على جودة الخدمة، مما يجعل خدماتنا في
            متناول الجميع. شفافية الأسعار: وضوح وتفصيل الأسعار بدون أي رسوم
            خفية، مما يعزز من ثقة العملاء. سلامة وأمان.
          </p>
          <Link href="/contact">
            <button>تواصل معنا</button>
          </Link>
        </div>
        <div style={{ width: "30%" }} className="imga">
          <img
            src="/image/WhatsApp Image 2024-08-25 at 19.57.59.jpeg"
            alt="Offers"
            width={200}
            className="imga"
          />
        </div>
      </div>

      <div className="flex line-5-bg">
        <div>
          <img src="/image/logo.png" alt="Logo" />
        </div>
        <div>
          <p>
            نسعى في شركة شركة الوجيز للإستقدام وباقات التأجير  لأن نكون الشريك الاستراتيجي المفضل لتوفير
            الكوادر البشرية ذات الكفاءة العالية في المملكة العربية السعودية.
          </p>
          <h3>تحقيق التميز</h3>
          <p>
            ✔ أن نكون الشركة الرائدة في تقديم خدمات العمالة المنزلية من خلال
            التميز في الأداء وتقديم أعلى مستويات الخدمة.
          </p>
          <h3>رضا العملاء</h3>
          <p>
            ✔ التركيز على تحقيق رضا العملاء الكامل من خلال تلبية احتياجاتهم
            وتقديم نتائج تفوق توقعاتهم.
          </p>
          <h3>انتقاء دقيق</h3>
          <p>
            ✔ توفير كوادر بشرية ذات كفاءة عالية من مصادر موثوقة، واتباع عملية
            انتقاء دقيقة لضمان جودة العمالة.
          </p>
        </div>
      </div>

      <div className="flex bg-box">
        {renderBox(recruitmentCount, " دول الإستقدام", "/recruitment-countries")}
        {renderBox(rentalCount, "دول الايجار", "/rent-countries")}
      </div>
    </section>
  );
};

export default Hero;
