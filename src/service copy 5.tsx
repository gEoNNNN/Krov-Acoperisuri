import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const SindrilaBituminoasaInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="tigla-metalica-info-page">
      <button className="back-button" onClick={() => navigate("/")}>← Înapoi</button>
      <div className="tigla-metalica-header">
        <h1>Șindrilă bituminoasă</h1>
        <p className="tigla-metalica-subtitle">
          Soluție flexibilă și economică pentru acoperișuri variate.
        </p>
      </div>
      <div className="tigla-metalica-content">
        <section>
          <h2>Ce este șindrila bituminoasă?</h2>
          <p>
            Șindrila bituminoasă este un material modern pentru acoperișuri, realizat din bitum armat cu fibre și acoperit cu granule minerale. Este flexibilă, ușoară și se adaptează la forme complexe ale acoperișului.
          </p>
        </section>
        <section>
          <h2>Avantaje principale</h2>
          <ul>
            <li>Montaj rapid și ușor</li>
            <li>Flexibilitate pentru forme complexe</li>
            <li>Rezistență la apă și UV</li>
            <li>Greutate redusă</li>
            <li>Costuri accesibile</li>
            <li>Gama variată de culori și modele</li>
            <li>Întreținere minimă</li>
          </ul>
        </section>
        <section>
          <h2>Utilizare</h2>
          <p>
            Șindrila bituminoasă se folosește pentru acoperișuri rezidențiale, cabane, foișoare, garaje, dar și pentru construcții cu forme atipice.
          </p>
          <ul>
            <li>Case și cabane</li>
            <li>Foișoare și anexe</li>
            <li>Garaje</li>
            <li>Acoperișuri complexe</li>
          </ul>
        </section>
        <section>
          <h2>De ce să alegi șindrila bituminoasă?</h2>
          <p>
            Este o soluție economică, ușor de montat și adaptabilă la orice proiect, oferind protecție și estetică.
          </p>
        </section>
        <section>
          <h2>Întreținere și durabilitate</h2>
          <p>
            Șindrila bituminoasă necesită verificări periodice și curățare de resturi. Materialul rezistă bine la intemperii și nu necesită tratamente speciale.
          </p>
        </section>
        <section>
          <h2>Mituri despre șindrilă</h2>
          <ul>
            <li><strong>Nu rezistă la intemperii:</strong> Materialele moderne sunt foarte rezistente.</li>
            <li><strong>Este greu de montat:</strong> Montajul este rapid și simplu.</li>
          </ul>
        </section>
        <section>
          <h2>Recomandări pentru montaj</h2>
          <p>
            Montajul trebuie realizat pe o suprafață plană, cu accesorii dedicate și respectarea instrucțiunilor producătorului.
          </p>
        </section>
        <section>
          <h2>Integrare arhitecturală</h2>
          <p>
            Șindrila bituminoasă se potrivește atât pe case moderne, cât și tradiționale, oferind un aspect plăcut și protecție.
          </p>
        </section>
        <section>
          <h2>Consultanță și suport</h2>
          <p>
            Oferim consultanță pentru alegerea tipului potrivit de șindrilă și suport tehnic la montaj.
          </p>
        </section>
        <section>
          <h2>Concluzie</h2>
          <p>
            Șindrila bituminoasă este o alegere practică și economică pentru acoperișuri variate.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SindrilaBituminoasaInfo;