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
import gallerryimage from "./assets/Group 68.png"
import FAQvector from "./assets/Vector 3.png"
import plus from "./assets/+.png"
import footercard from "./assets/Group 67.png"
import { useState, useEffect } from "react";
import facebook from "./assets/ic_baseline-facebook.png"
import instagram from "./assets/mdi_instagram.png"
import tiktok from "./assets/ic_baseline-tiktok.png"
import footerline from "./assets/Line 16 (1).png"
import mobilegallery from "./assets/mobilegallery.png"
import mobilefooter from "./assets/mobilefooter.png"
import LiveChat from "./LiveChat";
import PhoneIcon from "./assets/material-symbols_call.png"


function App() {
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

  // Add this state for mobile card index
  const [mobileCardIndex, setMobileCardIndex] = useState(0);

  // Cycle cards every 5 seconds on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setMobileCardIndex((prev) => (prev + 1) % 3); // 3 cards
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='Hero'>
        <div className='Hero-background'>
          <img src={background1}  className='Hero-background-image1' />
          <img src={background2}  className='Hero-background-image2' />
        </div>
        <div className='navbar'>
          <ul className='navbar-list'>
            <li className='navbar-list-item'><a href="#">Acasă</a></li>
            <li className='navbar-list-item'><a href="#">Companie</a></li>
            <li className='navbar-list-item'><a href="#">Produse & Servicii</a></li>
            <li className='navbar-list-item'><a href="#">Galerie</a></li>
            <li className='navbar-list-item'><a href="#">FAQ</a></li>
            <li className='navbar-list-item'><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-phone-number">
          <img src={PhoneIcon} className="navbar-phone-icon" alt="Phone" />
          <span className="navbar-phone-text">(+373) 686-26-333</span>
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
          <img src={aboutusimage} className="AboutUS-image" />
          <img src={aboutusblueimage} className="AboutUS-image-blue" />
          <button className='AboutUS-button'>Galerie</button>
        </div>
        <div className='Services'>
          <img src={secrivesbg} className='Services-bg' />
          <h1 className='Services-company'>Krov Acoperișuri</h1>
          <h1 className='Services-title'><span className="bold-aboutus">Produse </span> & Servicii</h1>
          <ul className='Services-list'>
            {[
              {
                text: "Țiglă metalică",
                img: servicecard1,
              },
              {
                text: "Țiglă ceramică",
                img: servicecard2,
              },
              {
                text: "Streașini personalizate",
                img: servicecard3,
              },
            ].map((card, idx) => (
              <li
                className='Services-card'
                key={card.text}
                style={
                  window.innerWidth < 640
                    ? { display: mobileCardIndex === idx ? "flex" : "none" }
                    : {}
                }
              >
                <div className='Services-card-border'>
                  <h1 className='Services-card-text'>{card.text}</h1>
                </div>
                <img src={card.img} className='Services-card-image' />
              </li>
            ))}
          </ul>
          {/* Dots */}
          {window.innerWidth < 640 && (
            <div className="Services-dots">
              {[0, 1, 2].map((idx) => (
                <span
                  key={idx}
                  className={`Services-dot${mobileCardIndex === idx ? " active" : ""}`}
                  onClick={() => setMobileCardIndex(idx)}
                />
              ))}
            </div>
          )}
          <button className='Service-button'>Află mai mult</button>
        </div>
        <div className='Gallery'>
          <h1 className='Gallery-title'>Galerie</h1>
          <img src={aboutusline} className='Gallery-line' />
          <h1 className='Gallery-description'>Descoperă proiectele noastre finalizate, realizate cu grijă, precizie și materiale de top.</h1>
          <img src={galleryline} className='Gallery-line-two' />
          <div className='Gallery-list'>
              <img src={mobilegallery} className="Gallery-mobile-image" />
              <img src={gallerryimage} className='Gallery-list-image' />
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
        <div className='Footer'>
          <img src={footercard} className='Footer-bg'/>
          <img src={mobilefooter} className='Footer-mobile-bg'/>
          <h1 className='Footer-text'>Contactați-ne pentru Assistență</h1>
          <button className='Footer-button'>Sunați</button>
          <ul className='Footer-socials'>
            <li className='Footer-socials-facebook'><a href="#"><img src={facebook} alt="" /></a></li>
            <li className='Footer-socials-instagram'><a href="#"><img src={instagram} alt="" /></a></li>
            <li className='Footer-socials-tiktok'><a href="#"><img src={tiktok} alt="" /></a></li>
          </ul>
          <h1 className='Footer-links'>Linkuri</h1>
          <ul className='Footer-links-list'>
            <li><a href="#">Acasa</a></li>
            <li><a href="#">Companie</a></li>
            <li><a href="#">Produse & Servicii</a></li>
            <li><a href="#">Galerie</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <img src={footerline} className='Footer-line' />
          <h1 className='Footer-Copyright'>Copyright © 2019 All rights reserved  by Krov Acoperișuri</h1>
      </div>
      <LiveChat />
    </>
  )
}

export default App