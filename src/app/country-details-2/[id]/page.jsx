import Header from "../../../components/header/page";
import Footer from "../../../components/footer/page";
import countryDetails from '../../../data/countries-2.json';
import "./philippines.css";
import WhatsappIcon from "@/components/WhatsappIcon/WhatsappIcon";
import { notFound } from 'next/navigation';

const CountryDetails = ({ params }) => {
  const { id } = params;

  // Find the country details by ID
  const country = countryDetails.find(c => c.id === parseInt(id));

  if (!country) {
    // If no country is found, return a 404 page
    notFound();
  }

  return (
    <section style={{ height: "100vh" }} className="section">
      <Header />
      <WhatsappIcon />

      <div className='flex' style={{ gap: "2rem", flexDirection: "column" }}>
        <div className='bac'>
          <div className='text-bac'>
            <h2>{country.name}</h2>
            <p>{country.description}</p>
          </div>
          <div>
            <img src={country.image} alt={country.name} />
          </div>
        </div>
        <div className='flex sss' style={{ gap: "2rem", width: "80%", margin: "auto" }}>
          <div className='img-class-bg'>
            <div>
            </div>
            <span>{country.cost}</span>
            <span>{country.btu}</span>
            <a href={country.link} className="btn-link">{country.btu1}</a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

// This function is used to generate the metadata for the page
export async function generateMetadata({ params }) {
  const { id } = params;
  const country = countryDetails.find(c => c.id === parseInt(id));

  if (!country) {
    return { title: 'Country not found' };
  }

  return {
    title: country.name,
    description: country.description,
  };
}

// Generate static paths for all country details
export async function generateStaticParams() {
  return countryDetails.map((country) => ({
    id: country.id.toString(),
  }));
}

export default CountryDetails;
