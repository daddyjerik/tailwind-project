import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Flex } from './components/flex'
import { Grid } from './components/Grid'
import { Home } from './components/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)