import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Layout from "./components/layout/layout.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import VacancyPage from "./pages/VacancyPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import FeedbackPage from "./pages/FeedbackPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<App />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/vacancies" element={<VacancyPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/feedback" element={<FeedbackPage />} />
                  {/*<Route path="*" element={<NotFound />} />*/}
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
