import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Import product pages
import TiglaMetalica from '../src/service copy 1.tsx'
import TiglaCeramica from '../src/service copy 2.tsx'
import StreaSiniPersonalizate from '../src/service copy 3.tsx'
import Decking from '../src/service copy 4.tsx'
import SindrilaBituminoasa from '../src/service copy 5.tsx'
import LemnPentruAcoperis from '../src/service copy 6.tsx'
import SistemeDeFixare from '../src/service copy 7.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tigla-metalica" element={<TiglaMetalica />} />
        <Route path="/tigla-ceramica" element={<TiglaCeramica />} />
        <Route path="/streasini-personalizate" element={<StreaSiniPersonalizate />} />
        <Route path="/decking" element={<Decking />} />
        <Route path="/sindrila-bituminoasa" element={<SindrilaBituminoasa />} />
        <Route path="/lemn-pentru-acoperis" element={<LemnPentruAcoperis />} />
        <Route path="/sisteme-de-fixare" element={<SistemeDeFixare />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
