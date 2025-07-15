import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const LemnPentruAcoperisInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="tigla-metalica-info-page">
      <button className="back-button" onClick={() => navigate("/")}>← Înapoi</button>
      <div className="tigla-metalica-header">
        <h1>Lemn pentru acoperiș</h1>
        <p className="tigla-metalica-subtitle">
          Material natural, durabil și versatil pentru structuri de acoperiș.
        </p>
      </div>
      <div className="tigla-metalica-content">
        <section>
          <h2>Ce este lemnul pentru acoperiș?</h2>
          <p>
            Lemnul pentru acoperiș este folosit la realizarea structurii de rezistență a acoperișului, fiind un material natural, flexibil și durabil. Se utilizează grinzi, căpriori, șipci și alte elemente din lemn tratat pentru protecție și rezistență.
          </p>
        </section>
        <section>
          <h2>Avantaje principale</h2>
          <ul>
            <li>Rezistență și flexibilitate</li>
            <li>Material ecologic și regenerabil</li>
            <li>Montaj ușor și rapid</li>
            <li>Durabilitate pe termen lung</li>
            <li>Adaptabilitate la orice proiect</li>
            <li>Izolare termică naturală</li>
            <li>Aspect plăcut și natural</li>
          </ul>
        </section>
        <section>
          <h2>Utilizare</h2>
          <p>
            Lemnul se folosește pentru structura acoperișului la case, vile, cabane, anexe, dar și la proiecte industriale sau comerciale.
          </p>
          <ul>
            <li>Case și vile</li>
            <li>Cabane și pensiuni</li>
            <li>Clădiri comerciale</li>
            <li>Hale industriale</li>
          </ul>
        </section>
        <section>
          <h2>De ce să alegi lemnul pentru acoperiș?</h2>
          <p>
            Lemnul oferă rezistență, flexibilitate și un aspect natural, fiind ideal pentru structuri solide și durabile.
          </p>
        </section>
        <section>
          <h2>Întreținere și durabilitate</h2>
          <p>
            Lemnul tratat rezistă la umiditate, insecte și ciuperci. Se recomandă verificarea periodică și tratarea suplimentară dacă este necesar.
          </p>
        </section>
        <section>
          <h2>Mituri despre lemn</h2>
          <ul>
            <li><strong>Se degradează rapid:</strong> Lemnul tratat are o durată de viață foarte mare.</li>
            <li><strong>Nu este suficient de rezistent:</strong> Structurile moderne din lemn sunt foarte solide.</li>
          </ul>
        </section>
        <section>
          <h2>Recomandări pentru montaj</h2>
          <p>
            Montajul trebuie realizat de profesioniști, cu materiale tratate și accesorii potrivite pentru o durabilitate maximă.
          </p>
        </section>
        <section>
          <h2>Integrare arhitecturală</h2>
          <p>
            Lemnul se potrivește atât în proiecte tradiționale, cât și moderne, oferind un aspect cald și natural.
          </p>
        </section>
        <section>
          <h2>Consultanță și suport</h2>
          <p>
            Oferim consultanță pentru alegerea tipului de lemn potrivit și suport tehnic la montaj.
          </p>
        </section>
        <section>
          <h2>Concluzie</h2>
          <p>
            Lemnul pentru acoperiș este alegerea naturală pentru structuri rezistente și estetice.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LemnPentruAcoperisInfo;