import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="digesto-footer">
      <div className="footer-container">
       
        <div className="footer-main-grid">
     
          <div className="footer-col-brand">
            <div className="footer-brand-title">
              <span className="footer-highlight">DIGESTO</span> ADMINISTRATIVO
            </div>
            <p className="footer-brand-desc">
              Repositorio oficial de resoluciones, ordenanzas y normativas de la{' '}
              <a 
                href="http://www.unsl.edu.ar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-unsl-link"
              >
                Universidad Nacional de San Luis
              </a>.
            </p>
          </div>

      
          <div className="footer-col-contacts">
            <h4 className="footer-heading">Contacto y Administración</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-role">Administración:</span>
                <a href="mailto:lruiz@unsl.edu.ar" className="contact-link">
                  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Laura Victoria Ruiz
                </a>
              </li>
              <li>
                <span className="contact-role">Soporte Técnico:</span>
                <a href="mailto:aversa@unsl.edu.ar" className="contact-link">
                  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  DGIUNSL
                </a>
              </li>
            </ul>
          </div>

    
          <div className="footer-col-meta">
            <h4 className="footer-heading">Sistema</h4>
            <div className="version-pill">
              <span className="version-dot"></span>
              Versión: <strong>3.0</strong>
            </div>
            <div className="footer-quick-links">
              <a href="http://digesto.unsl.edu.ar/menu-ayuda.html" className="footer-sublink">
                Ayuda del Sistema
              </a>
              <a href="http://digesto.unsl.edu.ar/digesto.html" className="footer-sublink">
                ¿Qué es un Digesto?
              </a>
            </div>
          </div>
        </div>

     
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2026–{currentYear}{' '}
            <a 
              href="http://www.unsl.edu.ar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="copyright-unsl"
            >
              Universidad Nacional de San Luis
            </a>{' '}
            — Todos los Derechos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
