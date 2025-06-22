import './App.css';
import background1 from './assets/Group 42.png';
import background2 from './assets/Cojusna 7 1.png';
import logo from "./assets/Logo Krov 1.png";
import heroline from "./assets/Line 3.png"
import aboutusline from "./assets/Line 2.png"
import aboutusimage from "./assets/IMG-057cfa42c102590805aac385f53cbbf4-V 1.png"
import aboutusblueimage from "./assets/Group 43.png"
import secrivesbg from "./assets/Group 55.png"
import servicecard1 from "./assets/Rectangle 41.png"
import servicecard2 from "./assets/Group 45.png"
import servicecard3 from "./assets/image.png"
import galleryline from "./assets/Line 4 (1).png"
import gallerryimage1 from "./assets/Rectangle 47.png"
import gallerryimage2 from "./assets/Rectangle 48.png"
import gallerryimage3 from "./assets/Rectangle 49.png"
import gallerryimage4 from "./assets/Rectangle 50.png"
import gallerryimage5 from "./assets/Rectangle 51.png"
import gallerryimage6 from "./assets/Rectangle 52.png"
import FAQvector from "./assets/Vector 3.png"
import plus from "./assets/+.png"
import { useState } from "react";

function App() {
  // FAQ data
  const faqData = [
    {
      question: "Oferiți consultanță gratuită?",
      answer: "Da, oferim consultanță gratuită pentru toate proiectele dumneavoastră."
    },
    {
      question: "Ce garanție oferiți pentru lucrări?",
      answer: "Oferim garanție de până la 10 ani pentru lucrările executate."
    },
    {
      question: "Pot cumpăra doar materialele fără montaj?",
      answer: "Da, puteți achiziționa doar materialele fără serviciul de montaj."
    },
    {
      question: "Lucrați și cu persoane juridice (companii)?",
      answer: "Da, colaborăm atât cu persoane fizice, cât și cu companii."
    },
    {
      question: "Cum pot cere o ofertă?",
      answer: "Ne puteți contacta telefonic sau prin formularul de pe site pentru o ofertă personalizată."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <div className='Hero'>
        <div className='Hero-background'>
          <img src={background1}  className='Hero-background-image1' />
          <img src={background2}  className='Hero-background-image2' />
        </div>
        <div className='Hero-logo'>
          <div className='Hero-logo-bg'></div>
          <img src={logo} className='Hero-logo-image' />
        </div>
        <div className='Hero-text'>
          <img src={heroline} className='Hero-text-line' />
          <h1 className='Hero-text-title-one'>Expertiză în</h1>
          <h1 className='Hero-text-title-two'>fiecare șurub</h1>
          <h1 className='Hero-text-title-three'>
            <span className="bold">Soluții</span> complete pentru <span className="bold">case</span> și <span className="bold">afaceri.</span>
          </h1>
          <button className='Hero-text-button'>Produsele Noastre</button>
        </div>
        </div>
        <div className='AboutUs'>
          <h1 className='AboutUs-title'>Cine <span className="bold-aboutus">Suntem Noi?</span></h1>
          <h1 className='AboutUs-description-one'>Krov Acoperișuri este o companie fondată și condusă de Friiuc Andrian și Papuc Marcel, profesioniști dedicați în domeniul construcțiilor și sistemelor de acoperiș. Cu sediul juridic în Chișinău, str. Bogdan Voievod 10/1, și biroul nostru operațional pe stradela Studenților 2/4, oferim servicii complete și materiale de înaltă calitate pentru acoperișuri și garduri, pe întreg teritoriul Republicii Moldova.</h1>
          <h1 className='AboutUs-description-two'>Activitatea noastră se concentrează pe:</h1>
          <ul className='AboutUs-description-three'>
            <li>construcția și reparația acoperișurilor,</li>
            <li>instalarea sistemelor de streașină și scurgere,</li>
            <li>precum și comercializarea materialelor aferente.</li>
          </ul>
          <img src={aboutusline} className='AboutUS-line' />
          <img src={aboutusimage} className='AboutUS-image' />
          <img src={aboutusblueimage} className='AboutUS-image-blue' />
          <button className='AboutUS-button'>Galerie</button>
        </div>
        <div className='Services'>
          <img src={secrivesbg} className='Services-bg' />
          <h1 className='Services-company'>Krov Acoperișuri</h1>
          <h1 className='Services-title'><span className="bold-aboutus">Produse </span> & Servicii</h1>
          <ul className='Services-list'>
            <li className='Services-card'>
              <div className='Services-card-border'><h1 className='Services-card-text'>Țiglă metalică</h1></div>
              <img src={servicecard1} className='Services-card-image' />
            </li>
            <li className='Services-card'>
              <div className='Services-card-border'><h1 className='Services-card-text'>Țiglă ceramică</h1></div>
              <img src={servicecard2} className='Services-card-image' />
            </li>
            <li className='Services-card'>
              <div className='Services-card-border'>
                <h1 className='Services-card-text'>Streașini personalizate</h1>
              </div>
              <img src={servicecard3} className='Services-card-image' />
            </li>
          </ul>
          <button className='Service-button'>Află mai mult</button>
        </div>
        <div className='Gallery'>
          <h1 className='Gallery-title'>Galerie</h1>
          <img src={aboutusline} className='Gallery-line' />
          <h1 className='Gallery-description'>Descoperă proiectele noastre finalizate, realizate cu grijă, precizie și materiale de top.</h1>
          <img src={galleryline} className='Gallery-line-two' />
          <div className='Gallery-list'>
            <img src={gallerryimage1} alt="" className="Gallery-img1" />
            <img src={gallerryimage2} alt="" className="Gallery-img2" />
            <img src={gallerryimage3} alt="" className="Gallery-img3" />
            <img src={gallerryimage4} alt="" className="Gallery-img4" />
            <img src={gallerryimage5} alt="" className="Gallery-img5" />
            <img src={gallerryimage6} alt="" className="Gallery-img6" />
            <button className='Gallery-button'>Vezi mai mult</button>
          </div>
        </div>
        <div className='FAQ'>
          <h1 className='FAQ-title'>FAQ's</h1>
          <img src={aboutusline} className='FAQ-line' />
          <img src={FAQvector} className='FAQ-vector' />
          <ul className='FAQ-list'>
            {faqData.map((faq, idx) => (
              <li
                key={faq.question}
                className={`FAQ-question-one${openIndex === idx ? " open" : ""}`}
                onClick={() => handleToggle(idx)}
                style={{
                  background: openIndex === idx ? "#17405a" : "#2C5B7C",
                  transition: "background 0.25s, min-height 0.25s",
                  minHeight: openIndex === idx ? "8vw" : "auto"
                }}
              >
                <span className="FAQ-icon">
                  <img
                    src={plus}
                    style={{
                      transition: "transform 0.2s, opacity 0.2s",
                      opacity: openIndex === idx ? 0 : 1,
                    }}
                  />
                  {openIndex === idx && (
                    <span className="minus-bar" />
                  )}
                </span>
                <div style={{ flex: 1 }}>
                  <h1>{faq.question}</h1>
                  {openIndex === idx && (
                    <div className="FAQ-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default App