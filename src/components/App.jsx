import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Layout from './layout/Layout';
import MovieDetails from './pages/MovieDetails';
import Reviews from './reviews/Reviews';
import Cast from './cast/Cast';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moveid" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
