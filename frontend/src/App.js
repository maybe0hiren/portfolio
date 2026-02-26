import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
    </>
  );
}

export default App;
