import './App.css'
import MainImg from './components/MainImg'
import Header from './components/Header'
import CatCounterApp from './components/CatCounterApp'

function App() {
  return (
    <>
      <div>
        <MainImg />
      </div>
      <Header />
      <div className="card">
        <CatCounterApp />
      </div>
    </>
  )
}

export default App
