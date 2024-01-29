import './App.css'
import Header from './components/Header'
import { Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Chats from './pages/Chats'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
