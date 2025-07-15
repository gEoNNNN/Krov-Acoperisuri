import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const SistemeDeFixareInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="tigla-metalica-info-page">
      <button className="back-button" onClick={() => navigate("/")}>← Înapoi</button>
      <div className="tigla-metalica-header">
        <h1>Sisteme de fixare</h1>
        <p className="tigla-metalica-subtitle">
          Accesorii esențiale pentru montaj sigur și durabil al acoperișului.
        </p>
      </div>
      <div className="tigla-metalica-content">
        <section>
          <h2>Ce sunt sistemele de fixare?</h2>
          <p>
            Sistemele de fixare includ toate accesoriile necesare pentru montarea corectă și sigură a materialelor de acoperiș: șuruburi, cleme, profile, garnituri și alte elemente specializate.
          </p>
        </section>
        <section>
          <h2>Avantaje principale</h2>
          <ul>
            <li>Montaj sigur și rapid</li>
            <li>Durabilitate și rezistență la intemperii</li>
            <li>Compatibilitate cu diverse materiale</li>
            <li>Prevenirea infiltrațiilor</li>
            <li>Gama variată de accesorii</li>
            <li>Ușurință la întreținere</li>
            <li>Costuri reduse pe termen lung</li>
          </ul>
        </section>
        <section>
          <h2>Utilizare</h2>
          <p>
            Sisteme de fixare se folosesc la montajul țiglei metalice, ceramice, șindrilei, panourilor de decking și a altor materiale pentru acoperiș.
          </p>
          <ul>
            <li>Acoperișuri rezidențiale</li>
            <li>Clădiri comerciale</li>
            <li>Hale industriale</li>
            <li>Anexe și garaje</li>
          </ul>
        </section>
        <section>
          <h2>De ce să alegi sisteme de fixare de calitate?</h2>
          <p>
            Accesoriile de fixare de calitate asigură siguranța, durabilitatea și etanșeitatea acoperișului, prevenind problemele pe termen lung.
          </p>
        </section>
        <section>
          <h2>Întreținere și durabilitate</h2>
          <p>
            Sistemele de fixare necesită verificări periodice și înlocuire dacă este necesar. Materialele moderne rezistă la coroziune și uzură.
          </p>
        </section>
        <section>
          <h2>Mituri despre sisteme de fixare</h2>
          <ul>
            <li><strong>Toate accesoriile sunt la fel:</strong> Calitatea influențează direct durabilitatea acoperișului.</li>
            <li><strong>Nu contează ce folosești:</strong> Accesoriile nepotrivite pot cauza infiltrații și deteriorări.</li>
          </ul>
        </section>
        <section>
          <h2>Recomandări pentru montaj</h2>
          <p>
            Montajul trebuie realizat cu accesorii dedicate, respectând instrucțiunile producătorului pentru siguranță maximă.
          </p>
        </section>
        <section>
          <h2>Integrare arhitecturală</h2>
          <p>
            Sisteme de fixare moderne sunt discrete și se integrează perfect în orice proiect, asigurând funcționalitate și estetică.
          </p>
        </section>
        <section>
          <h2>Consultanță și suport</h2>
          <p>
            Oferim consultanță pentru alegerea accesoriilor potrivite și suport tehnic la montaj.
          </p>
        </section>
        <section>
          <h2>Concluzie</h2>
          <p>
            Sisteme de fixare de calitate sunt esențiale pentru un acoperiș sigur, durabil și estetic.
          </p>
        </section>
      </div>
    </div>
  );
}

export default SistemeDeFixareInfo;