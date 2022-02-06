import './App.css'
import Counter from './Counter'
import comboros from './images/logo-blanc.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={comboros} alt="comboros logo" />
      </div>
      <Counter />
    </div>
  )
}

export default App
