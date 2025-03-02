import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import moviesData from './movies/movies_data.json'

const { movies } = moviesData;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home movies={movies}/>} />
      </Routes>
    </Router>
  );
}

export default App;