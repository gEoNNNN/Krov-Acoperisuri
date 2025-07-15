import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const StreasiniPersonalizateInfo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="tigla-metalica-info-page">
      <button className="back-button" onClick={() => navigate("/")}>← Înapoi</button>
      <div className="tigla-metalica-header">
        <h1>Streașini personalizate</h1>
        <p className="tigla-metalica-subtitle">
          Protecție, design și funcționalitate adaptate fiecărui acoperiș.
        </p>
      </div>
      <div className="tigla-metalica-content">
        <section>
          <h2>Ce sunt streașinile personalizate?</h2>
          <p>
            Streașinile personalizate sunt elemente esențiale pentru protecția acoperișului și a fațadei, realizate la comandă pentru a se potrivi perfect cu designul și dimensiunile construcției. Acestea asigură evacuarea eficientă a apei pluviale, protejează structura și contribuie la estetica generală a casei.
          </p>
        </section>
        <section>
          <h2>Avantaje principale</h2>
          <ul>
            <li>Protecție optimă împotriva infiltrațiilor</li>
            <li>Design adaptat fiecărui proiect</li>
            <li>Materiale rezistente la coroziune</li>
            <li>Montaj rapid și precis</li>
            <li>Durabilitate și întreținere minimă</li>
            <li>Gama variată de culori și forme</li>
            <li>Creșterea valorii estetice a construcției</li>
          </ul>
        </section>
        <section>
          <h2>Utilizare</h2>
          <p>
            Streașinile personalizate se folosesc la orice tip de acoperiș, de la case și vile, la clădiri comerciale sau industriale. Sunt ideale pentru proiecte noi, dar și pentru renovări, asigurând protecție și un aspect modern.
          </p>
          <ul>
            <li>Case și vile</li>
            <li>Clădiri comerciale</li>
            <li>Hale industriale</li>
            <li>Renovări și reabilitări</li>
          </ul>
        </section>
        <section>
          <h2>De ce să alegi streașini personalizate?</h2>
          <p>
            O streașină personalizată oferă protecție maximă, se integrează perfect în arhitectura casei și reduce riscul de deteriorare a fațadei. Este soluția ideală pentru cei care doresc funcționalitate și design adaptat.
          </p>
        </section>
        <section>
          <h2>Întreținere și durabilitate</h2>
          <p>
            Streașinile personalizate necesită întreținere minimă, fiind realizate din materiale rezistente la intemperii. Se recomandă verificarea periodică și curățarea de frunze sau resturi pentru a asigura funcționarea optimă.
          </p>
        </section>
        <section>
          <h2>Mituri despre streașini</h2>
          <ul>
            <li><strong>Toate streașinile sunt la fel:</strong> Personalizarea aduce beneficii funcționale și estetice suplimentare.</li>
            <li><strong>Nu influențează aspectul casei:</strong> Designul streașinii poate schimba radical imaginea fațadei.</li>
          </ul>
        </section>
        <section>
          <h2>Recomandări pentru montaj</h2>
          <p>
            Montajul trebuie realizat de profesioniști, cu accesorii potrivite și respectarea tehnologiei de instalare pentru o durabilitate maximă.
          </p>
        </section>
        <section>
          <h2>Integrare arhitecturală</h2>
          <p>
            Streașinile personalizate se pot adapta oricărui stil arhitectural, de la clasic la modern, oferind un plus de valoare estetică și funcțională.
          </p>
        </section>
        <section>
          <h2>Consultanță și suport</h2>
          <p>
            Oferim consultanță pentru alegerea și proiectarea streașinilor potrivite, precum și suport tehnic la montaj.
          </p>
        </section>
        <section>
          <h2>Concluzie</h2>
          <p>
            Streașinile personalizate sunt soluția ideală pentru protecție, design și funcționalitate, adaptate fiecărui proiect.
          </p>
        </section>
      </div>
    </div>
  );
};

export default StreasiniPersonalizateInfo;