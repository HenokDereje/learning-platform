import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
