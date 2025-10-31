import { Navigate, Route, Routes } from 'react-router-dom'
import AlanPage from './AlanPage.jsx'
import MiaPage from './MiaPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mia" replace />} />
      <Route path="/mia" element={<MiaPage />} />
      <Route path="/alan" element={<AlanPage />} />
      <Route path="*" element={<Navigate to="/mia" replace />} />
    </Routes>
  )
}

export default App
