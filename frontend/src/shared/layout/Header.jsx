import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="digesto-header">
   
      <div className="header-top-bar">
        <div className="header-container top-bar-content">
          <span className="institution-name">Universidad Nacional de San Luis</span>
          <div className="top-nav-links">
            <a 
              href="http://www.unsl.edu.ar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="top-link"
            >
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Portal UNSL
            </a>
            <span className="divider">•</span>
            <a 
              href="https://webmail.unsl.edu.ar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="top-link"
            >
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Correo Institucional
            </a>
          </div>
        </div>
      </div>

 
      <div className="header-main-bar">
        <div className="header-container main-bar-content">
       
          <div className="brand-group">
            <div className="brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="14" y2="10" />
              </svg>
            </div>
            <div className="brand-text">
              <div className="brand-title-row">
                <h1 className="brand-title">DIGESTO</h1>
                <span className="brand-badge">Administrativo</span>
              </div>
              <p className="brand-subtitle">Sistema de Consulta y Gestión Normativa UNSL</p>
            </div>
          </div>

      
          <nav className="header-actions">
            <a href="http://digesto.unsl.edu.ar/dig-v20.html" className="btn-header btn-primary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Búsqueda de Normas
            </a>
            <a href="http://digesto.unsl.edu.ar/menu-ayuda.html" className="btn-header btn-ghost">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Ayuda
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
