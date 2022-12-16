import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';
import './App.css';

const App = () => (
  <>
    <Navbar />

    <div className="center">
      <div>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </>
);

export default App;
