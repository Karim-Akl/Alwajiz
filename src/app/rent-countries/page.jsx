import React from 'react';
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import './rent-countries.css';
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon"

import countriesData from '../../data/countries.json';
import Link from "next/link";

const CountryList = ({ title, description, countries }) => (
  <>
    <div className='bg-count'>
      <WhatsappIcon/>
      <div className='count-class'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>

    <div className='bg-count-class'>
      <div className='count'>
        {countries.map((country) => (
          <div key={country.id}>
            <img src={country.image} alt={country.name} />
            <p>{country.name}</p>
            <button><Link href={`/country-details/${country.id}`}>المزيد</Link></button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  </>
);

const Page = () => {
  return (
    <section>
      <Header />
      <CountryList
        title="دول الايجار"
        description="تعرف علي كافه التفاصيل"
        countries={countriesData}
      />
      <Footer />
    </section>
  );
}

export default Page;