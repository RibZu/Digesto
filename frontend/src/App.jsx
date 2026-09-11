import Header from './shared/layout/Header'
import Footer from './shared/layout/Footer'
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <div className="content-placeholder">
          <h2>Digesto Administrativo UNSL</h2>
          <p>Área de contenido principal</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
