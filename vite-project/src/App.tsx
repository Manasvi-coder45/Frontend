import { Chat } from './components/Chat'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Mental Wellness Chat</h1>
        <p>A safe space to talk about your thoughts and feelings</p>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  )
}

export default App
