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
      <div className="android-link">
        <a
          className="download-app-link"
          href="http://comboros-buvette.alwaysdata.net/apk"
        >
          Téléchargez l'application mobile !
        </a>
      </div>
      <div className="android-link">
        <a
          className="apk-help"
          href="https://www.frandroid.com/comment-faire/tutoriaux/184151_comment-installer-un-fichier-apk-sur-son-terminal-android"
          target="_blank"
          rel="noreferrer"
        >
          (Comment installer un fichier APK sur Android)
        </a>
      </div>
    </div>
  )
}

export default App
