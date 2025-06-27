import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Layout from "./components/layout/layout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<App />} />
                  {/*<Route path="/projects" element={<Projects />} />*/}
                  {/*<Route path="/vacancies" element={<Vacancies />} />*/}
                  {/*<Route path="/contact" element={<Contact />} />*/}
                  {/*<Route path="/feedback" element={<Feedback />} />*/}
                  {/*<Route path="*" element={<NotFound />} />*/}
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
