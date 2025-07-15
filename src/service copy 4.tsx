import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const DeckingInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="tigla-metalica-info-page">
      <button className="back-button" onClick={() => navigate("/")}>← Înapoi</button>
      <div className="tigla-metalica-header">
        <h1>Decking</h1>
        <p className="tigla-metalica-subtitle">
          Pardoseli exterioare moderne, rezistente și estetice pentru terase și grădini.
        </p>
      </div>
      <div className="tigla-metalica-content">
        <section>
          <h2>Ce este decking-ul?</h2>
          <p>
            Decking-ul reprezintă soluția ideală pentru amenajarea teraselor, grădinilor sau piscinelor, fiind realizat din materiale rezistente la intemperii, precum lemnul tratat sau compozitul. Oferă un aspect natural, modern și confortabil pentru spațiile exterioare.
          </p>
        </section>
        <section>
          <h2>Avantaje principale</h2>
          <ul>
            <li>Rezistență la apă, UV și variații de temperatură</li>
            <li>Montaj rapid și flexibil</li>
            <li>Aspect natural sau modern</li>
            <li>Întreținere ușoară</li>
            <li>Durabilitate pe termen lung</li>
            <li>Antiderapant și sigur</li>
            <li>Gama variată de culori și texturi</li>
          </ul>
        </section>
        <section>
          <h2>Utilizare</h2>
          <p>
            Decking-ul se folosește pentru terase, alei, piscine, balcoane, foișoare sau spații comerciale exterioare. Este potrivit atât pentru proiecte rezidențiale, cât și pentru cele publice.
          </p>
          <ul>
            <li>Terase și grădini</li>
            <li>Piscine și spații de relaxare</li>
            <li>Balcoane și foișoare</li>
            <li>Spații comerciale exterioare</li>
          </ul>
        </section>
        <section>
          <h2>De ce să alegi decking?</h2>
          <p>
            Decking-ul oferă confort, siguranță și un aspect plăcut spațiului exterior. Este ușor de întreținut și rezistă foarte bine la uzură și intemperii.
          </p>
        </section>
        <section>
          <h2>Întreținere și durabilitate</h2>
          <p>
            Decking-ul necesită întreținere minimă, curățare periodică și, în cazul lemnului, tratare ocazională pentru menținerea aspectului. Materialele compozite nu necesită tratamente speciale.
          </p>
        </section>
        <section>
          <h2>Mituri despre decking</h2>
          <ul>
            <li><strong>Se degradează rapid:</strong> Materialele moderne sunt foarte rezistente.</li>
            <li><strong>Este greu de întreținut:</strong> Întreținerea este simplă și rapidă.</li>
          </ul>
        </section>
        <section>
          <h2>Recomandări pentru montaj</h2>
          <p>
            Montajul trebuie realizat pe o structură solidă, cu accesorii dedicate. Se recomandă instalarea de către profesioniști pentru rezultate optime.
          </p>
        </section>
        <section>
          <h2>Integrare arhitecturală</h2>
          <p>
            Decking-ul se potrivește atât în proiecte moderne, cât și clasice, oferind un plus de valoare estetică și funcțională spațiului exterior.
          </p>
        </section>
        <section>
          <h2>Consultanță și suport</h2>
          <p>
            Oferim consultanță pentru alegerea tipului de decking potrivit și suport tehnic la montaj.
          </p>
        </section>
        <section>
          <h2>Concluzie</h2>
          <p>
            Decking-ul este soluția ideală pentru amenajarea spațiilor exterioare, oferind rezistență, confort și estetică.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DeckingInfo;