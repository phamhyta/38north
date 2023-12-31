import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AdminPage, Home, HomePage, Login } from './components';
import CrawlPage from './components/CrawlPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/crawl" element={<CrawlPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
