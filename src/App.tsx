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

function App() {

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
          <div className='Gallery-row'>
            <div className='Gallery-column'>
              <img src="" alt="" />
            </div>
            <div className='Gallery-column'>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className='Gallery-column'>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default App
