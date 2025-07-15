import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const TiglaMetalicaInfo: React.FC = () => {
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
        <h1>Țiglă Metalică</h1>
        <p className="tigla-metalica-subtitle">
          Soluție modernă, sigură și estetică pentru acoperișuri rezidențiale și industriale.
        </p>
      </div>
      <div className="tigla-metalica-content">
        <section>
          <h2>Ce este țigla metalică?</h2>
          <p>
            Țigla metalică reprezintă una dintre cele mai populare opțiuni pentru acoperișurile moderne, fiind realizată din oțel profilat și acoperită cu straturi de protecție anticorozivă și vopsea. Datorită aspectului său elegant și gamei variate de culori, se integrează ușor în orice stil arhitectural, de la case tradiționale la clădiri comerciale sau industriale.
          </p>
        </section>
        <section>
          <h2>Avantaje principale</h2>
          <ul>
            <li>Durabilitate ridicată și rezistență la intemperii</li>
            <li>Montaj rapid și eficient</li>
            <li>Gama largă de culori și forme disponibile</li>
            <li>Aspect modern și elegant</li>
            <li>Întreținere minimă pe termen lung</li>
            <li>Compatibilitate cu diverse tipuri de construcții</li>
            <li>Nu favorizează dezvoltarea mucegaiului sau a altor microorganisme</li>
            <li>Rezistență la foc și la variații de temperatură</li>
          </ul>
        </section>
        <section>
          <h2>Utilizare</h2>
          <p>
            Țigla metalică este potrivită pentru acoperișuri de case, vile, blocuri, hale industriale, spații comerciale, garaje, depozite și alte construcții unde se dorește o soluție modernă, sigură și estetică. Se folosește atât la proiecte noi, cât și la renovări, fiind ușor de adaptat la diverse forme și dimensiuni ale acoperișului.
          </p>
          <ul>
            <li>Acoperișuri rezidențiale</li>
            <li>Clădiri comerciale și industriale</li>
            <li>Garaje, anexe, depozite</li>
            <li>Renovări și reabilitări de acoperișuri vechi</li>
          </ul>
        </section>
        <section>
          <h2>De ce să alegi țigla metalică?</h2>
          <p>
            Alegerea țiglei metalice pentru acoperișul tău înseamnă investiție într-o soluție durabilă, cu aspect plăcut și costuri reduse de întreținere. Este ideală pentru cei care doresc protecție pe termen lung, montaj rapid și flexibilitate în design. Datorită tehnologiilor moderne de producție, țigla metalică oferă o izolare eficientă și o rezistență sporită la factorii de mediu.
          </p>
        </section>
        <section>
          <h2>Întreținere și durabilitate</h2>
          <p>
            Țigla metalică necesită o întreținere minimă comparativ cu alte materiale pentru acoperiș. Este suficientă o verificare periodică a acoperișului pentru a observa eventuale deteriorări sau acumulări de murdărie. Curățarea se poate face cu apă și o perie moale, fără substanțe chimice agresive. Datorită protecției anticorozive, țigla metalică rezistă foarte bine la ploi, zăpadă, vânt puternic și raze UV, păstrându-și culoarea și aspectul pentru mulți ani.
          </p>
        </section>
        <section>
          <h2>Mituri despre țigla metalică</h2>
          <ul>
            <li><strong>Este zgomotoasă la ploaie:</strong> În realitate, cu o izolație corectă, nivelul de zgomot este similar cu alte tipuri de acoperiș.</li>
            <li><strong>Se corodează ușor:</strong> Straturile de protecție moderne asigură o rezistență excelentă la coroziune.</li>
            <li><strong>Nu se potrivește la case tradiționale:</strong> Datorită varietății de culori și forme, țigla metalică poate fi integrată armonios în orice stil arhitectural.</li>
          </ul>
        </section>
        <section>
          <h2>Recomandări pentru montaj</h2>
          <p>
            Pentru rezultate optime, montajul țiglei metalice trebuie realizat de echipe specializate, folosind accesorii și sisteme de fixare dedicate. Este importantă alegerea unei structuri de susținere solide și a unei folii anticondens pentru a preveni acumularea de umiditate. Respectarea instrucțiunilor de montaj și utilizarea materialelor de calitate garantează o durată de viață îndelungată a acoperișului.
          </p>
        </section>
        <section>
          <h2>Integrare arhitecturală</h2>
          <p>
            Țigla metalică se adaptează ușor la proiecte moderne, minimaliste, dar și la construcții clasice sau rustice. Poate fi folosită atât pentru acoperișuri cu pantă mare, cât și pentru cele cu pantă redusă, oferind flexibilitate în design. De asemenea, este potrivită pentru extinderi, garaje, foișoare sau alte anexe, asigurând un aspect uniform și elegant.
          </p>
        </section>
        <section>
          <h2>Consultanță și suport</h2>
          <p>
            Echipa noastră oferă consultanță gratuită pentru alegerea tipului de țiglă metalică potrivită proiectului tău, precum și suport tehnic pe tot parcursul procesului de montaj. Ne asigurăm că fiecare client primește informații clare despre avantajele, utilizarea și întreținerea acestui material, pentru o alegere informată și sigură.
          </p>
        </section>
        <section>
          <h2>Concluzie</h2>
          <p>
            Țigla metalică este o alegere inteligentă pentru acoperișuri durabile, estetice și ușor de întreținut. Indiferent de tipul construcției, acest material oferă protecție, siguranță și un aspect plăcut, fiind recomandat atât pentru proiecte noi, cât și pentru renovări.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TiglaMetalicaInfo;