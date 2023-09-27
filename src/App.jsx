import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;