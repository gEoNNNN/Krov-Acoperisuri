import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const TiglaCeramicaInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="tigla-metalica-info-page">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Înapoi
      </button>
      <div className="tigla-metalica-header">
        <h1>Țiglă Ceramică</h1>
        <p className="tigla-metalica-subtitle">
          Eleganță, tradiție și durabilitate pentru acoperișuri de excepție.
        </p>
      </div>
      <div className="tigla-metalica-content">
        <section>
          <h2>Ce este țigla ceramică?</h2>
          <p>
            Țigla ceramică este unul dintre cele mai vechi și apreciate materiale pentru acoperișuri, obținută prin arderea argilei naturale la temperaturi ridicate. Acest proces îi conferă rezistență, aspect distinct și o durată de viață foarte mare. Țigla ceramică se remarcă prin eleganță, fiind potrivită atât pentru case tradiționale, cât și pentru proiecte moderne.
          </p>
        </section>
        <section>
          <h2>Avantaje principale</h2>
          <ul>
            <li>Durabilitate excepțională, de peste 100 de ani</li>
            <li>Rezistență la îngheț, foc și raze UV</li>
            <li>Izolare termică și fonică superioară</li>
            <li>Aspect natural și elegant</li>
            <li>Material ecologic, 100% natural</li>
            <li>Întreținere minimă</li>
            <li>Nu se decolorează în timp</li>
            <li>Potrivită pentru orice tip de acoperiș</li>
          </ul>
        </section>
        <section>
          <h2>Utilizare</h2>
          <p>
            Țigla ceramică este ideală pentru acoperișuri de case, vile, clădiri istorice, pensiuni, biserici, dar și pentru construcții moderne care doresc un aspect autentic și rafinat. Se folosește atât la proiecte noi, cât și la restaurări, fiind apreciată pentru rezistența și estetica sa.
          </p>
          <ul>
            <li>Acoperișuri rezidențiale</li>
            <li>Clădiri istorice și monumente</li>
            <li>Pensiuni, hoteluri, biserici</li>
            <li>Renovări și restaurări</li>
          </ul>
        </section>
        <section>
          <h2>De ce să alegi țigla ceramică?</h2>
          <p>
            Alegerea țiglei ceramice înseamnă investiție într-un acoperiș cu personalitate, care rezistă generații întregi. Oferă protecție excelentă împotriva factorilor de mediu, izolează termic și fonic, și conferă casei un aspect deosebit. Este soluția ideală pentru cei care apreciază tradiția, calitatea și estetica naturală.
          </p>
        </section>
        <section>
          <h2>Întreținere și durabilitate</h2>
          <p>
            Țigla ceramică necesită o întreținere minimă. Este suficientă o verificare periodică a acoperișului și curățarea de frunze sau alte resturi. Materialul nu se degradează, nu se decolorează și nu necesită tratamente speciale, păstrându-și aspectul și proprietățile timp îndelungat.
          </p>
        </section>
        <section>
          <h2>Mituri despre țigla ceramică</h2>
          <ul>
            <li><strong>Este prea grea pentru orice construcție:</strong> Structurile moderne sunt proiectate să suporte greutatea țiglei ceramice.</li>
            <li><strong>Se sparge ușor:</strong> Țigla ceramică de calitate are o rezistență ridicată la șocuri și intemperii.</li>
            <li><strong>Necesită întreținere complicată:</strong> Întreținerea este minimă și simplă.</li>
          </ul>
        </section>
        <section>
          <h2>Recomandări pentru montaj</h2>
          <p>
            Montajul țiglei ceramice trebuie realizat de echipe specializate, cu respectarea tehnologiei de instalare. Este importantă alegerea unei structuri solide și a accesoriilor potrivite pentru o etanșare perfectă și o durată de viață maximă.
          </p>
        </section>
        <section>
          <h2>Integrare arhitecturală</h2>
          <p>
            Țigla ceramică se potrivește perfect atât pe case tradiționale, cât și pe construcții moderne, oferind un aspect natural, elegant și autentic. Este disponibilă în diverse forme și culori, pentru a se adapta oricărui proiect.
          </p>
        </section>
        <section>
          <h2>Consultanță și suport</h2>
          <p>
            Echipa noastră oferă consultanță gratuită pentru alegerea tipului de țiglă ceramică potrivită proiectului tău, precum și suport tehnic pe tot parcursul procesului de montaj. Ne asigurăm că fiecare client primește informații clare despre avantajele, utilizarea și întreținerea acestui material, pentru o alegere informată și sigură.
          </p>
        </section>
        <section>
          <h2>Concluzie</h2>
          <p>
            Țigla ceramică este alegerea perfectă pentru cei care doresc un acoperiș durabil, elegant și ecologic. Oferă protecție, izolare și un aspect deosebit, fiind recomandată atât pentru proiecte noi, cât și pentru restaurări.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TiglaCeramicaInfo;