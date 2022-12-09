import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
